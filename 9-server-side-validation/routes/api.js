const { Router }    = require('express');
const express       = require('express');
const router        = express.Router();
const mysql         = require('mysql2');
const categoryController = require('../controllers/category.controller');

router.get('/vic', (req, res) => {
    console.log('Hello Vic');
    res.send('ss');
});

router.route('/categories').get(categoryController.all);
router.route('/categories/:id').get(categoryController.single);
router.route('/categories').post(categoryController.create);
router.route('/categories/:id').put(categoryController.update);
router.route('/categories/:id').delete(categoryController.delete);


/*
router.get('/categories/:id', (req, res) => {
    const query = `SELECT * FROM categories where id = ${req.params.id}`;
    connection.query(query, (err, results, fields) => {
        
        if (!err) {
            res.json(results);
        }
    })
});

router.post('/categories', (req, res) => {
    
    const title = req.body.title;
    
    const query = `INSERT INTO categories (title) values ('${ title }')`;
    connection.query(query, (err, results, fields) => {
        
        if (!err) {
            if(results.insertId) {
                res.json({result: 'Record inserted successfully.'});
            }
        }
    })
});

router.put('/categories/:id', (req, res) => {
    
    const title = req.body.title;
    
    const query = `UPDATE categories SET title = '${ title }' WHERE id = ${ req.params.id }`;
    connection.query(query, (err, results, fields) => {
        
        if (!err) {
            if(results.affectedRows) {
                
                res.json({result: 'Record updated successfully.'});
            }
        }
    })
});

router.delete('/categories/:id', (req, res) => {
    
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
});
*/

module.exports = router;
