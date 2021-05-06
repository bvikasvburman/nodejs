const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
// app.set('views', path.resolve(__dirname) + '/templates');

app.get('/', (req, res) => {
    const title = 'Home Page';
    res.render('index', {title : title});
});

app.get('/home', (req, res) => {

    const title = 'Home Page';
    res.render('index', {title : title});
});

app.get('/about', (req, res) => {
    const title = 'About Page';
    const staticPath = app.get('views');
    console.log(staticPath);
    res.render( 'about', {title : title});
});

app.get('**', (req, res) => {
    res.send('Page not found');
});

app.listen(PORT, () => console.log(`Listening on ${ PORT } port`));