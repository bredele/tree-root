

/**
 * Return the root index of a node in an array representation
 * of a tree of nodes.
 *
 * @param {Array} arr
 * @param {Number} index
 * @api public
 */

module.exports = function(arr, index) {
  while (index !== arr[index]) index = arr[index]
  return index
}
