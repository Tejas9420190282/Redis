
// Transaction_Eg_1.js

const redis = require('./redis');
const colors = require('colors');

const Transaction_Eg_1 = async () => {
    try {

        const result = await redis.multi().set("user:1", "Tejas").set("user:2", "Shubh").set("user:3", "Abhi").exec();

        console.log("Result:", result);

    } catch (error) {
        
        console.log(`Error in Transaction_Eg_1 : ${error.message}`.bgRed);
    }
}

Transaction_Eg_1()

