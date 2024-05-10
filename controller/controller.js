const conn=require('../database/connection');
const {executeQuery}=require('../database/QueryWrapper')


const AllUserApi=`SELECT* FROM employee`
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

exports.deleteUserData=async(req,res)=>{
    try{
        const id=req.params.id;
        const q1=`delete from employee where e_id=${id}`
        const data=conn.query(q1,(err,result)=>{
            if(err){res.status(500).send(err)}
            res.status(200).json({
                success:true,
                message:'User Deleted Successfully',
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
    
        const q1=`insert into employee values(?)`;
        const response=await conn.query(q1,[req.body],(err,result)=>{
            if(err){res.status(500).send({
                success:false,
                message:"Not fulfilled",
                error:err
            })}
            res.status(200).json({
                success:true,
                message:'User Created Successfully',
                data:result
            })

        });
        
        
   
}

exports.updateUserData=async(req,res)=>{
    try{
        
        const id=req.params.id;
        const q1=`select * from employee where id=${req.params.id}`
        console.log('q1',q1);
        const data=connection.query(q1,[req.body],(err,result)=>{
            if(err){res.status(500).send(err)}
            res.status(200).json({
                success:true,
                message:'User Created Successfully',
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




