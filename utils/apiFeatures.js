
class APIFeatures {
    constructor(finalQuery,query) {
        this.finalQuery=finalQuery
        this.query=query
    }

    filter() {
        let queryObject={...this.query};
        
        const excludedFileds=['sort','page','limit','fields'];
        excludedFileds.forEach(ele=> delete queryObject[ele]);


        let queryStr=JSON.stringify(queryObject);
        queryStr=queryStr.replace(/\b(gte|gt|lt|lte)|b/g,match=>`$${match}`);

        queryStr=JSON.parse(queryStr);
        this.finalQuery=this.finalQuery.find(queryStr);
       return this;
    }

    sort() {
        if(this.query.sort) {
            const sortBy=this.query.sort.split(',').join(' ');
            this.finalQuery=this.finalQuery.sort(sortBy);
        }else {
            this.finalQuery=this.finalQuery.sort('createdAt');
        };
        return this;
    }


    fields() {
        if(this.query.fields) {
            const filed=this.query.fields.split(',').join(' ');
            this.finalQuery=this.finalQuery.select(filed);
        }else {
            this.finalQuery=this.finalQuery.select('-__v');
        };

        return this;
    }
    
    pagination() {
 
        const page=this.query.page*1||1;
        const limit=this.query.limit*1||10;
        const skip=(page-1)*limit;
        
        this.finalQuery=this.finalQuery.skip(skip).limit(limit);

        
  
        return this;
        
    }


}

module.exports=APIFeatures;