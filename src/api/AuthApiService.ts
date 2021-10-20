import { getHeaders } from "@/utils/getDefaultHeaders";

export default class AuthApiService {
  getAuthentificationToken(
    clientId: string,
    clientSecret: string
  ): Promise<any> {
    return fetch(
      "https://intense-thicket-79155.herokuapp.com/https://rest.simplefx.com/api/v3/auth/key",
      {
        method: "POST",
        headers: getHeaders(),
        body: JSON.stringify({
          clientId: clientId,
          clientSecret: clientSecret,
        }),
      }
    )
      .then((response) => response.json())
      .catch((err) => err.json);
  }
}
