const express = require('express');
const cors = require('cors');
const { Pool, Client } = require('pg');


const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'root',
    
})

app.listen((5000), ()=>{
    console.log("Started listening on port 5000");
});

/*
const link = "climbs-db.c5tvyr0esqzh.us-west-2.rds.amazonaws.com";
const username = "root"
const password = "Punksnotdead2016!"
const listenPort = 5432;
*/

//middleware
app.use('/posts', () =>{
    console.log("this is a function that runs when you get service")
})

app.post('/save', (req, res) =>{
    console.log(req.body);
    var data = JSON.parse(req.body);
    console.log(data);
})

app.put('/new', () =>{
    
})

app.get('/get_all', (req, res) => {
    console.log(req.body);
})

app.get('/get_user_sessions', (req, res ) =>{
    console.log(res.body);
})