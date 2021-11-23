// To create server we require http core package 
const http=require('http');

// Use createServer() method in http and store it in a variable

const server=http.createServer((req,res)=>{
console.log(req);
});

// We have to make our server to listen to request on specific port
server.listen(3000);

// Run the file using node and open localhost:3000 in browser