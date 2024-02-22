// Use the require method to access the http object:
const http = require('http');

// define constants for PORT and HOST; set to 4000 and localhost
const PORT = 4000;
const HOST = 'localhost';

// instantiate a server with a request and response parameter
http.createServer((req, res) => {
    //write the response header to the client with an appropriate MIME type - content type;
    //sets the HTTP status code to 200 (OK) and specifies that the content of the response is plain text
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //create a simple message to return in the response body using the end function
    res.end('Hello World');
    //add a log line to feedback to the console
    console.log(`Server at http://${HOST}:${PORT}`);
}).listen(PORT, HOST); // have node listen on HOST and PORT