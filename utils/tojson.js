const convertHtmlToJson = ($, tdSelector, header) => {
  const body = []

  let d = {},
    j = 0

  $(tdSelector).each((_, el) => {
    let val = $(el)
      .text()
      .trim()

    if (!isNaN(parseFloat(val))) {
      val = parseFloat(val)
    }

    if (val == '') {
      val = 0
    }

    d[`${header[j]}`] = val

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
