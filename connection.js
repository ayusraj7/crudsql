const mysql=require('mysql')

const conn= mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'ayush0098',
        database: 'pando',
        multipleStatements:true,
      });
module.exports=conn;

