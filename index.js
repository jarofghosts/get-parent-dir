var path = require('path')

var fileexists = require('utils-fs-exists')

module.exports = findParent

function findParent (ready) {
  var parent = module.parent
  var bits

  while (parent.parent) {
    parent = parent.parent
  }

  bits = parent.filename.split(path.sep)
  bits = bits.slice(0, bits.indexOf('node_modules'))

  if (ready) {
    return fileexists(packageDir(bits), tryNext)
  }

  while (!fileexists.sync(packageDir(bits))) {
    bits.pop()
  }

  return bits.length ? bits.join(path.sep) : null

  function tryNext (exists) {
    if (exists) {
      return ready(bits.join(path.sep))
    }

    if (!bits.length) {
      return ready(null)
    }

    bits.pop()

    fileexists(packageDir(bits), tryNext)
  }
}

function packageDir (bits) {
  return bits.concat('package.json').join(path.sep)
}

findParent.sync = findParent.bind(this, null)
