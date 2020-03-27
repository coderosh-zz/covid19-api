const express = require('express')
const app = express()
app.use(express.json())

const byCountriesRouter = require('./routes/bycountries')

app.use('/', byCountriesRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
)
