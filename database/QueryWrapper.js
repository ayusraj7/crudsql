const conn=require('./connection')

exports.executeQuery=(sql, value)=>{
    return new Promise((resolve, reject) => {
        
     conn.query(sql, value, (error, results,fields) => {
        if (error) {
          reject(error);
          return;
        }
        resolve({results,fields});
        conn.end();
      });
    });
    
  }