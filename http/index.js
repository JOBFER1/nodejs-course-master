const http = require('http');

const colors = require('colors');

/* //Primera forma
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>Hello world from a Server</h1>`);
  res.end();
}).listen(3000);
*/

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>Hello world from a Server</h1>`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is working!'.green);
});

/* //Otra forma
const handleServer = function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>Hello world from a Server</h1>`);
  res.end();
};
http.createServer(handleServer).listen(3000);
*/

/* //Otra
const server = http.createServer(handleServer).listen(3000);
server.listen(3000);
*/