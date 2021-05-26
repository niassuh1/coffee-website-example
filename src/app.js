const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Coffee = require("./models/coffee");
const Bakery = require("./models/bakery");
const app = express();

//Mongoose Connect
dotenv.config();

mongoose
  .connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((r) => console.log("Connected to DB"))
  .catch((e) => console.log(e));

//To use public
app.use(express.static("./public"));
app.set("view engine", "ejs");

app.get('*', (req, res) => {
  res.redirect('https://'+ req.headers.host + req.url);
})

app.get("/", (req, res) => {
  res.render("index", { page: "home" });
});

app.get("/menu", (req, res) => {


  Coffee.find()
    .then((coffee) => {
        Bakery.find()
            .then(bakery => {
                res.render("menu", { page: "menu", coffees: coffee, bakeries: bakery });
            })
            .catch()
    })
    .catch((e) => console.log(e));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
