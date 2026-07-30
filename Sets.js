// Sets.js

const redis = require("./redis")
const colors = require('colors');

const Sets = async () => {
    
/* 
    await redis.sadd('user', 'Tejas')

    console.log(`User Tejas Added successfully in set`.bgBlue); */

/*     
    await redis.sadd('user', 'Shubh', "Abhi", 'AK')

    console.log(`user: Shubh, Abhi, AK Added in Set`); */

/*     
    const all_Member_In_Set = await redis.smembers('user');

    console.log(`All values in set : ${all_Member_In_Set}`); */

/* 
    const total_Number_Of_Memberes_In_Set = await redis.scard('user');

    console.log(`total_Number_Of_Memberes_In_Set : ${total_Number_Of_Memberes_In_Set}`); */

/*     
    const is_Tejas_Available_In_Set = await redis.sismember('user', 'Tejas');

    console.log(`is_Tejas_Available_In_Set : ${is_Tejas_Available_In_Set}`); */
    
/*  
    const remove_Val_Form_Set = await redis.srem('user', "AK");

    console.log(remove_Val_Form_Set);   // =======> 1  */

    const remove_Random_Val_From_Set = await redis.spop('user')
    
    console.log(`Ramdom value removed from set : ${remove_Random_Val_From_Set}`);
    

}

Sets()



/* 

| Command       | Purpose                    |
| ------------- | -------------------------- |
| `SADD`        | Add member(s)              |
| `SMEMBERS`    | View all members           |
| `SCARD`       | Count members              |
| `SISMEMBER`   | Check if a member exists   |
| `SREM`        | Remove a member            |
| `SPOP`        | Remove a random member     |
| `SRANDMEMBER` | View a random member       |
| `SUNION`      | Combine Sets               |
| `SINTER`      | Find common members        |
| `SDIFF`       | Find different members     |
| `SMOVE`       | Move a member between Sets |
 
*/ 