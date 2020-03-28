// header = map(header, _header)

module.exports = (arr1, arr2) => {
  return [...arr1].map((_, i) => {
    if (!arr2[i]) {
      return arr1[i]
    }

    return arr2[i]
  })
}
