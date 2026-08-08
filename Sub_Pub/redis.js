
// redis.js

const Redis = require("ioredis");

module.exports = Redis;





/*  


                    Redis
                     │
              "news" channel
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
   Subscriber 1          Subscriber 2
          │                     │
          ▼                     ▼
     Receives message       Receives message


*/