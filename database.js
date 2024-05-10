const mysql=require('mysql');
const conn=require('./database/connection')

exports.connect=()=>{
    try{

        const connection=conn;
        
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