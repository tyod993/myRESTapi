const express = require('express');
const { Pool, Client } = require('pg');


const app = express();

app.listen((5000), ()=>{
    console.log("Started listening on port 5000");
});

/*
const link = "climbs-db.c5tvyr0esqzh.us-west-2.rds.amazonaws.com";
const username = "root"
const password = "Punksnotdead2016!"
const listenPort = 5432;
*/

const pool = new Pool();

//middleware
app.use('/posts', () =>{
    console.log("this is a function that runs when you get service")
})

app.post('/save', (req, res) =>{

})

//routes
app.get('/', (req,res) => {
    res.send("Looks like it worked")
})

app.get('/users', (req,res) => {

} )