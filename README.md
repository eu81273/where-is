# whereis

> Finds file or directory by traverse the directory tree bottom-up.

### Getting started

```javascript
var whereIs = require('where-is');

//where-is returns the/path/package.json/exists/
var projectRoot = whereIs('package.json');

//where-is returns false when no file matches
var maybeFalse = whereIs('perhaps-no-exist-file');
```

### Parameters

```javascript
whereIs(file(or directory)name[, startingPath]);
```

`where-is` returns the path where contains given file name/directory name.
If given startingPath is /foo/bar/fox/dog then  `where-is` starts searching  with following order.

```bash
/foo/bar/fox/dog
/foo/bar/fox/
/foo/bar/
/foo/
/
```

Default startingPath is `process.cwd()`.

### install

```
npm install where-is
```

### license

MIT
