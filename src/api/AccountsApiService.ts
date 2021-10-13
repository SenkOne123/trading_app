import { LINKS } from "@/models/LINKS";
import { getHeaders } from "@/utils/getDefaultHeaders";




export default class AccountsApiService {
  getAccounts(): Promise<Account[]> {
    return fetch({'https://rest.simplefx.com/api/v3/accounts',
      headers: getHeaders();
    })
      .then()
  }
}
