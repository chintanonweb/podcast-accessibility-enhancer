const redis = require('redis');
const redisClient = redis.createClient();

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

const cache = (key, value, ttl = 3600) => {
    redisClient.set(key, JSON.stringify(value), 'EX', ttl);
};

const getCache = (key) => {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, data) => {
            if (err) return reject(err);
            resolve(JSON.parse(data));
        });
    });
};

module.exports = { cache, getCache };