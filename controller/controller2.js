const conn=require('../database/connection2');


const execute = function (query,values) {
    return new Promise((resolve, reject) => {
      conn.query(query,values, function (error, result) {
            if (error) {
              console.log(error);
            }
            if (resultData) {
              resolve(result);
            }
          });
          
        })
      
 
  };

  module.exports=execute;


  