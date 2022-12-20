const express=require('express');
const Router=require('./routes/products');

const errorHandlerMiddleware=require('./middleware/error-handler');
const notFound=require('./middleware/not-found');

const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h2>Store API <h2> <a href="/api/v1/product"> product Router');
});

app.use('/api/v1/product',Router);


app.use(notFound);
app.use(errorHandlerMiddleware);

module.exports=app;