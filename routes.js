const express=require('express');
const { getUserData, deleteUserData,getParticularUser, insertUserData, DeleteAllUser } = require('./controller');
const router=express.Router();

router.get('/user',getUserData);
router.delete('/delete/:id',deleteUserData);
router.get('/userData/:id',getParticularUser);
router.post('/user',insertUserData);
router.delete('/deleteAll',DeleteAllUser);

module.exports=router;
