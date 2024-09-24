import { createClient } from "redis";

async function createRedisClient() {
  const client = createClient();

  client.on("error", (error) => {
    console.error(error);
  });

  client.connect().then((value) => {
    console.log("Connected to Redis");
  });

  return client;
}

export { createRedisClient };
