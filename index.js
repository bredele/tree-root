

module.exports = function(ids, index) {
  while (index !== ids[index]) index = ids[index]
  return index
}
