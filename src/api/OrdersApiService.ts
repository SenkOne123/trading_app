import { getHeaders } from "@/utils/getDefaultHeaders";
import Account from "@/models/Account";

export default class OrdersApiService {
  exchange(
    token: string,
    account: Account,
    sum: number,
    asset: string,
    buyOrSell: string
  ): Promise<string> {
    return fetch(
      "https://intense-thicket-79155.herokuapp.com/https://rest.simplefx.com/api/v3/trading/orders/market",
      {
        method: "POST",
        headers: getHeaders(token),
        body: JSON.stringify({
          Reality: account.reality,
          Login: account.login,
          Symbol: asset,
          Side: buyOrSell,
          Volume: sum,
        }),
      }
    ).then((res) => res.json());
  }
}
