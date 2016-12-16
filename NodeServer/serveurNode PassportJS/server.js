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


// PassportJS
const session = require('express-session');
const passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

app
	.use(express.static(__dirname))
	.use(bodyParser.urlencoded({ extended: false })) // <----- Required for Passport (but not mentioned in the docs)
	.use(session({  // Enabling Express sessions via browser cookie
		secret: '1234567890QWERTY'
	}))
	.use(passport.initialize()) // <---------------- Don't forget this!!
	.use(passport.session()) // Place this AFTER express.use(session())
	

passport.use(new LocalStrategy( // Reminder : LocalStrategy = require('passport-local').Strategy
	(username, password, done) => {
		let user = User.find(username, password);
		done(false, user || false); // 1st argument = error, 2nd argument = user found?
	}
));
passport.authenticationMiddleware = () => {
	return (req, res, next) => {
		if (req.isAuthenticated()) {
			console.info("Auth middleware : authorised :)")
			return next()
		}
		console.error("Auth middleware : not auth!")
		res.redirect('/login')
	}
}
passport.serializeUser(function (user, done) {
	console.log("serializeUser")
	done(null, user.id);
});
passport.deserializeUser(function (id, done) {
	/* MONGO
	User.findById(id, function (err, user) {
		console.log("deserialized user", user)
		done(err, user);
	});
	*/
	let user = User.findById(id)
	console.log("deserialized user", user)
	done(false, user || false)
});




app.post('/login', passport.authenticate('local', {
	successRedirect: '/secret',
	failureRedirect: '/badLogin'
}));

app.get(
		'/secret',
		passport.authenticationMiddleware(),
		(req, res) => {
			console.log("Should not see me unless logged in")
			res.sendFile(__dirname + '/secret.html')
		}
	)



app.post('/add', function (req, res) {
	const Todo = mongoose.model('todo', todoSchema); // Todo est un modèle Mongoose
	const todo = new Todo(req.body.todo);
	todo.save( (err, docInserted) => {
		if (err) return res.status(500).json({ error: err })
		return res.status(200).json(docInserted);
	});

})

app.post('/redirect', function (req, res) {
	res.redirect('/redirect');
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