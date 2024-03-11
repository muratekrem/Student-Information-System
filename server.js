var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser"); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname));
app.use(express.static(__dirname + '/Login'));
app.use(express.static(__dirname + '/Profile'));

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'student_information_system',
    user: 'root',
    password: 'MUrat789.'
});

module.exports = connection;

app.get('/', function(req, res){
    res.sendFile(__dirname + '/Login/loginLecturer.html');
});

app.post('/login', function(req, res){
    var lecturerID = req.body['lecturer-id']; 
    var password = req.body.password; 

    let sql = "SELECT * FROM STUDENT_INFORMATION_SYSTEM WHERE ID = ? AND password = ?";
    connection.query(sql, [lecturerID, password], function(err, results){
        if(err) throw err;
        
        if(results.length > 0){
            res.redirect('/Profile/profileLecturer.html');
        } else {
            res.send("Kullanıcı adı veya şifre yanlış!");
        }
    });
});

// Öğrenci girişi için
app.get('/', function(req, res){
    res.sendFile(__dirname + '/Login/loginStudent.html');
});

app.post('/studentlogin', function(req, res){
    var studentID = req.body['student-id']; 
    var password = req.body.password; 

    let sql = "SELECT * FROM STUDENT_INFORMATION_SYSTEM WHERE ID = ? AND password = ?";
    connection.query(sql, [studentID, password], function(err, results){
        if(err) throw err;
        
        if(results.length > 0){
            res.redirect('/Profile/profileStudent.html');
        } else {
            res.send("Kullanıcı adı veya şifre yanlış!");
        }
    });
});

app.listen(3000, function(){
    console.log('3000 dinleniyor');
    connection.connect(function(err){
        if(err) throw err;
        console.log('database connected');
    });
});
