const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(__dirname + '/dist'));


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});


// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);