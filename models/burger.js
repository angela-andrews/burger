//this file requires our ORM
var orm  = require('../config/orm.js');

var burger = {

    all: function(callback) {
        orm.all('burger', (res)=>{
            callback(res);
        });
    }
}


module.exports =burger;