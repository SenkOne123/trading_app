export function getHeaders(token?: string): Headers {
  return new Headers({
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: token ? token : "",
    Accept: "application/json",
  });
}
