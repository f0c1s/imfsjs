const {fs, root, mkdir} = require('../src/fs');

describe("fs", () => {
    it("should have an index property", () => {
        expect(fs.hasOwnProperty("index")).toBe(true);
    });
});

describe("root", () => {
    it("should be an object", () => {
        expect(typeof root).toBe("object");
        expect(root.mtime).toBeInstanceOf(Date);
    });
});

describe("mkdir", () => {
    it("should be a function", () => {
        expect(typeof mkdir).toBe("function");
    });
    it("should create a new directory", () => {
        mkdir("/test").then(dir => {
            expect(dir.path).toBe("/test");
            expect(dir.name).toBe("test");
            expect(dir.dirs).toEqual({});
            expect(dir.files).toEqual({});
            expect(dir.mtime).toBeInstanceOf(Date);
        });
    });
});