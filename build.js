'use strict';

const Promise = require('bluebird');
const Path = require('path');
const FS = require('fs');
const json2md = require('json2md');
const pkg = require('./package.json');
const util = require('util');
const _ = require('lodash');

const debug = require('debug')('build');

const categoryNames = {
    thinking: '思考',
    'front-end': '前端',
    design: '设计',
    fp: '函数式编程',
    others: '其他',
    ops: '运维',
    database: '数据库',
};

const absPath = (...paths) => Path.resolve(__dirname, ...paths);
const relativePath = (path) => Path.relative(__dirname, path);
const toCamelCase = (str) => str
    .replace(/\s(.)/g, ($1) => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, ($1) => $1.toUpperCase());

const getStat = util.promisify(FS.stat);
const readFile = util.promisify(FS.readFile);
const readdir = util.promisify(FS.readdir);
const writeFile = util.promisify(FS.writeFile);

const categories = {};
const toc = [];

json2md.converters.ul = async (array) => {
    return `- ${array.join('\n- ')}`;
};

json2md.converters.md = async (filepath) => {
    return await readFile(filepath, {encoding: 'utf8'});
};

json2md.converters.toc = (contents) => {
    const indent = 4;
    const ul = '-';
    const space = ' '.repeat(indent);
    const usedHeaders = {};
    const headers = [];

    contents.forEach((c) => {
        const {name, level} = c;
        let anchor = name.trim().toLowerCase().replace(/\s+/g, '-').replace(/\-+$/, '');
        const usedHeader = usedHeaders[anchor];
        if (usedHeader) {
            usedHeaders[anchor] = usedHeader + 1;
            anchor = `${anchor}-${usedHeader}`;
        } else {
            usedHeaders[anchor] = 1;
        }
        const header = `${space.repeat(level - 2)}${ul} [${name}](#${anchor})`;
        headers.push(header);
    })

    const str = `## TOC\n\n${headers.join('\n')}`;
    return str;
};

async function getTitle(path) {
    const content = await readFile(path, {encoding: 'utf8'});
    const matched = content.match(/^##? ?(.+)/);
    if (!matched) return '';

    let title = matched[1];
    title = title.replace(/\[(.*?)\]/g, (m, p) => p);

    return title;
}

async function enterDir(dirName, parentPath, parent, level = 3) {
    const dirPath = absPath(parentPath, dirName);
    const filenames = await readdir(dirPath);
    const children = [];
    const cate = categories[dirPath] = categories[dirPath] || {
        name: dirName, level, children, isDir: true,
    };

    await Promise.map(filenames, (filename, index) => {
        const curPath = absPath(dirPath, filename);
        return getStat(curPath)
            .then((stats) => {
                if (stats.isFile()) {
                    return getTitle(curPath).then((title) => {
                        const relPath = relativePath(curPath);
                        children[index] = `[${title}](${relPath})`;
                    });
                } else if (stats.isDirectory()) {
                    return enterDir(filename, dirPath, cate, level + 1)
                        .then((cate) => {
                            children[index] = cate;
                        });
                } else {
                    // ignore
                }
            });
    });

    return cate;
}

function handleCategories(categories, levelStd, structure) {
    _.chain(categories)
        .each((cate) => {
            const {name, level, children = []} = cate;
            let cateName = categoryNames[name] || toCamelCase(name);

            if (cate.level !== levelStd) {
                return;
            }

            const list = children.filter((c) => !c.isDir);
            const childCates = children.filter((c) => c.isDir);

            toc.push({name: cateName, level});
            structure.push(
                {[`h${level}`]: cateName},
                {ul: list}
            )

            handleCategories(childCates, levelStd + 1, structure);
        })
        .value();
}

async function build() {
    const filenames = await readdir(__dirname);
    let dirNames = filenames.filter((name) =>
        !name.startsWith('_') && !name.startsWith('.')
        && (! ['node_modules'].includes(name)));

    dirNames = await Promise.map(dirNames, ((dirName) => {
        return getStat(absPath(dirName))
            .then((stats) => stats.isDirectory() ? dirName : null);
    })).filter((name) => name);

    const rootCategories = await Promise.map(dirNames,
        (filename, index) => enterDir(filename, __dirname, null, 3));

    const structure = [
        {h1: '今天我学了什么 (Today I learned)'},
        {blockquote: pkg.description},
        {toc},
        {h2: '分类'}
    ];

    toc.push({name: '分类', level: 2});

    debug('categories=%O', categories);
    handleCategories(rootCategories, 3, structure);

    toc.push({name: '反馈问题或建议', level: 2});
    toc.push({name: '版权声明', level: 2});

    structure.push(
        {md: absPath('_docs/issue.md')},
        {md: absPath('_docs/license.md')}
    );

    const content = await json2md.async(structure);

    const file = absPath('README.md');
    await writeFile(file, content);
    console.log('writeFile: %s', file);
}

(async () => {
    try {
        await build();
    } catch(err) {
        console.error('[Build failed] Error stack: %s', err.stack);
        process.exit(1);
    }
})()
