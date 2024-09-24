import { urlShortner } from "./shortner.js";
export async function setUrl(redisClient, url) {
  const urlExist = await redisClient.get(url);

  if (urlExist) {
    return urlExist;
  }

  const shortUrl = urlShortner(url);

  await redisClient.set(url, shortUrl);

  return shortUrl;
}
