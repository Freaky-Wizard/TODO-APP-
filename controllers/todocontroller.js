var bodyparser = require('body-parser');

var mongoose = require('mongoose');
//connect to database

mongoose.connect('mongodb://test:test@ds235840.mlab.com:35840/first-todo');

// create a schema-  this is like a blueprint of how our data is going to loke or what is monodb expecting from us
var todoschema =  new mongoose.Schema({
  item : String
});

// model is created and based that model on schema
// here Todo in variable in nodejs whie Todo is model name in mongodb
var Todo = mongoose.model('Todo',todoschema);
 // now we can create a object and save that in DB simply like
 /*var itemone = Todo({ item: 'buy flowers'}).save(function(err){
    if(err)
    throw err;
    console.log('item saved');
 });
*/
var urlencodedparser = bodyparser.urlencoded({extended: false});

//var data = [{item: 'get milk'}, {item:'get me towel'}, {item: 'get me peanut butter'}];

module.exports = function(app){
  app.get('/todo',function(req, res){
    // get data from monodb and pass it to view, we do it using model name and curly braces of find means all elemnts for single we can plce {item :'dadada'}
    Todo.find({},function(err,data){
      if(err) throw err;

      res.render('todo',{todos:data});
    });

  });

  app.post('/todo',urlencodedparser, function(req, res){
    // get data from view and pass it to the to mongo db
    var newtodo = Todo(req.body).save(function(err,data){
      if(err) throw err;

      res.json(data);

    });
  //  data.push(req.body);
  });

  app.delete('/todo/:item',function(req, res){

      // delete requested item form Db using find option of todo model(used earlier in get)
      Todo.find({item: req.params.item.replace(/\-/g,' ')}).remove(function(err,data){
        if(err) throw err;
        res.json(data);
      });

      /* data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-')!==req.params.item;
      });
      res.json(data);
*/
  });
}
