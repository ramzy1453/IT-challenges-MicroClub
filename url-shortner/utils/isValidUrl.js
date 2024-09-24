export function isValidUrl(url) {
  return url.match(/(http|https):\/\/[^ "]+/);
}
