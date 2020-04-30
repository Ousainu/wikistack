const express = require('express');
const morgan = require('morgan');
const app = express();
const main = require('./views/main');

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended: false}));

app.get("/", async (req, res) => {
    res.send(main());
})

const PORT = 1337;

app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});
