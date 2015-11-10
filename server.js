var http = require("http");
var port = 8080;
var fs= require('fs');
var index = fs.readFileSync(__dirname + "/index.html");
var bundle = fs.readFileSync(__dirname + "/bundle.js");
var React=require('react')
var ReactApp = React.createFactory(require('./src/js/components/App.js'));



var handler = function(req,res){ 
	
	if (req.url ==="/"){
		res.writeHead({ 
				"Content-type": "text/html",
				"status-code":200

		})
		var reactHtml = React.renderToString(ReactApp());
		console.log(reactHtml);
		res.end(reactHtml);
			
		
	}else if (req.url ==="/bundle.js") { 
		res.writeHead({ 
				"Content-type": "text/js",
				"status-code":200

		})
		res.end(bundle);
	}

}


http.createServer(handler).listen(port);