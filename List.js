// List.js

const redis = require("./redis");
const colors = require("colors");

const List = async () => {
  /*     
    await redis.lpush("student", "AK");     // =========> [ 'AK' ] */

  /*     
    await redis.lpush("student", "Tejas");     // =========> [ 'Tejas', 'AK' ]
 */
  /* 
    await redis.lpush("student", "Shubh");     // =========> [ 'Shubh', 'Tejas', 'AK' ] */

  /* 
    await redis.rpush("student", "Jay");     // =========> [ 'Shubh', 'Tejas', 'AK', 'Jay' ] */

  /* 
    await redis.rpush("student", "Abhi");     // =========> [ 'Shubh', 'Tejas', 'AK', 'Jay', 'Abhi' ] */

  /*     
    await redis.lpop('student');     // =========> [ 'Tejas', 'AK', 'Jay', 'Abhi' ] */

  /* 
    await redis.rpop('student')     // =========> [ 'Tejas', 'AK', 'Jay' ] */

  /*  
    const Lenght_Of_Student_List = await redis.llen('student');

    console.log(`Lenght Of Student Lis : ${Lenght_Of_Student_List}`);     // =========> Lenght Of Student Lis : 3 */

  const student = await redis.lrange("student", 0, -1);

  console.log(student); // =========> [ 'Tejas', 'AK', 'Jay' ]
};

List();

// LPUSH(<List_Name>, <Element_Name>) ======> add Element in given List from Left side

// RPUSH(<List_Name>, <Element_Name>) ======> add Element in given List from Right side

// LPOP(<List_Name>)  ======> Remove 1st Element which is in Left Side.

// RPOP(<List_Name>)  ======> Remove 1st Element which is in Right Side.

// LPOP(<List_Name>)  ======> Remove 1st Element which is in Left Side.

// LRENGE(<List_Name>, Starting_Index, Ending_Index)  ======> Show the elements in given LIst from starting element to ending element.
