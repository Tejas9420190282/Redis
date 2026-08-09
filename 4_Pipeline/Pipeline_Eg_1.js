
// Pipeline_Eg_1.js

const colors = require('colors');
const redis = require('./redis');

const pipeline_Eg_1 = async () => {
    
    try {

        // Create Pipeline
        const pipeline = redis.pipeline();

        //Add commands to Pipeline
        pipeline.set("user:1", "Tejas");
        pipeline.set("user:2", "Shubhi");
        pipeline.set("user:3", "Jay");
        pipeline.set("user:4", "Abhi");

        // Execute Pipeline
        const result = await pipeline.exec();

        console.log("PIpeline Result : ", result);
        
        
    } catch (error) {
        
        console.log(`Error in Pipeline : ${error.message}`.bgRed);
        
    }
}

pipeline_Eg_1();



/*  
Pipeline
    │
    ├── SET user:1 Tejas
    ├── SET user:2 Samarth
    └── SET user:3 Jay
            │
            ▼
        exec()
            │
            ▼
        Redis

*/