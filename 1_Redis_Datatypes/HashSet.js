const redis = require("./redis");
const colors = require("colors");

const HashSet = async () => {
  try {
    /* 
    const upload_User1 = await redis.hset("user : 1", {
      name: "Tejas",
      age: "24",
      city: "Pune",
    });

    console.log(`upload_User1 Submited Successfully`); */

    /*     
    const upload_User2 = await redis.hset("user : 2", {
        name : "Shubhangi",
        age : 26,
        city : "Pune"
    })

    console.log(`upload_User2 Submited Successfully`); */

    /* 
    const user1_Name = await redis.hget("user : 1", "name");

    console.log(`user1_Name : ${user1_Name}`);      // =========> user1_Name : Tejas */

    /*    
    const user1 = await redis.hgetall("user : 1");

    console.log(`user1 : ${JSON.stringify(user1)}`);      // =========> user1 : {"name":"Tejas","age":"24","city":"Pune"}   */

    /*  
    const user1_Keys = await redis.hkeys('user : 1')

    console.log(`user1_Keys : ${user1_Keys}`);      // =========> user1_Keys : name,age,city  */

    /*  
    const user1_Values = await redis.hvals('user : 1');
    
    console.log(`user1_Values : ${user1_Values}`);      // =========> user1_Values : Tejas,24,Pune  */

    /*  
    const user1_Sallary_Exists = await redis.hexists('user : 1', "salary");
    
    console.log(`user1_Sallary_Exists : ${user1_Sallary_Exists}`);  */

    /*  
    const user1_All_Keys = await redis.hkeys('user : 1');

    console.log(`user1_All_Keys : ${user1_All_Keys}`);      // =========> user1_All_Keys : name,age,city    */

    const user1_All_Val = await redis.hvals("user : 1");

    console.log(`user1_All_Val : ${user1_All_Val}`); // =========> user1_All_Val : Tejas,24,Pune
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
  }
};

HashSet();

/*  
| Feature                | String     | List             | Set            | Hash              |
| ---------------------- | -----------| -----------------| -------------- | ----------------- |
| Stores multiple values | ❌         | ✅              | ✅             | ✅                 |
| Stores key-value pairs | ❌         | ❌              | ❌             | ✅                 |
| Duplicate values       | ❌         | ✅              | ❌             | Fields are unique |
| Maintains order        | ❌         | ✅              | ❌             | No                |
| Best for               | One value | Ordered values | Unique values | Objects           |

*/

/*  
    | Command   | Purpose                   |
| --------- | ------------------------- |
| `HSET`    | Add or update field(s)    |
| `HGET`    | Get one field             |
| `HGETALL` | Get all fields and values |
| `HKEYS`   | Get all field names       |
| `HVALS`   | Get all values            |
| `HEXISTS` | Check if a field exists   |
| `HDEL`    | Delete a field            |
| `HLEN`    | Count fields              |
| `HMGET`   | Get multiple fields       |
| `HINCRBY` | Increase a numeric field  |

*/

/* 

| Redis CLI                                 | Node.js                                                                |
| ----------------------------------------- | ---------------------------------------------------------------------- |
| `HSET user:1 name Tejas age 24 city Pune` | `await redis.hSet("user:1", { name: "Tejas", age: 24, city: "Pune" })` |
| `HGET user:1 name`                        | `await redis.hGet("user:1", "name")`                                   |
| `HGETALL user:1`                          | `await redis.hGetAll("user:1")`                                        |
| `HDEL user:1 city`                        | `await redis.hDel("user:1", "city")`                                   |
| `HEXISTS user:1 age`                      | `await redis.hExists("user:1", "age")`                                 |
| `HKEYS user:1`                            | `await redis.hKeys("user:1")`                                          |
| `HVALS user:1`                            | `await redis.hVals("user:1")`                                          |


*/
