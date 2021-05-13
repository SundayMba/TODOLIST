const express = require("express");  //include they express parkage been installed

var app = express();                //create an express instance and it app
app.set("view engine", "ejs");      //set they view engine to ejs
app.use(express.static("public"));   //use the static files in my code
var items = ["Program", "Read", "Study"];     //an array to store the current added data

//new date object
var date = new Date();
app.use(express.urlencoded({extended: true})); //passes post request

//handle get request on home route
app.get("/", (req, res) => {

  var options = {
      weekday: "long",
      month:    "long",
      day: "numeric"
  }
  day = date.toLocaleDateString("en-US", options);
    res.render("index", {todaysDate : day, newItem : items})
});


//handle post request
app.post("/", (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");   //redirect and make a get request to they home route
})


app.listen(4000, function() {
    console.log("server is up and running at port 4000");
});
