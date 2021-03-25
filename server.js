var express = require('express');
var path = require('path');
var cors = require('cors');
const fileUpload = require('express-fileupload');
var app = express();

app.use(cors())
app.use(fileUpload());
app.use("/public", express.static(path.join(__dirname, 'public')));

app.post('/import', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "No file." })
    }
    const file = req.files.file;
    file.mv(`${__dirname}/public/data.csv`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error." });
        }
        return res.sendStatus(200);
    });
})

app.listen(8000, function() {
    console.log('App running on port 8000');
});