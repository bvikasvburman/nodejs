const express = require('express');
const mysql   = require('mysql2');
const dbConfig = require('../config/database');

const connection = mysql.createConnection({
    host: dbConfig.mysql.local.host,
    user: dbConfig.mysql.local.user,
    password: dbConfig.mysql.local.password,
    database: dbConfig.mysql.local.database
});

connection.connect( (err) => {
    if (err) {
        console.log ('failed', err.sqlMessage);
    }
});

module.exports = connection;