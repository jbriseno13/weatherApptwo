import cors from 'cors';
import express from "express";
import fetch from "node-fetch";

import { config } from "dotenv";
config();

console.log(`Your api key is ${process.env.API_KEY}`);

const app = express();

// //Set the port that you want the server to run on
const PORT = 8081;
app.use(cors());



// //ROUTE FOR THE INDEX
app.get('/', (req, res) =>{
    res.json("Hello, please work");
})

let URL = `https://api.openweathermap.org/data/2.5/weather?zip=95825,&APPID=${process.env.API_KEY}&units=imperial`;

app.get('/whatstheweather', (req, res) => { 
    fetch(URL) 
    .then((response) => response.json()) 
    .then((data) => { res.send(data); 
    }); 
})





app.listen(PORT, () => console.log(`This a live test! Server running on Port http://localhost: ${PORT}`)); 