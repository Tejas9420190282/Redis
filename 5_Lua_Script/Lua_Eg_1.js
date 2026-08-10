
// Lua_Eg_1.js

const colors = require('colors');
const redis = require('./redis');

const Lua_Eg_1 = async () => {
    
    try {
        
        const result = await redis.eval(
            `
            return 10 + 20
            `,
            0       // =========> This script is using 0 Redis keys.
        );

        console.log(`Result : ${result}`.bgGreen);
        
        
    } catch (error) {
        
        console.log(`Error in Lua_Eg_1 : ${error.message}`.bgRed);        
    }
}


Lua_Eg_1();