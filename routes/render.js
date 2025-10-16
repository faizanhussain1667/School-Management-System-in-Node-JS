var express = require('express');
var router = express.Router();
var router = require('express').Router();
var app = express();
module.exports = router;
var db = require('./db');


var faculty = require('./faculty/faculty.js'); 
var subject = require('./subject/subject.js'); 
var rooms = require('./rooms/rooms.js'); 
var period = require('./periods/period.js'); 
var enforce = require('./enforce/enforceValue.js'); 
var user = require('./user/user.js'); 
var genTimeTalbe = require('./timeTable/genTimeTable.js');
var timeTable = require('./timeTable/timeTable.js');


 /* Importing all modules */
 router.use('/', faculty); 
 router.use('/', subject); 
 router.use('/', rooms); 
 router.use('/', period); 
 router.use('/', enforce); 
 router.use('/', user); 
 router.use('/',genTimeTalbe);
 router.use('/',timeTable);
 



/* GET home page. */
router.get("/",function(req,res){
    if (req.session.loggedin) {
		res.render("detailView");
	} else {
		res.render("index");
	}
	res.end();
    });


module.exports = router;   