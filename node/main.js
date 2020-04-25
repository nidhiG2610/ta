// JavaScript source code

console.log("helllooo..working in main.js");
    const http = require('http');
	const fs = require('fs');
	const express = require('express');
    
    //Init app
    const app = express();    
    const session= require('express-session');
    const expressValidator = require('express-validator');
	const path = require('path');
	const hostname = '127.0.0.1';
	const port = 3000;
    const cors = require('cors');
    app.use(cors());    
    const bodyParser = require('body-parser');      
    const passport = require('passport');
    const LocalStrategy = require('passport-local');
    const db = require('./conection.js');
    const router = require('./routes/routes.js');
    const bcrypt = require('bcrypt-nodejs');
    const flash = require('flash');
var sess;

   

    //bodyParser Middleware 
    // parse application/x-www-form-urlencoded   
     app.use(bodyParser.urlencoded({
      extended: false
    }));
    
    // parse application/json
   // app.use(bodyParser.json())
    
    // Express
    app.use(session({
        key: 'user_id',
	    secret:'secret',
	    saveUninitialized: true,
	    resave : true
    }));

    //passport init
    app.use(passport.initialize());
    app.use(passport.session());
    
    //set static folder
    app.use(express.static('./public'));

    //connect flash
    app.use(flash());
   

    
    app.use(router);

    app.get('/register', function (req, res) {
     console.log('hiiii get register');
        res.send("hiii. it works");
    });

    app.post('/register', function (req, res) {
          console.log('hiiii post register');
          res.send('hiiii post register');
    });
//test the normal request
    app.get('/', (req, res) => res.send('hiii'))
    



	app.listen(3000,() =>{
	
     console.log('server runing on '+port);
 });
	
	