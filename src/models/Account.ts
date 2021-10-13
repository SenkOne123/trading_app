import { BillStates } from "@/models/BillStates";
import Currencies from "@/models/Currencies";

export default class Account {
  data: AccountData = new AccountData();
  code: number = 0;
  message: string = "";
  webRequestId: string = "";
}

export class AccountData {
  reality: BillStates = BillStates.DEMO;
  login: number = 0;
  currency: Currencies;
  leverage: number = 0;
  balance: number = 0;
  equity: number = 0;
  margin: number = 0;
  freeMargin: number = 0;
  marginLevel: number = 0;
}