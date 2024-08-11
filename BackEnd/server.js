const mydb = require("./mydb");

const cors = require("cors");
const bodyParser = require("body-parser");

const express = require('express')
const server = express()
const port = 8080

const corsOptions = {
    origin: "http://localhost:3000"
};


let db = new mydb();
db.loadAllData();

server.use(cors(corsOptions));

// parse requests of content-type - application/json
server.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
    res.send('root')
})

server.get('/loadData', (req, res) => {
    res.send('Data loaded successfully.');
})

server.get('/teams', (req, res) => {
    let teams = db.getTeams();
    res.send(teams);
})

server.get('/players', (req, res) => {
    let teams = db.getPlayers();
    res.send(teams);
})

server.listen(port, () => {
    console.log(`Backend server is listening on port ${port}`);
})