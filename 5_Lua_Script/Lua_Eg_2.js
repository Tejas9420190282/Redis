
// Lua_Eg_2.js

const colors = require('colors');
const redis = require('./redis');

const Lua_Eg_2 = async () => {
    
    try {

        await redis.set("name", "Tejas");

        const result = await redis.eval(
            `
                local name = redis.call("GET", KEYS[1])

                return name
            `,
            1,
            "name"
        )

        console.log(`Result: ${result}`.bgGreen);

    } catch (error) {
        
        console.log(`Error in Lua_Eg_2 : ${error.message}`.bgRed); 
    }
}

Lua_Eg_2();