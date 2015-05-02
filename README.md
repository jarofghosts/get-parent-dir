# get-parent-dir

[![Build Status](http://img.shields.io/travis/jarofghosts/get-parent-dir.svg?style=flat)](https://travis-ci.org/jarofghosts/get-parent-dir)
[![npm install](http://img.shields.io/npm/dm/get-parent-dir.svg?style=flat)](https://www.npmjs.org/package/get-parent-dir)

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
