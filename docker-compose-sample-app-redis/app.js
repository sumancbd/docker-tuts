import { createClient } from 'redis';

const HOST = 'my-redis';

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

const KEY = 'my-name-is'
let value = await client.get(KEY);
console.log(`My Name at start is -> ${value}`);

await client.set(KEY, 'Tim Cook');

value = await client.get(KEY);
console.log(`My Name after save is -> ${value}`);


process.exit(0);