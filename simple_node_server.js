const http = require('http');
const port = 5000;
var name = "";

function getHome(req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<html><body><h1> Hello World!, Welcome to WeJapa Internships</h1><br><h2> Make a POST request with your name.</h2><h2><form method='post'><label for='name'> Name:</label><br><input type='text' id='name' value='your name'><br><input type='submit' value='Submit'></form></h2></body></html>");
	res.end();
}

// create an http server
const simpleServer = http.createServer((req, res) => {
	switch (req.method) {
		case "GET":
		if (req.url === "/") {
			getHome(req, res);
		}
			break;
		case "POST":
		if (req.url === "/") {
			var reqBody = '';
			req.on('data', (data) => {
                reqBody += data;
                process.stdout.write(data);
			});

			req.on('end', (data) => {
				
			});
		}
			break;
		default:
			break;
	}
	res.end();

}).listen(port);

console.log(`Server running on ${port}...`);