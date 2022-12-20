const express=require('express');
const  {getAllProductsStatic,getAllProducts}=require('../controllers/products');

const Router=express.Router();

Router.route('/static').get(getAllProductsStatic);
Router.route('/').get(getAllProducts);



module.exports=Router;