import { createRedisClient } from "./redis.js";
import { isValidUrl } from "./utils/isValidUrl.js";
import { setUrl } from "./utils/setUrl.js";

async function main() {
  const args = process.argv;
  const url = args[2];

  if (!url) {
    console.log("Please provide a valid url");
    process.exit(1);
  }

  if (!isValidUrl(url)) {
    console.log("Please provide a valid url");
    process.exit(1);
  }

  const redisClient = await createRedisClient();

  const shortUrl = await setUrl(redisClient, url);

  console.log(`Shortened URL for ${url} is ${shortUrl}`);
}

main();
