const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));


const viewsPath = path.resolve(__dirname) + '/views/';

app.get('/', (req, res) => {
    res.sendFile(viewsPath + 'index.html');
});

app.get('/home', (req, res) => {
    res.sendFile(viewsPath + 'index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(viewsPath + 'about.html');
});

app.get('**', (req, res) => {
    res.send('Page not found');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT } port`));