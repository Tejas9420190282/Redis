//redis.js

const { default: Redis } = require("ioredis");

const redis = new Redis();

module.exports = redis;