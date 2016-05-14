var express = require("express");
var app = express();
var requester = require("request");

app.set("view engine", "ejs")

app.get("/", function(request, response){
  response.render("search")
});

app.get("/result", function(req, res){
  console.log(req.query.searchItem)
  requester("http://www.omdbapi.com/?s=" + req.query.searchItem, function(error, response, body){
    if(!error && response.statusCode == 200){
      var data = JSON.parse(body)
      res.render("result", {data:data})
    }
  });
});

app.listen(3000, function(){
  console.log("quashie made me listen");
})
