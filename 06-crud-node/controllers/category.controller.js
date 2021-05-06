const connection = require('../models/db-connection');

module.exports.all = (req, res) => {

    const findAllQuery = 'SELECT * FROM categories';
    connection.query(findAllQuery, (err, results, fields) => {
        
        if (!err) {
            res.json(results);
        }
    })
};


module.exports.single = (req, res) => {
    const query = `SELECT * FROM categories where id = ${req.params.id}`;
    connection.query(query, (err, results, fields) => {
        
        if (!err) {
            res.json(results);
        }
    })
};

module.exports.create = (req, res) => {
    
    const title = req.body.title;
    
    const query = `INSERT INTO categories (title) values ('${ title }')`;
    connection.query(query, (err, results, fields) => {
        
        if (!err) {
            if(results.insertId) {
                res.json({result: 'Record inserted successfully.'});
            }
        }
    })
};

module.exports.update = (req, res) => {
    
    const title = req.body.title;
    
    const query = `UPDATE categories SET title = '${ title }' WHERE id = ${ req.params.id }`;
    connection.query(query, (err, results, fields) => {
        
        if (!err) {
            if(results.affectedRows) {
                
                res.json({result: 'Record updated successfully.'});
            }
        }
    })
};

module.exports.delete = (req, res) => {
    
    const query = `DELETE FROM categories AWHERE id = ${ req.params.id }`;

        connection.query(query, (err, results, fields) => {
    
            if (!err) {
                if(results.affectedRows) {
                    res.json({result: 'Record deleted successfully.'});
                } else {
                    res.json({result: 'Record is not found'});
                }
            } else {
                res.json({result: err.sqlMessage});
            }
        })
};
