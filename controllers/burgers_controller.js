var express = require('express');
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

router.get('/', function(req, res){
    burger.all(function(data){
        console.log(data);
        res.render('index');
    })
    
})

//export so server.js can find
//fixed error:
//TypeError: Router.use() requires a middleware function but got a Object
module.exports = router;