import { getHeaders } from "@/utils/getDefaultHeaders";
import Account from "@/models/Account";


export default class ExchangeApiService {
  exchange(token: string, account: Account, sum: number, currencyFrom: string, currencyTo: string, buyOrSell: string): Promise<string> {
    return fetch("https://rest.simplefx.com/api/v3/trading/orders/market", {
      method: "POST",
      headers: getHeaders(token),
      body: JSON.stringify({
        Reality: account.reality,
        Login: account.login,
        Symbol: currencyFrom + currencyTo,
        Side: buyOrSell,
        Volume: sum
      })
    }).then(res => res.json());
  }
}