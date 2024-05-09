const express=require('express');
const { getUserData, deleteUserData,getParticularUser, insertUserData, DeleteAllUser, updateUserData } = require('./controller');
const router=express.Router();

router.get('/user',getUserData);
router.delete('/delete/:id',deleteUserData);
router.get('/userData/:id',getParticularUser);
router.post('/user',insertUserData);
router.delete('/deleteAll',DeleteAllUser);
router.put('/updateUser/:id',updateUserData)

module.exports=router;
