var User=require('../model/db.js');

const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
var passport = require('passport');
var  LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
const app = express();

// parse application/x-www-form-urlencoded   
     app.use(bodyParser.urlencoded({
      extended: true
    }));
    

/*
*  registration method to check user authentication
*  @params req Http request
*  @ params res
*  return res.json  
*/   
router.post('/register',(req,res)=> {
    var newData = req.body;
    
    // bcrypt the password and store hash to table
     newData.password = bcrypt.hashSync(newData.password);
      
        User.addUSer(newData,(err,result)=>{
                    if (err) throw err;
                    res.json({ message: 'Added Successfylly!' });
        });
});



/*
*  login method to check user authentication
*  @params req Http request
*  @ params res
*  return res.json  
*/
router.post('/login',(req, res,next) => {
    passport.authenticate('local', function (err, user, info) {    
        if (err) {
            return res.status(401).json(err);
        }
        if (user) { 
            return res.status(200).json({
                "status":200,
                "message": 'Login Successfull.',                
                "data":user,
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res, next)
  });

  
//login user  passport authentication
passport.use(new LocalStrategy( {
    usernameField: 'user_name',    // define the parameter in req.body that passport can use as username and password
    passwordField: 'password'
    },function(user_name, password, done) { 
    console.log('passposte');
    User.getUserPasswordbyUsername({ user_name: user_name }, function (err, user) {
      //if (err) { return done(err); }  
	  if (!user) {   
        //return done(null, false, { message: 'Incorrect username.' });
        return done(null, false, { message: 'Incorrect username.' });
      }	
      if (err) { return done(err,user); }       
	 User.getPassword(user[0].password,password,function(err,isMatch){          
		 if(err) throw err;
		 if(isMatch){  
			 return done(null,user);
		 }else{  console.log('in ismatch false4'+ isMatch);
			 return done(null,false,{message:'Incorrect password.'});
		 }    
	 });
	
    });
  }
));

passport.serializeUser(function(user, done) { console.log('in serialize user');
  done(null, user);
});

passport.deserializeUser(function(user, done) { console.log('in deserialize user');
  done(null, user);
});

/*
* login method
*  @params req Http request
*  @ params res
*  return res.json  
*/
router.get('/login' , function(req,res){ 
	res.send({'status':500,'message':'fail','data':'error name'});
});

/*
* Logout  method
*  @params req Http request
*  @ params res
*  return res.json  
*/
router.get('/logout' , (req,res) => {
	req.logout();
});



/*
*  Search teaching Assistat as per filters
*  @params req Http request
*  @ params res
*  return res.json  
*/
router.post('/search',(req,res)=> {
    var userData = req.body;
        const data = User.searchUser(userData,(err,result)=>{
				    if(err) throw err;                     
                    res.send({'message':'succeed','data':result});                                       	
		}); 
});

// get List Of Teaching assistant
/*
*  get list of teaching Assistat as per filters
*  @params req Http request
*  @ params res
*  return res.json  
*/
router.get('/getListOfTa',(req,res)=> {
    var userData = req.body;
        const data = User.getAllUser(userData,(err,result)=>{
				    if(err) throw err;    
                    res.send({'message':'succeed','data':result});                                       	
		}); 
}); 

// get Details Of Teaching assistant by ID
router.get('/getTADetailsbyid/:id',(req,res)=> {
        var id = (req.params.id);
        const data = User.getTADetailsbyId(id,(err,result)=>{
				    if(err) throw err;     console.log(result);
                    res.send({'message':'succeed','data':result});                                       	
		}); 
});

// get Details Of Teaching assistant by ID
router.get('/getaboutUS',(req,res)=> { 
        User.getaboutUS(req,(err,result)=>{ 
				    if(err) throw err; 
                    res.send({'message':'succeed','data':result});                                       	
		}); 
});

module.exports = router;