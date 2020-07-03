var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let db = require('../conf/db');

/* GET home page. */
router.get('/', function(req, res, next) {
    db.query(`SELECT * FROM ${mysql.escapeId('myblog.User')}`, (err, users) => {
        if(err){
            next(err);
        }
        res.render('index', {user: users, title: 'Poki'});
    })
});

router.get('/login', function(req, res) {
    res.render('login', {title: 'Poki'});
})

router.post('/register', (req, res) => {
    res.render('register', {title: 'Poki'});    
})

module.exports = router;
