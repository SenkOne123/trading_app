export function getHeaders(token?: string): Headers {
  return new Headers({
    "Content-Type": "application/json; charset=UTF-8",
    "Access-Control-Allow-Origin": "https://senkone123.github.io/",
    Authorization: "Bearer " + token,
    Accept: "application/json",
  });
}
