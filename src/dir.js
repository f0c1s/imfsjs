const {log} = require('./globals');

/**
 * @typedef {Object} Dir
 * @property {string} fullPath
 * @property {string} name
 * @property {Dir} dirs
 * @property {Object} files
 * @property {Date} mtime
 */
class Dir {
    constructor(path, name) {
        this.path = path;
        this.name = name;
        this.dirs = {};
        this.files = {};
        this.mtime = new Date();
    }

    static create(rootNode, fullPath) {
        log({rootNode, fullPath});
        const path = fullPath.split('/').filter(p => p);
        log({path});
        if (path.length > 10) {
            throw new Error('Path too long');
        }
        let tmp = rootNode;
        for (let i = 0; i < path.length; i++) {
            log({i});
            if (!tmp.dirs[path[i]]) {
                const currPath = "/" + path.slice(0, i).join('/') + path[i];
                log({currPath});
                const dir = new Dir(currPath, path[i]);
                tmp.dirs[path[i]] = dir;
                rootNode.index[currPath] = dir;
            }
            tmp = tmp.dirs[path[i]];
        }
        log(rootNode.index[fullPath]);
        return rootNode.index[fullPath];
    }
}

module.exports = Dir;
