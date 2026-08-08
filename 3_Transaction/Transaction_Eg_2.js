// Transaction_Eg_2.js

// Transaction with Increment

const colors = require("colors");
const redis = require("./redis");
const { default: Redis } = require("ioredis");

const transaction_With_Increment = async () => {
  try {
    // 1. Prepare data
    await redis.set("balance", 5000);

    // 2. Watch key
    await redis.watch("balance");

    // 3. Read current value
    const balance = await redis.get("balance");

    // 4. Validate
    if (balance === null) {
      console.log(`Balance doesn't Exists`.bgRed);

      await redis.unwatch();

      return;
    }

    const currentBalance = Number(balance);

    // Check Sufficiant balance

    if (currentBalance < 1000) {
      console.log(`Insufficiant balance`.bgRed);

      await redis.unwatch();

      return;
    }

    // 5. Start transaction
    const multi = redis.multi();

    // 6. deduce 1000
    multi.set("balance", currentBalance - 1000);

    // 7. Execute
    const result = await multi.exec();

    // 8. Check Transaction result

    if (result === null) {
      console.log(
        "Transaction failed because balance was changed by another client"
          .bgRed,
      );
    } else {
      console.log(
        `Transaction successful. New balance: ${currentBalance - 1000}`.bgGreen,
      );
    }
  } catch (error) {
    console.log(`Error in transaction_With_Increment : ${error.message}`.bgRed);
  }
};

transaction_With_Increment();

/*  

1. Set/prepare initial data
        ↓
2. WATCH the key
        ↓
3. GET current value
        ↓
4. Validate the value
        ↓
5. MULTI → Start transaction
        ↓
6. Add commands to transaction
        ↓
7. EXEC → Execute transaction
        ↓
8. Check result
        ↓
9. Success / Transaction aborted

*/
