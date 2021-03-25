var express = require('express');
var app = express();
var path = require('path');
var multer = require('multer')
var cors = require('cors');

app.use(cors())

app.use("/public", express.static(path.join(__dirname, 'public')));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public')
    },
    filename: function (req, file, cb) {
        cb(null, 'data.csv' )
    }
})

var upload = multer({ storage: storage }).single('file');

app.post('/upload',function(req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});

app.get('/download', function (req, res, next) {
    try {
        const file = `${__dirname}/public/data.csv`;
        res.download(file);
    } catch (err) {
        console.log(err);
    }
});

app.listen(8000, function() {
    console.log('App running on port 8000');
});