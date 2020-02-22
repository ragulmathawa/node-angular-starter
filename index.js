const express = require('express')
const app = express()
const serveStatic = require('express-static-gzip');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 8080

app.use(history());
app.use(
  serveStatic(__dirname + '/dist/', {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
  })
);


app.listen(port, () => console.log(`IOT app listening on port ${port}!`))