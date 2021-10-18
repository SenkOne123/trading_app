import { getHeaders } from "@/utils/getDefaultHeaders";

export default class AuthApiService {
  getAuthentificationToken(): Promise<any> {
    return fetch(
      "https://intense-thicket-79155.herokuapp.com/https://rest.simplefx.com/api/v3/auth/key",
      {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          clientId: "7258c3d936e346eca2f8f23ee27c1bfb",
          clientSecret: "05b4de65-03c8-43a9-8709-97db662db33b",
        }),
      }
    )
      .then((response) => response.json())
      .catch((err) => err.json);
  }
}
