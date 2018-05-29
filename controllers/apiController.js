var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function(app) {
	
	app.get('/api/employees/', jsonParser, function(req, res) {
	// get that data from database
		res.json([
		{id:"0",name: 'Hugo Fisher',src:'/images/hugo.jpg' , big: 'true'},
		{id:"1",name: 'Guy Biggs',src:'/images/guy.jpg', big: 'true'},
		{id:"2",name: 'John Doe',src:'/images/john.jpg', big: 'false'},
		{id:"3",name: 'Nate Porter',src:'/images/nate.jpg', big: 'false'},
		{id:"4",name: 'Sam Shmuck',src:'/images/sam.jpg', big: 'false'},
		{id:"5",name: 'Don Bass',src:'/images/don.jpg', big: 'false'}
	]);
	});
	
	app.post('/api/employees', function(req, res) {
		// save to the database
	});
	
	app.delete('/api/employees/:id', function(req, res) {
		// delete from the database
	});

	app.get('/api/openings/', jsonParser, function(req, res) {
	// get that data from database
		res.json([
		{id:"0",title: 'Janitor'},
		{id:"1",title: 'Chef'},
		{id:"2",title: 'CEO'},
		{id:"3",title: 'Demolition expert'},
		{id:"4",title: 'Babysitter'}
	]);
	});
	
	app.post('/api/openings', function(req, res) {
		// save to the database
	});
	
	app.delete('/api/openings/:id', function(req, res) {
		// delete from the database
	});
	
}