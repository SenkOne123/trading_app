import { BillStates } from "@/models/BillStates";
import Currencies from "@/models/Currencies";

export default class Account {
  reality: BillStates = BillStates.DEMO;
  login = 0;
  balance = 0;
}

// currency: Currencies;
// leverage: number = 0;
// equity: number = 0;
// margin: number = 0;
// freeMargin: number = 0;
// marginLevel: number = 0;
// code: number = 0;
// message: string = "";
// webRequestId: string = "";
