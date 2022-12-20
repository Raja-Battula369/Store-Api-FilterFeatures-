const DataBase=require('./db/connect');
const Product=require('./models/product');
const dotenv=require('dotenv');
dotenv.config({path:'./config.env'});

const products=require('./products.json');

const DB=process.env.DATABASE.replace('<password>',process.env.DATABASE_PASSWORD);


const start=async()=>{
    try {
        await DataBase(DB);
        await Product.deleteMany();
        await Product.create(products);
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1);
    };
};

start();
