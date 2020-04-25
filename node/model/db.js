const bcrypt = require('bcrypt-nodejs');

 const db = require('../conection.js');
var User = {  
	addUSer:(userdata,callback) =>{	

			// Create a password salt
			// Salt and hash password
		let inserted_id;
		 db.query("Insert into `users` (`title`,`first_name`,`last_name`,`user_name`,`email`,`country_code`,`contact_no`,`password`,`birth_date`,`institute`,`reference`)values(?,?,?,?,?,?,?,?,?,?,?)",
                [userdata.title,userdata.first_name,userdata.last_name,userdata.user_name,userdata.email,userdata.country_code,userdata.contact_no,userdata.password,userdata.birth_date,userdata.institute,userdata.reference],
               (err,res)=>{
			        if(err)throw err;
        console.log(res.insertId);
                            // address table
                            inserted_id= res.insertId;
                             db.query("Insert into `address` (`user_id`,`streetno`,`streetname`,`city`,`state`,`postal`,`country`)values(?,?,?,?,?,?,?)",
                                [inserted_id,userdata.streetno,userdata.streetname,userdata.city,userdata.state,userdata.postal,userdata.country],
                            (err,result)=>{			       
                            if(err)throw err;
		                    });  
       return res.insertId;
    });
	},


    checkUser:(userData,res)=>{
        return db.query(`select * from users where user_name = '${userData.user_name}' and password ='${userData.password}'`,res);       
    },
    
    searchUser:(userData,res)=>{
        return db.query(`select * from teaching_assistant where first_name = '${userData.name}' OR last_name = '${userData.name}' OR subjects = '${userData.subjects}' OR language = '${userData.language}' OR speed = '${userData.speed}' OR experience ='${userData.experience}'`,res);       
    },  //getAllUser
    
    getAllUser:(username,callback)=>{
		return db.query("select * from `teaching_assistant`",callback );
	},
     
    getTADetailsbyId:(id,callback)=>{ 
		return db.query(`select * from teaching_assistant where id = '${id}'`,callback);
	},

	getUserbyUsername:(username,callback)=>{
		return db.query("select * from `users` where `user_name` =?",[username.user_name],callback);
	}, 
    
    getUserPasswordbyUsername:(username,callback)=>{
		return db.query("select * from `users` where `user_name` =?",[username.user_name],callback);
	}, 
	
	getPassword:(hash,password,res)=>{  
       // Load hash from your password DB.
        return bcrypt.compare(password, hash, res);
	}
};  
 module.exports = User;
 
