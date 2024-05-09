const mysql=require('mysql');
const conn=require('./connection')

exports.connect=()=>{
    try{

        const connection=conn;
        console.log('connenction',conn);

        connection.connect((err) => {
            if (err) 
            {
                return console.error(err.message);
            }else{
                console.log('Connected to the MySQL server.');
            }
          });

          return connection;


    }catch(error)
    {
        console.log('error--',error);
    }
}