const express = require('express');

const app = express();

//passing a funtion in the "use" method and inside that function passing another function called next
//to be able to pass it to the next middleware
app.use((req, res, next)=>{
    console.log('In the middleware!');
    next(); //allows the request to continue to the next middleware
});


app.use((req, res, next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express</h1>')
});


app.listen(3000);