const connection = require('../models/db-connection');
// const express = require('express');
// const mysql   = require('mysql2');

// const userName = 'root';
// const password = 'root';
// const host = 'localhost';
// const db = 'crud-node';

// const connection = mysql.createConnection({
//     host: host,
//     user: userName,
//     password: password,
//     database: db
// });

// connection.connect( (err) => {
//     if (err) {
//         console.log ('failed', err.sqlMessage);
//     }
// });

module.exports.all = (req) => {

    const query = 'SELECT * FROM categories';

    return new Promise((resolve, reject)=>{

        connection.query(query, (err, results, fields) => {
        
            if (!err) {
                return resolve(results);
            }
            return reject(err);
        })
    })
};


module.exports.single = (req) => {
    const query = `SELECT * FROM categories where id = ${req.params.id}`;
    
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, results, fields) => {
            
            if (!err) {
                return resolve(results);
            }
            return reject(err);
        })
    })
};

module.exports.create = (req) => {
    
    const title = req.body.title;
    
    const query = `INSERT INTO categories (title) values ('${ title }')`;
    
    return new Promise((resolve, reject)=>{
        connection.query(query, (err, results, fields) => {
        
            if (!err) {
                if(results.insertId) {
                    return resolve({result: 'Record inserted successfully.'});
                }
            }

            return reject(err);
        })
    })
};

module.exports.update = (req) => {
    
    const title = req.body.title;
    
    const query = `UPDATE categories SET title = '${ title }' WHERE id = ${ req.params.id }`;
    
    return new Promise((resolve, reject)=>{
      
        connection.query(query, (err, results, fields) => {
            
            if (!err) {
                if(results.affectedRows) {
                    return resolve({result: 'Record updated successfully.'});
                } else {
                    return resolve({result: 'Record is not found'});
                }
            }

            return reject(err);
        })
    })
};

module.exports.delete = (req) => {
    
    const query = `DELETE FROM categories AWHERE id = ${ req.params.id }`;

    return new Promise((resolve, reject)=>{

        connection.query(query, (err, results, fields) => {
    
            if (!err) {
                if(results.affectedRows) {
                    return resolve({result: 'Record deleted successfully'});
                } else {
                    return resolve({result: 'Record is not found'});
                }
            }

            return reject(err);
        })
    })
};
