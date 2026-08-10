

1. Lua Script kya hai?

Simple Hindi-English definition:

Lua Script Redis ke andar multiple Redis commands ko ek single script ke form mein execute karne ka way hai.

![Lua Script kya hai?](image.png)



2. Lua kya hai?

![Lua kya hai?](image-1.png)


3. Real-Life Example

![Real-Life Example](image-2.png)


4. Lua Script se

![Lua Script se](image-3.png)


5. Why Lua Script?

![Why Lua Script?](image-4.png)


6. EVAL ⭐⭐⭐⭐⭐

![EVAL](image-5.png)



7. EVAL ka Structure

![EVAL ka Structure](image-6.png)


8. KEYS and ARGV

![KEYS and ARGV](image-7.png)


10. redis.call() ⭐⭐⭐⭐⭐

Lua script ke andar Redis commands execute karne ke l

![redis.call()](image-8.png)



13. Real Example: Rate Limiter ⭐⭐⭐⭐⭐

![Real Example: Rate Limiter](image-9.png)




14. Rate Limiter Example

![ Rate Limiter Example - i](image-10.png)

![Rate Limiter Example - ii](image-11.png)



15. What Does This Do?

![alt text](image-12.png)

16. Lua vs Transaction ⭐⭐⭐⭐⭐

Very important interview question.

![Lua vs Transaction ](image-13.png)


17. Lua vs Pipeline ⭐⭐⭐⭐⭐

Another important question.

![Lua vs Pipeline](image-14.png)



18. Pipeline vs Transaction vs Lua

| Feature               | Pipeline         | Transaction             | Lua                 |
| --------------------- | ---------------- | ----------------------- | ------------------- |
| Main purpose          | Performance      | Transactional execution | Atomic custom logic |
| Multiple commands     | ✅                | ✅                       | ✅                   |
| Server-side logic     | ❌                | ❌                       | ✅                   |
| Reduces network trips | ✅                | Somewhat                | ✅                   |
| Atomic execution      | ❌                | ✅                       | ✅                   |
| Conditions/if-else    | Application side | Limited                 | ✅                   |
| `WATCH` required      | ❌                | Sometimes               | ❌                   |






21. Important Lua Commands/Functions

| Redis/ioredis                 | Meaning                          |
| ----------------------------- | -------------------------------- |
| `EVAL` / `redis.eval()`       | Execute Lua script               |
| `EVALSHA` / `redis.evalsha()` | Execute cached script using SHA  |
| `redis.call()`                | Execute Redis command inside Lua |
| `KEYS[]`                      | Access Redis keys                |
| `ARGV[]`                      | Access normal arguments          |




24. Interview Questions
Q1. What is Redis Lua scripting?

Redis Lua scripting allows us to execute custom Lua logic and multiple Redis commands directly on the Redis server as a single atomic operation.

Q2. Why use Lua instead of multiple Redis commands?

Lua is useful when multiple commands and conditional logic need to be executed atomically, avoiding race conditions and reducing network round trips.

Q3. What is EVAL?

EVAL executes a Lua script in Redis.

Q4. What are KEYS and ARGV?

KEYS contains Redis key names, while ARGV contains normal arguments passed to the Lua script.

Q5. What is EVALSHA?

EVALSHA executes a previously loaded Lua script using its SHA1 hash instead of sending the complete script again.

Q6. Pipeline vs Lua?

Strong answer:

"Pipeline is mainly used to reduce network round trips and improve performance. Lua scripting is used when we need custom server-side logic and atomic execution of multiple Redis operations."


![alt text](image-15.png)