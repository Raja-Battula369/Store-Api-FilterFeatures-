const mongoose=require('mongoose');

const DataBase=(DB)=>{
  return mongoose.connect(DB,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log('Connetecd to DataBase Successfully');
});
};

module.exports=DataBase;
