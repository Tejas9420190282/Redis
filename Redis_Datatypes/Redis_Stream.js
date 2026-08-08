
// Redis_Stream.js

const colors = require('colors');
const redis = require('./redis');

const redis_Stream = async () => {
    try {
/* 
        await redis.xadd("order", "*", "user", "Tejas", "amount", "500");       // ======> Adds a new message to a stream.   
        // orders ➡️ ID ➡️  user : Tejas & amount : 500
        // * means Generate unique ID   

        await redis.xadd("order", "*", "user", "Shubhi", 'amount', '1200');

        await redis.xadd("order", "*", "user", "AK", "amount", "200");

        await redis.xadd("order", "*", "user", "Abhi", "amount", "2700");

        await redis.xadd("order", "*", "user", "Jay", "amount", "1200");

        console.log(`Order and it's ID generated successfully`.bgGreen);    */

/*          
        const data = await redis.xrange("order", "-", "+");      // ======> Reads messages.

        console.log(`Data : ${data}`);      // ======> Data : 1785924784909-0,user,Tejas,amount,500,1785924784909-1,user,Shubhi,amount,1200,1785924784909-2,user,AK,amount,200,1785924784909-3,user,Abhi,amount,2700,1785924784909-4,user,Jay,amount,1200     */
        
/* 
       const data = await redis.xrevrange("order", "+", "-");       // ========> Reads from newest to oldest.

       console.log(`data : ${data}`);       // =======> data : 1785924784909-4,user,Jay,amount,1200,1785924784909-3,user,Abhi,amount,2700,1785924784909-2,user,AK,amount,200,1785924784909-1,user,Shubhi,amount,1200,1785924784909-0,user,Tejas,amount,500       */

/*        
       const count = await redis.xlen("order");     // ========> Counts messages

       console.log(`Count : ${count}`);     // =======> Count : 5   */
       
       await redis.xdel("order", '1785924784909-2');        // ============> Deletes one message.
       console.log(`Deleted successfully.`.bgGreen);        // =========> Deleted successfully.
       

        

    } catch (error) {
        
        console.log(`Error in createing Redis Stream : ${error.message}`.bgRed);
    }
}


redis_Stream();







/*  
    What is a Redis Stream?

Imagine you have a WhatsApp group.

People keep sending messages.

10:00  Tejas     : Hello
10:01  Samarth   : Hi
10:02  Jay       : Good Morning
10:03  Abhi      : Welcome

    Notice:

- Messages are never overwritten.
- Every new message is added at the end.
- Messages stay in order.
- New members can read old messages.

This is exactly how a Redis Stream works.

    * Simple Definition

A Redis Stream is an ordered log of events or messages. Every new event is added at the end and gets a unique ID.

Think of it as:

Event 1
↓

Event 2
↓

Event 3
↓

Event 4


Real-Life Example

Suppose you're building an e-commerce website.

A customer places an order.

Customer

↓

Order Created

↓

Payment Completed

↓

Invoice Generated

↓

Email Sent

↓

Order Delivered


Customer

↓

Order Created

↓

Payment Completed

↓

Invoice Generated

↓

Email Sent

↓

Order Delivered


Every step becomes an event.

Redis Stream stores all these events.

Why not use a List?

Good question.

A Redis List looks like:

Message1
Message2
Message3

But it doesn't keep:

Unique IDs
Timestamps
Consumer Groups
Message acknowledgement

Redis Streams provide all of these.

*/



/*  
    * Summary Table

| ioredis Method | Purpose                                       |
| -------------- | --------------------------------------------- |
| `xadd()`       | Add a new event to a stream                   |
| `xrange()`     | Read events (oldest → newest)                 |
| `xrevrange()`  | Read events (newest → oldest)                 |
| `xlen()`       | Count events                                  |
| `xdel()`       | Delete an event                               |
| `xtrim()`      | Keep only the latest N events                 |
| `xread()`      | Read stream messages                          |
| `xgroup()`     | Create a consumer group                       |
| `xreadgroup()` | Read messages as a consumer                   |
| `xack()`       | Acknowledge that a message has been processed |
| `xpending()`   | View unacknowledged messages                  |


*/



/*  
    * Interview Questions
1. What is a Redis Stream?

Answer:

A Redis Stream is an append-only data structure that stores events or messages in order. Every message gets a unique ID and can be processed by one or more consumers.

2. When should you use Redis Streams?

Use Streams when building:

- Order processing systems
- Notification systems
- Chat systems
- Activity logs
- Audit logs
- Event-driven applications
 - Task processing pipelines


3. Difference between List and Stream?

| List               | Stream                        |
| ------------------ | ----------------------------- |
| Ordered values     | Ordered events with IDs       |
| No message IDs     | Every message has a unique ID |
| No consumer groups | Supports consumer groups      |
| Simple queue       | Event log and message queue   |


4. Difference between Pub/Sub and Streams?

| Pub/Sub                                         | Streams                             |
| ----------------------------------------------- | ----------------------------------- |
| Messages are lost if no subscriber is listening | Messages are stored until processed |
| No history                                      | Full message history                |
| Good for live notifications                     | Good for reliable event processing  |


*/