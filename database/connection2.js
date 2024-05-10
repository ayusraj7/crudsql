const mysql = require("mysql2");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ayush0098",
  database: "pando",
});


module.exports = { connection};
  
  

