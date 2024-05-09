const conn=require('./connection');
const mysql=require('mysql');

exports.getUserData=async(req,res)=>{
    try{
       
        const q1=`SELECT * from employee`
        const data=conn.query(q1,(err,result)=>{
            if(err){res.status(500).send(err)}
            res.status(200).json({
                success:true,
                message:'All Users fetched successfully',
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
        const q1=`select * from employee where e_id=${id}`
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
        console.log('req.body',req.body);
        const {e_id,name,Department,Salary,Mobile_no}=req.body;
        
        const q1=`insert into employee values(${e_id},${name},${Department},${Salary},${Mobile_no})`
        const data=conn.query(q1,(err,result)=>{
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

exports.updateUserData=async(req,res)=>{
    try{
        console.log('req.body',req.body);
        const {e_id,name,Department,Salary,Mobile_no}=req.body;
        
        const q1=`insert into employee values(${e_id},${name},${Department},${Salary},${Mobile_no})`
        const data=conn.query(q1,(err,result)=>{
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