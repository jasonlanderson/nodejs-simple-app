/*jshint node:true*/

var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");

appInfoStr = JSON.stringify(appInfo, undefined, 2)
servicesStr = JSON.stringify(services, undefined, 2)

var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Below is your app and service info\n App Info: " + appInfoStr + "\n Service Info: " + servicesStr + "\n");
});

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);

// Start server
server.listen(port, host);
console.log('App started on port ' + port);
