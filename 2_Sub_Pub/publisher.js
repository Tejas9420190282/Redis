
// publisher.js

const redis = require("./redis");

const publisher = new redis();

const publishNews = async () => {

    const result = await publisher.publish("news", "India won 2011 Cricket World Cup 🏆")

    console.log(result);
    
}

publishNews();

