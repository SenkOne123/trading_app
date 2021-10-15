import { LINKS } from "@/models/LINKS";
import Account from "@/models/Account";
import { getHeaders } from "@/utils/getDefaultHeaders";

export default class AccountsApiService {
  getAccounts(token: string): Promise<Account[]> {
    return fetch("https://rest.simplefx.com/api/v3/accounts", {
      headers: getHeaders(token),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else throw Error;
      })
      .then((r) => r.data)
      .catch((err) => err);
  }
}
