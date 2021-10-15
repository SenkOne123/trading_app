export function getHeaders(token?: string): Headers {
  return new Headers({
    "Content-Type": "application/json; charset=UTF-8",
    Authorization: "Bearer " + token,
    Accept: "application/json",
  });
}
