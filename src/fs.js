const Dir = require('./dir');


const fs = {
    '/': {
        dirs: {}, files: {}, mtime: new Date(),
    }, index: {}
}
const root = fs['/'];

async function mkdir(path) {
    return new Promise((resolve, reject) => {
        try {
            Dir.create(root, path);
            resolve(fs.index[path]);
        } catch (e) {
            reject(e.message);
        }

    });
}

module.exports = {
    fs, root, mkdir
}
