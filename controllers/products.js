const Product=require('../models/product');
const APIFeatures=require('../utils/apiFeatures');
const getAllProductsStatic= async(req,res)=>{

    try {
        const products=await Product.find({price:{$gt:30}}).sort('price').select('name price');
        res.status(200).json({products,nbHits:products.length});
    } catch (error) {
        res.status(404).json(error);
    };
   
};


const getAllProducts= async(req,res)=> {
    try {           
        
        const Features=new APIFeatures(Product.find(),req.query).filter().sort().fields().pagination();
        
        const products=await Features.finalQuery;
        
        
        res.status(200).json({nbHits:products.length,products});

    } catch (error) {
        res.status(404).json(error);
        
    };
};



module.exports={getAllProductsStatic,getAllProducts};