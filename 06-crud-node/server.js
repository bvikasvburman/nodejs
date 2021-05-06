const express    = require('express');
const mysql      = require('mysql2');
const formData   = require('express-form-data');
const os         = require('os');

const app = express();

const PORT = process.env.PORT || 3000;

const options = {
    uploadDir: os.tmpdir(),
    autoClean: true
  };
  

app.use(express.static('public'));
app.use(express.json({type:'application/json'}));
app.use(express.urlencoded({extended: true}));

app.use(formData.parse(options));
app.use(formData.format());
app.use(formData.stream());
app.use(formData.union());

const api = require('./routes/api');

app.use('/api', api);

app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT } port...`);
})