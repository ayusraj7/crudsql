const mysql=require('mysql')


const conn= mysql.createConnection({
        host:process.env.HOST,
        port:process.env.DB_PORT,
        user:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
        multipleStatements:true,
      });
module.exports=conn;

