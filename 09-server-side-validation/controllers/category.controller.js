const connection = require('../models/db-connection');
const categoryModule = require('../models/category.module');

module.exports.all = async (req, res) => {

    try {
        const results = await categoryModule.all(req);
        res.json(results);
    } catch(e) {
        res.json(e);
    }

    // connection.promise().query(query)
    // . then(([rows, fields])=>{
    //     console.log('rows', rows);
    //     res.json(rows);
    // });
};

module.exports.single = async (req, res) => {
    
    try {
        const results = await categoryModule.single(req);
        res.json(results);
        
    } catch(e) {
        res.json(e);
    }
};

module.exports.create = async (req, res) => {
    
    try {
        const results = await categoryModule.create(req);
        res.json(results);
        
    } catch(e) {
        res.json(e);
    }
};

module.exports.update = async (req, res) => {
    
    try {
        const results = await categoryModule.update(req);
        res.json(results);
        
    } catch(e) {
        res.json(e);
    }
};

module.exports.delete = async (req, res) => {
    
    try {
        const results = await categoryModule.delete(req);
        res.json(results);
        
    } catch(e) {
        res.json(e);
    }
};
