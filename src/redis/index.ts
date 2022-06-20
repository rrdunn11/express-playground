import { createClient } from 'redis';

const redisClient = createClient({
  url: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));

export default redisClient;
