
// Pipeline_Eg_2.js

const colors = require('colors');
const redis = require('./redis');

const pipeline_Eg_2 = async () => {
    try {
        
        const pipeline = redis.pipeline();

        pipeline.get("user:1");
        pipeline.get("user:2");
        pipeline.get("user:3");

        const result = await pipeline.exec();

        console.log("Result : ", result);       // =======> Result :  [ [ null, 'Tejas' ], [ null, 'Shubhi' ], [ null, 'Jay' ] ]

        

    } catch (error) {
        
        console.log(`Error in Pipeline : ${error.message}`.bgRed);
    }
}


pipeline_Eg_2()