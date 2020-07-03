const mysql = require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'poki',
    password:'1111',
    databse:'myblog'
});

db.connect();

module.exports = db;
