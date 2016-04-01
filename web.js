var express = require('express');
var path = require('path');

var app = express();

// app.configure(function () {
//     app.use(express.bodyParser());
//     app.use(express.logger());
//     app.use(express.static(path.join(__dirname,'dist')));
    
// });

app.get('/',function (request,response) {
    response.send("Hello Świat");
})

// var port = process.env.Port || 5000;

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});