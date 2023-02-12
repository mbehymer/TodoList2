const express = require('express');
const router = express.Router();

const todosFunc = require('../controller/');

router.get('/', todosFunc.getTodos);

module.exports = router;