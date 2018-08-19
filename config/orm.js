var connection = require("./connection.js");
//var mysql = require('mysql');


var orm = {
    all: function(table, callback) {
        var queryString = `SELECT * FROM  ${table} `;
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          callback(result);
        });
      },
}

module.exports = orm;