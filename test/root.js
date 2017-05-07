/**
 * Tests dependencies.
 */

const test = require('tape')
const root = require('..')

test('should return the root index of a node in an array representation of a tree of node', assert => {
  assert.plan(1)
  const arr = [0, 1, 2, 2, 3]
  assert.equal(root(arr, 4), 2)
})
