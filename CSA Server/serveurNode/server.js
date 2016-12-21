var express = require('express')
var app = express()

// get variables
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


// Mongoose
const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
	title:{
		type : String,
		default : "Mon titre"
},
	created: {
		 type: Date,
			"default": Date.now
	}
});

mongoose.connect('mongodb://localhost/todolist', function(err) {
  if (err) {return console.error("Error connecting to MongoDB!");}
});


app.post('/add', function (req, res) {
	const Todo = mongoose.model('todo', todoSchema); // Todo est un modèle Mongoose
	const todo = new Todo(req.body.todo);
	todo.save( (err, docInserted) => {
		if (err) return res.status(500).json({ error: err })
		return res.status(200).json(docInserted);
	});

})
app.post('/show', function (req, res) {
	const Todo = mongoose.model('todo', todoSchema); // Todo est un modèle Mongoose
	Todo.find((err, docInserted) => {
		if (err) return res.status(500).json({ error: err })
		return res.status(200).json(docInserted);
	});
	/*
	const todo = new Todo(req.body.todo);
	todo.save( (err, docInserted) => {
		if (err) return res.status(500).json({ error: err })
		return res.status(200).json(docInserted);
	});
	*/

})

app.post('/show', (req, res, next) => { 
	// middle ware,
	// si tests ok, alors on passe à la suite
	next(); 
}, 
(req, res) => {
  res.send('Coucou World')
});
	

var myData = ['item1','item2','item3'];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/home', function (req, res) {
  res.send('Coucou World')
})

app.get('/ajax', function (req, res) {
  res.status(200).send(myData);
})

app.post('/ajax', function (req, res) {
	console.log(req.body.content);
	myData.push(req.body.content);
	res.status(200).send(myData);
	//res.status(200).end();
	//res.send('ajax works')
	//res.send(__dirname)
	//res.json(['item1','item2','item3']); // json() pareil que send()
	//res.sendFile(__dirname + '/data.json')
})


app.get('*', function (req, res) {
  res.send('Page not found :)')
});
app.post('*', function (req, res) {
  res.send('Page not found :) (post)')
});
app.listen(3000)


