/**
 * Created by Nidhi  on 17/04/2020.
 
  -------------------------------------------
 */

const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',  
  database : 'ta',  
});
 
// create table address(id INT(11), user_id INT(11), strretno VARCHAR(255), streetname VARCHAR(255), city VARCHAR(255), state VARCHAR(255), postal VARCHAR(255) ,country VARCHAR(255));
// create table
//let query = "create table users(id INT(11), title VARCHAR(225), first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255), country_code INT(11), contact_no VARCHAR(128), password VARCHAR(255), birth_date DATE NOT NULL, address INT(11), institute VARCHAR(255), reference VARCHAR (255))";
//Insert into `teaching_assistant` ( `title`, `first_name`, `last_name`, `subjects`, `speed`, `language`, `experience`, `description`)values('MR.','nidhi','gajera','english','4 per hours','english','4 yers','eriooiomeed jeoioiop oooi  joiwo  iop o');
// drop table
//let query = "drop table users";
/*db.query(query,  (err,res,fields) => {      if(err) throw err;
                                             console.log(res);
                                            }); */

//connection.query("CREATE DATABASE my_db", (err,res) => { if(err) throw err; console.log('database created') })	


//connection.query("insert into users( name , address) values('parth','ahmedabad')", (err,res,fields) => { if(err) throw err; console.log( res); 
//connection.query("select * from users order by id DESC", (err,res,fields) => { if(err) throw err; console.log( res); 
//})

module.exports = db;
    
//connection.end()