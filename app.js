var express = require('express');
var app = express();
var todocontroller = require('./controllers/todocontroller');
//set template engine
app.set('view engine','ejs');

//static file
//app.use('/assets',express.static('./public')); this is for only assets typed url file

// for all file static files
app.use(express.static('./public')); // but we have to type localhost:3000/assets/styel.css bcoz in public there is no style.css file
todocontroller(app);
// listen to port
app.listen(3000);
console.log('assa');
