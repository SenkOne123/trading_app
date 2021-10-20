import Account from "@/models/Account";
import { getHeaders } from "@/utils/getDefaultHeaders";

export default class AccountsApiService {
  getAccounts(token: string): Promise<Account[]> {
    return fetch(
      "https://intense-thicket-79155.herokuapp.com/https://rest.simplefx.com/api/v3/accounts",
      {
        headers: getHeaders(token),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw Error;
      })
      .then((r) => r.data)
      .catch((err) => err);
  }
}
