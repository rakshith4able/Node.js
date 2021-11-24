// To create server we require http core package 
const http=require('http');

// Use createServer() method in http and store it in a variable

const server=http.createServer((req,res)=>{
// Accessing request properties
console.log(req.url,req.method,req.headers);

// Routing the requests
let url=req.url;
if(url==="/"){
res.write("<html>");
res.write("<body><form action='/message' method='post'><input type='text'/> <input type='submit' value='submit' /> </form></body>");
return res.end();
}


// Sending response
res.setHeader('Content-type','text/html');
res.write("<html>");
res.write("<head> <title>My First Response</title></head>");
res.write("<body><h1>Hello from node server</h1></body>");
res.end();

// If we want to quite event loop on request we use the following code process.exit()
// process.exit();
});

// We have to make our server to listen to request on specific port
server.listen(3000);

// Run the file using node and open localhost:3000 in browser
