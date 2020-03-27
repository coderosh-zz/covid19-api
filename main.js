const express = require('express')
const app = express()
app.use(express.json())

const byCountriesRouter = require('./routes/bycountries')


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/', byCountriesRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
)
