const colors = require('colors');

const redis = require("./redis")

const init = async () => {
    /* const result = await redis.GET('student:2') 

    console.log(`Result : ${result}`.bgRed); */

    /* await redis.SET("student:5", "Shubh"); */

    console.log("Set's key value student: 5 : Shubh ".bgGreen);
    
    await redis.set("user:10", "Samarth");
    await redis.expire('user:10', 60);  // ==============> it firstly create "user:10 Samarth" data and expire/remove it after 60 seconds from Ram
}

init();

