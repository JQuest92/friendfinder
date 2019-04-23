var express = require("express");
var path = require("path");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("app/public"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("LISTENING on PORT: " + PORT);
});