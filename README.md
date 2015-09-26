# get-parent-dir

[![Build Status](https://img.shields.io/travis/jarofghosts/get-parent-dir.svg?style=flat-square)](https://travis-ci.org/jarofghosts/get-parent-dir)
[![npm install](https://img.shields.io/npm/dm/get-parent-dir.svg?style=flat-square)](https://www.npmjs.org/package/get-parent-dir)
[![npm version](https://img.shields.io/npm/v/get-parent-dir.svg?style=flat-square)](https://www.npmjs.org/package/get-parent-dir)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)
[![License](https://img.shields.io/npm/l/get-parent-dir.svg?style=flat-square)](https://github.com/jarofghosts/get-parent-dir/blob/master/LICENSE)

Find the parent directory from a required module.

## example

```javascript
var findParent = require('get-parent-dir')

findParent.sync() // Returns the parent dir as a string
```

## api

* `findParent(callback)` calls `callback` with found dir, or `null` if unfound.
* `findParent.sync()` returns found dir or `null` if unfound.

## license

MIT
