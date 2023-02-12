const ObjectId = require('mongodb').ObjectId;
const mongodb = require('../db/connect.js');

const getTodos = async (req, res, next) => {
    try {
        const result = await mongodb.getDb().db('todo').collection('todolist').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (err) {
        console.log(err)
    }
    
};


module.exports = { getTodos }