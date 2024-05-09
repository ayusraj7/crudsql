const express= require('express');
const app=express();

const PORT =  5000;

app.listen(PORT,()=>{
    console.log(`port is running at ${PORT}`)
});
app.get("/",(req,res)=>{
    res.send("Hello Ayush ");
});


const {connect}=require('./database');
connect();


const routes=require('./routes')
app.use('/api',routes);

app.use(express.json());