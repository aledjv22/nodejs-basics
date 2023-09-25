// Import the http module from Node.js
const http = require('http');

// Create an HTTP server and make it listen on port 3000
http.createServer(router).listen(3000);

// Function that handles server routes
function router (req, res){
  console.log('New request!'); // Prints a new request message to the console
  console.log(req.url); // Prints the request URL to the console

  // Switch that handles different server routes
  switch (req.url){
    case '/hello':
      res.write('Hello, how are you?'); // Writes to the server response
      res.end(); // Ends the server response
      break;

    default:
      res.write('Error 404: I do not know what you want'); // Writes to the server response
      res.end(); // Ends the server response
  }

  // res.writeHead(201,{ 'Content-Type': 'text/plain'});
  // res.write('Hello, I know how to use NodeJS HTTP');
  // res.end();
}

console.log('Listening on http://localhost:3000'); // Prints a message to the console that the server is listening on port 3000