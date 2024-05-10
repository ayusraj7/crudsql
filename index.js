const express= require('express');
const app=express();
const dotnev=require('dotenv');
dotnev.config();
const PORT =  process.env.PORT;
console.log('PORT',PORT);


app.listen(PORT,()=>{
    console.log(`port is running at ${PORT}`)
});
app.get("/",(req,res)=>{
    res.send("Hello Ayush ");
});


const {connect}=require('./database');
connect();

const bodyParser=require('body-parser');

app.use(bodyParser.json());


const routes=require('./routes/routes')
app.use('/api',routes);

app.use(express.json());




  
  