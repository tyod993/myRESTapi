const express = require('express');

const app = express();
const listenPort = 4000;

//middleware
app.use('/posts', () =>{
    console.log("this is a function that runs when you get service")
})


//routes
app.get('/', (req,res) => {
    res.send("Looks like it worked")
})

app.get('/users', (req,res) => {

} )

//Start listening on port 
app.listen(listenPort, () =>
console.log("The server has now started"));