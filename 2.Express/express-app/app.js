
// require express
const express=require('express');

//  requiring body-parser to parse request body
const bodyParser=require('body-parser');

const path=require('path');

// execute the express
const app=express();


// Importing routes

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');




// express is all about middlewares which are request handlers multiple in numbers
// To use middlewares and allow the request to be funnelled through them we use use() 
// We have to pass a callback into use() with three arguements req,res and next. 
// next() on calling in callback sends request to next middleware
// app.use((req,res,next)=>{
//     console.log("In Middleware");
//     next();//Allows to send request to mext middleware
// });


//handling different routes with path parameter of use()

// If we want something to execute before going to other routes 
// app.use("/",(req,res,next)=>{
//     console.log("Initial");
//     next();
// })

// To use body-parser to parse req body
app.use(bodyParser.urlencoded({extended:false}));

// To serve static files (css)

app.use(express.static(path.join(__dirname,"public")));

// The first parameter is the filter and the routes in adminRoutes are accessed by /admin/routeInFile
app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});


app.listen(3000);