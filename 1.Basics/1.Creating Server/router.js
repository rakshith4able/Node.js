// To handle file system
const fs=require("fs");


const requestListener=(req,res)=>{
    // Accessing request properties
    // console.log(req.url,req.method,req.headers);
    
    // Routing the requests
    let url=req.url;
    if(url==="/"){
    res.write("<html>");
    res.write("<body><form action='/message' method='post'><input name='message' type='text'/> <input type='submit' value='submit' /> </form></body>");
    return res.end();
    }
    
    
    // Redirecting using setHeader Location
    let method=req.method;
    if(url==="/message" && method==="POST")
    {
    // Parsing the incoming request data streams using buffer
    const data=[];
    req.on('data',(chunk)=>{
    console.log(chunk);
    data.push(chunk);
    });
    
    return req.on('end',()=>{
    const parsedBody=Buffer.concat(data).toString();
    const message=parsedBody.split('=')[1];
    fs.writeFileSync("Message.txt",message,()=>{
        res.statusCode=302;
        res.setHeader("Location","/");
        return res.end();
    });
    });
    }
    
    
    // Sending response
    res.setHeader('Content-type','text/html');
    res.write("<html>");
    res.write("<head> <title>My First Response</title></head>");
    res.write("<body><h1>Hello from node server</h1></body>");
    res.end();
    
    // If we want to quite event loop on request we use the following code process.exit()
    // process.exit();
    }


    // Exporting 

    module.exports=requestListener;