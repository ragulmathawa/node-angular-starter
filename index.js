const express = require('express')
const app = express()
const path = require("path")
const port = process.env.PORT || 4200

app.use(express.static('public'))
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.use("/public",express.static(__dirname + '/public'));

app.listen(port, () => console.log(`IOT app listening on port ${port}!`))