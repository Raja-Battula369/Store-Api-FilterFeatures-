
const mongoose = require('mongoose');
const DataBase=require('./db/connect');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});


const app=require('./app');

const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);

const start= async(req,res)=> {
    await DataBase(DB);
    app.listen(4000,()=>{
        console.log('listening');
    });

};

start();
