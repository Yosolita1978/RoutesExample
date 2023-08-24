import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';

const app = express();

app.use(cors());
const __dirname = path.resolve();
//~users/Cristina/src/reoutesExplame/Server.js
console.log(__dirname);

const PORT = process.env.PORT || 2023;

app.get('/', (req, res) => {
    //res.send('Hello Welcome to my Server');
    //creating the path to the index.html file.
    //pwd index.html - use that file as the response
    console.log("Someone is trying to access the home page"); 
    res.sendFile(path.join(__dirname, 'index.html'));

})

app.get('/aboutme', (req, res) => {
    //res.send('Hello Welcome to my Server');
    //creating the path to the index.html file.
    //pwd index.html - use that file as the response 
    res.sendFile(path.join(__dirname, 'about.html'));

})

app.all('*', (req, res) => {
    res.status(404)
    res.sendFile(path.join(__dirname, '404.html'));
})

app.listen(PORT, () => {
    console.log(`Hola! Server is running on port ${PORT}`)
});