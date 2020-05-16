const fetch = require('node-fetch')
const cheerio = require('cheerio')
const express = require('express')
const router = express.Router()

const convertHtmlToJson = require('../utils/tojson')

router.get('/', async (req, res) => {
  try {
    const response = await fetch('https://www.worldometers.info/coronavirus')
    const data = await response.text()

    const $ = cheerio.load(data)

    const header = [
      '#',
      'Country',
      'Total Cases',
      'New Cases',
      'Total Deaths',
      'New Deaths',
      'Total Recovered',
      'Active Cases',
      'Serious/Critical',
      'casesPerMillion',
      'deathsPerMillion',
      '1st Case',
    ]

    const tojson = convertHtmlToJson($, '#main_table_countries_today', header)

    tojson.pop()

    return res.status(200).json(tojson)
  } catch (e) {
    return res.status(500).json({
      error: 'Something wrong happened, please try again',
    })
  }
})

module.exports = router
