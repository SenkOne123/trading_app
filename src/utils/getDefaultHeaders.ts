export function getHeaders(): Headers {
  return new Headers({
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
  });
}
