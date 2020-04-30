const express = require("express");
const morgan = require("morgan");
const app = express();
const main = require("./views/main");
// const { db } = require('./models');
const {db, Page, User } = require("./models");
const wiki = require('./routes/wiki');
const user = require('./routes/user');
const addpage = require('./views/addPage');

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use('/wiki', wiki);
// app.use('/user', user);

// app.get("/", async (req, res) => {
//   res.send(await main());
// });

app.get("/", async (req, res) => {
    res.send(await addpage());
})

db.authenticate().then(() => {
    console.log('connected to the database');
});

const init = async () => {
    await Page.sync({force: true});
    await User.sync({force: true});
};

init();

const PORT = 1338;

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
