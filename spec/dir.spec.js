const Dir = require('../src/dir');

const root = {dirs: {}, files: {}, mtime: new Date(), index: {}};

describe('Dir', () => {
    it('should create a new dir', () => {
        const dir = Dir.create(root, '/test');
        expect(dir.path).toBe('/test');
        expect(dir.name).toBe('test');
        expect(dir.dirs).toEqual({});
        expect(dir.files).toEqual({});
        expect(dir.mtime).toBeInstanceOf(Date);
    });
});
