const convertHtmlToJson = ($, tdSelector, header) => {
  const body = []

  let d = {},
    j = 0

  $(tdSelector).each((_, el) => {
    d[`${header[j]}`] = $(el)
      .text()
      .trim()

    if (j == header.length - 1) {
      body.push(d)
      j = 0
      d = {}
    } else {
      j++
    }
  })

  return body
}

module.exports = convertHtmlToJson
