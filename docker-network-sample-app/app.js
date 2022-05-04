import { createClient } from 'redis';

const HOST = 'localhost';

const client = createClient({
    url: `redis://${HOST}:6379`
});

client.on('error', (err) => {
    console.log('Redis Client Error', err);
    process.exit(1);
});

await client.connect();

const res = await client.ping()
console.log(res);
process.exit(0);