// Sorted_Set.js

const colors = require("colors");
const redis = require("./redis");

const Sorted_Set = async () => {
  try {
    /* 
    await redis.zadd("students", 99, "Tejas",);     // ===============> added one bvalue in Sorted_Set

    console.log("Tejas value is added in Sorted_Set".bgGreen);   */

    /*  
    await redis.zadd("students", 95, "Shubhangi", 55, "AK", 99, "Abhi", 85, "Jay");     // ===============> added one bvalue in Sorted_Set

    console.log(`Multiple values Insertde in Sortes_Set`.bgGreen);  */

    /* 
    const range_Of_Sorted_Set = await redis.zrange("students", 0, -1)       // ===============> Get members in ascending order.

    console.log(`range_Of_Sorted_Set : ${range_Of_Sorted_Set}`.bgGreen);           // ===============> range_Of_Sorted_Set : AK,Jay,Shubhangi,Abhi,Tejas  */

    /*  
    const high_TO_Low_Values_In_Sorted_Set = await redis.zrevrange("students", 0, -1);  // ===============> give Highest to lowest values in Sorted_Set.
    
    console.log(`high_TO_Low_Values_In_Sorted_Set : ${high_TO_Low_Values_In_Sorted_Set}`);      // ===============> [ 'Tejas', 'Abhi', 'Shubhangi', 'Jay', 'AK' ]   */

    /*  
    const high_TO_Low_Values_And_scorecard_From_Sorted_Set = await redis.zrevrange("students", 0, -1, "WITHSCORES"); // ===============> give Highest to lowest values with scorecard from Sorted_Set.

    console.log(high_TO_Low_Values_And_scorecard_From_Sorted_Set); {/* // ===============> [ 
  'Tejas',     '99',
  'Abhi',      '99',
  'Shubhangi', '95',
  'Jay',       '85',
  'AK',        '55'
] *.} */

    /* 
  const score_Of_Given_Member_From_Sorter_Set = await redis.zscore("students", "Jay");      // ======> Get Score of One Member

  console.log(`score_Of_Given_Member_From_Sorter_Set : ${score_Of_Given_Member_From_Sorter_Set}`);      // ==========> score_Of_Given_Member_From_Sorter_Set : 85   */

    /*  
    const is_Lowest_Rank_From_Sorted_Set = await redis.zrank("students", "Jay"); // ======> Shows Lowest Rank or not

    console.log(
      `is_Lowest_Rank_From_Sorted_Set : ${is_Lowest_Rank_From_Sorted_Set}`,
    ); // ==========> is_Lowest_Rank_From_Sorted_Set : 1    */

    /*  
    const is_Hightest_Rank_From_Sorted_Set = await redis.zrevrank("students", "Jay"); // ======> Shows Hightest Rank or not

    console.log(
      `is_Hightest_Rank_From_Sorted_Set : ${is_Hightest_Rank_From_Sorted_Set}`,
    ); // ==========> is_Hightest_Rank_From_Sorted_Set : 3   */

    /*  
    const total_Count_Of_Members_From_Sorted_Set = await redis.zcard("students"); // ======> Count Members

    console.log(
      `total_Count_Of_Members_From_Sorted_Set : ${total_Count_Of_Members_From_Sorted_Set}`,
    ); // ==========> total_Count_Of_Members_From_Sorted_Set : 5   */

    /*  
    const total_Count_Of_Members_Betn_Score_From_Sorted_Set = await redis.zcount("students", 80, 100); // ======> Count Members Between Scores

    console.log(
      `total_Count_Of_Members_Betn_Score_From_Sorted_Set : ${total_Count_Of_Members_Betn_Score_From_Sorted_Set}`,
    ); // ==========> total_Count_Of_Members_Betn_Score_From_Sorted_Set : 4     */

    /*  
    const show_Members_Betn_Score_From_Sorted_Set = await redis.zrangebyscore("students", 80, 100); // ======> Show Members Between Scores

    console.log(
      `show_Members_Betn_Score_From_Sorted_Set : ${show_Members_Betn_Score_From_Sorted_Set}`,
    ); // ==========> show_Members_Betn_Score_From_Sorted_Set : Jay,Shubhangi,Abhi,Tejas    */

    const show_Members_Betn_Score_From_Sorted_Set = await redis.zrangebyscore(
      "students",
      80,
      100,
      "WITHSCORES",
    ); // ======> Show Members Between Scores with score

    console.log(
      `show_Members_Betn_Score_From_Sorted_Set : ${show_Members_Betn_Score_From_Sorted_Set}`,
    ); // ==========> show_Members_Betn_Score_From_Sorted_Set : Jay,85,Shubhangi,95,Abhi,99,Tejas,99
  } catch (error) {
    console.log(
      `Error in Insertion of sorted set value : ${error.message}`.bgRed,
    );
  }
};

Sorted_Set();

/*  
    ⭐ Most Important Commands (Interview)

These are the commands you should master for 1–2 years MERN interviews:

| Function          | Purpose              |
| ----------------- | -------------------- |
| `zadd()`          | Add members          |
| `zrange()`        | Ascending order      |
| `zrevrange()`     | Descending order     |
| `zscore()`        | Get score            |
| `zrank()`         | Ascending rank       |
| `zrevrank()`      | Descending rank      |
| `zincrby()`       | Increase score       |
| `zrangebyscore()` | Members by score     |
| `zcount()`        | Count by score       |
| `zcard()`         | Count all members    |
| `zrem()`          | Remove member        |
| `zpopmax()`       | Remove highest score |
| `zpopmin()`       | Remove lowest score  |

*/

/* 
    | Feature          | Set  |  Sorted Set  |
    | ---------------- | ---- | ------------ |
    | Duplicate values | ❌   | ❌          |
    | Score            | ❌   | ✅          |
    | Sorted           | ❌   | ✅          |
    | Ranking          | ❌   | ✅          |
    | Leaderboard      | ❌   | ✅          |

*/

/*  

    1. What is a Redis Sorted Set?

Answer:

A Redis Sorted Set is a collection of unique members, where each member has a numeric score. Redis automatically sorts members based on their scores.

    2. Difference between Set and Sorted Set?

| Set           | Sorted Set               |
| ------------- | ------------------------ |
| Unique values | Unique values            |
| No score      | Every member has a score |
| Unordered     | Automatically sorted     |


    3. When should you use a Sorted Set?

Use a Sorted Set when you need:

 - Leaderboards
 - Rankings
 - Priority queues
 - Trending content
 - Top-N queries

*/