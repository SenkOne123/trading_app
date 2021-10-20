<template>
  <div class="container">
    <h1>SimpleFX App</h1>
    <div style="align-items: center" class="content-section">
      <div class="form-sections content-section">
        <div class="auth_sections">
          <p>Client id</p>
          <ui-textfield v-model="id" class="assets-form__currencies" outlined></ui-textfield>
        </div>
        <div class="auth_sections">
          <p>Client secret</p>
          <ui-textfield v-model="secret" class="assets-form__currencies" outlined></ui-textfield>
        </div>
        <div class="auth_sections content-section">
          <div>
            <p>Your accounts:</p>
            <ui-select class="auth_sections" v-model="account" outlined :options="accountOptions"></ui-select>
          </div>
          <ui-button @click="getUserAccounts" style="color: #1F1F1F;" outlined class="login__button">Get Accounts
          </ui-button>
        </div>
      </div>
    </div>
    <div class="form-sections">
      <p>Купить/Продать</p>
      <div class="assets-form">
        <ui-select v-model="asset" class="assets-form__currencies" :options="assetsOptions" outlined></ui-select>
        <ui-textfield v-model="sum" class="assets-form__currencies" outlined></ui-textfield>
        <ui-select v-model="assetMethod" class="assets-form__currencies" :options="assetMethodOptions"
                   outlined></ui-select>
        <ui-button @click="open" style="color: #1F1F1F;" outlined class="login__button assets-form__currencies">Open
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Account from "@/models/Account";
import AccountsApiService from "@/api/AccountsApiService";
import AuthApiService from "@/api/AuthApiService";
import OrdersApiService from "@/api/OrdersApiService";

@Options({})
export default class MainLayout extends Vue {
  id = "";
  secret = "";

  loading = true;
  accounts: Account[] = [];
  account: Account = new Account();
  sum = 0;
  assetsOptions = [
    {
      label: "BTCUSD",
      value: "BTCUSD"
    },
    {
      label: "EURUSD",
      value: "EURUSD"
    }];
  asset = "";
  accountOptions: any[] = [];
  assetMethodOptions = [
    {
      label: "BUY",
      value: "BUY"
    },
    {
      label: "SELL",
      value: "SELL"
    }];
  assetMethod = "";
  accountOptions_buf: any[] = [];
  token = "";
  accountsApiService: AccountsApiService = new AccountsApiService();
  authApiService: AuthApiService = new AuthApiService();
  ordersApiService: OrdersApiService = new OrdersApiService();

  mounted() {
    this.getCookie("TradingAuthToken");
    if (this.token !== "") {
      this.getUserAccounts()
    }
  }

  async getUserAccounts() {
    if (this.token === "") {
      await this.authApiService.getAuthentificationToken(this.id, this.secret).then(response => {
        this.token = response.data.token;
        document.cookie = `TradingAuthToken=${this.token}; expires=` + this.expires;
      });
    }
    this.accountsApiService.getAccounts(this.token).then(accounts => {
      this.accounts = accounts;
      for (let account of this.accounts) {
        this.accountOptions_buf.push({
          label: account.login,
          value: account
        });
      }
      this.accountOptions = this.accountOptions_buf;
    }).catch(err => console.log(err));
  }

  open() {
    return this.ordersApiService.exchange(this.token, this.account, this.sum, this.asset, this.assetMethod)
      .then(() => console.log("Successful!"));
  }

  get expires() {
    let date = new Date(Date.now() + 86400e3).toUTCString();
    return date;
  }

  getCookie(name: string) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"
    ));
    return matches ? this.token = decodeURIComponent(matches[1]) : undefined;
  }
}
</script>

<style scoped lang="scss">

.auth_sections {
  margin-right: 15px;

  .auth_header {
    margin-bottom: 20px;
  }
}

.content-section {
  display: flex;
  align-items: flex-end;
}

.container {
  margin-left: 20%;
  margin-right: 20%;
}

.text_headers {
  font-family: Roboto, sans-serif;
  font-weight: 400;
  font-size: 18px;
}

.login__button {
  height: 56px;
  color: #3b5dab;
}

.form-sections {
  margin-right: 20px;
  margin-top: 30px;
}

.assets-form {
  display: flex;
  flex-direction: column;

  .assets-form__currencies {
    margin-top: 20px;
  }

}
</style>
