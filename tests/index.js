var path = require('path')

var test = require('tape')

var findParent = require('../')

test('actually works sync', function (t) {
  t.equal(findParent.sync(), path.resolve(__dirname, '..'))
  t.end()
})

test('actually works async', function (t) {
  t.plan(1)

  findParent(ready)

  function ready (dirname) {
    t.equal(dirname, path.resolve(__dirname, '..'))
  }
})
