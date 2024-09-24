export function urlShortner(url) {
  // get the name of website
  const name = url.split(".")[1];
  // get query params
  const query = url.split("?")[1];

  // get the path
  const path = url.split("/")[3];

  // return the short url
  return `hamas::${name}-PATH-${path}-QUERY-${query}`;
}
