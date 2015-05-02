# get-parent-dir

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
