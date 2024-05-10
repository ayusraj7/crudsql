const conn=require('../database/connection');
const {executeQuery}=require('../database/QueryWrapper')


const AllUserApi=`SELECT* FROM employee`
const InsertDataApi=`insert into employee (name,Department,Salary,Mobile_no) values(?,?,?,?)`;
exports.getUserData=async(req,res)=>{
    try{
        
         executeQuery(AllUserApi).then((result)=>{
             res.status(200).json({
                 success:true,
                 message:'All User Fetched Successfully',
                 data:result,
             })
         }).catch((err)=>{throw err})
        
        
    }catch(error){
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal server error'
        })
    }
}

const DeleteUserApi=`delete from employee where e_id=?`
exports.deleteUserData=async(req,res)=>{
    try{
        
        
        executeQuery(DeleteUserApi,[req.params.id]).then((result)=>{
            res.status(200).json({
                success:true,
                message:'All deleted Successfully',
               
            })
        }).catch((err)=>{throw err})
        
    }catch(error){
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal server error'
        })
    }
}

exports.DeleteAllUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const q1=`
        SET SQL_SAFE_UPDATES = 0;
        delete from employee;`
        const data=conn.query(q1,(err,result)=>{
            if(err){res.status(500).send(err)}
            res.status(200).json({
                success:true,
                message:'All Users Deleted',
            })
        });
        
    }catch(error){
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal server error'
        })
    }
}

exports.getParticularUser=async(req,res)=>{
    try{
        const id=req.params.id;
        const q1=`select * from employee where e_id=?`
        const data=conn.query(q1,(err,result)=>{
            if(err){res.status(500).send(err)}
            res.status(200).json({
                success:true,
                message:'Data fetched Successfully',
                data:result
            })

        });
        
    }catch(error){
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal server error'
        })
    }
}

exports.insertUserData=async(req,res)=>{
    
        try{
            console.log('adjld',[req.body]);
            
            const data=await executeQuery(InsertDataApi,[req.body.name,req.body.Department,req.body.Salary,req.body.Mobile_no])
            console.log('data',data);
            if(data)
            {
                res.status(200).json({
                    success:true,
                    message:'User Created Successfully',
                    data:data,
                })
            }

        }catch(error){
            console.log('error',error);
            res.status(500).json({
                success:false,
                message:'internal server error',
                error:error
            })
        }
}


exports.updateUserData=async(req,res)=>{
    try{
        
        const updateUserApi=`update employee set name=?,Department=?,Salary=?,Mobile_no=? where e_id=${req.params.id}`
        const data=await executeQuery(updateUserApi,[req.body.name,req.body.Department,req.body.Salary,req.body.Mobile_no])
            console.log('data',data);
            if(data)
            {
                res.status(200).json({
                    success:true,
                    message:'User Created Successfully',
                    data:data,
                })
            }
        
    }catch(error){
        console.log('error',error);
        res.status(500).json({
            success:false,
            message:'internal server error'
        })
    }
}




