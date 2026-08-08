// subscriber.js

const Redis = require("./redis");

const subscriber = new Redis();

const init = async () => {
  await subscriber.subscribe("news");

  console.log("✅ Subscribed to 'news' channel. Waiting for messages...");

  subscriber.on("message", (channel, message) => {
    console.log(`channel : ${channel}`);
    console.log(`message : ${message}`);
  });
};


init()















