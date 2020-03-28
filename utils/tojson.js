const map = require('./map')

const convertHtmlToJson = ($, tableSelector, _header) => {
  const body = []
  let header = []

  $(`${tableSelector} th`).each((_, el) => {
    header.push(
      $(el)
        .text()
        .trim()
    )
  })

  // if (_header.length !== header.length) {
  //   let diff = header.length - _header.length
  //   if (diff > 0) {
  //     _header.push(...Array(diff).keys(diff))
  //   }
  // }

  header = map(header, _header)

  let d = {},
    j = 0

  $(`${tableSelector} td`).each((_, el) => {
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
