var express = require('express');
var path = require('path');
var cors = require('cors');
const fileUpload = require('express-fileupload');
var app = express();
const fs = require('fs');

app.use(cors());
app.use(fileUpload());
app.use("/public", express.static(path.join(__dirname, 'public')));

app.post('/import', (req, res) => {
    if (!req.files) {
        return res.sendStatus(500).send({ msg: "No file." });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/public/data.csv`, function (err) {
        if (err) {
            return res.sendStatus(500).send({ msg: "Error." });
        }
        return res.sendStatus(200);
    });
})

app.get('/export', function (req, res, next) {
    const file = `${__dirname}/public/data.csv`;
    fs.access(file, fs.F_OK, (err) => {
        if (err) {
            return res.sendStatus(404);
        }
        res.download(file);
    })
});

app.listen(8000, function() {
    console.log('App running on port 8000');
});