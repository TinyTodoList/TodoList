 var connect = require('connect'); 
 var serveStatic = require('serve-static'); 
 var app = connect(); 
 app.use(serveStatic(__dirname + '/angularjs', {default: "test.html"}));
 app.listen(5000);
