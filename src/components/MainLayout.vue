<template>
  <div class="container">
    <h1>123</h1>
    <div style="align-items: center" class="content-section">
      <div class="form-sections">
        <h6 class="text_headers">Количество аккаунтов: {{ accounts.length }} </h6>
      </div>
      <div class="form-sections">
        <ui-select v-model="account" outlined :options="options"></ui-select>
      </div>
      <div class="form-sections">
        <ui-button @click="getUserAccounts" style="color: #1F1F1F;" outlined class="login__button">Get Accounts
        </ui-button>
      </div>
    </div>
    <div class="form-sections">
      <p>Купить/Продать</p>
      <div class="exchange-form">
        <ui-select v-model="currencyFrom" class="exchange-form__currencies" outlined :options="currencies"
                   label="from"></ui-select>
        <ui-select v-model="currencyTo" class="exchange-form__currencies" outlined :options="currencies"
                   label="to"></ui-select>
        <ui-textfield v-model="exchangeSum" class="exchange-form__currencies" outlined></ui-textfield>
        <ui-select v-model="exchangeMethod" class="exchange-form__currencies" :options="exchangeMethodOptions" outlined></ui-select>
        <ui-button @click="exchange" style="color: #1F1F1F;" outlined class="login__button" >Exchange</ui-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Account from "@/models/Account";
import AccountsApiService from "@/api/AccountsApiService";
import Currencies from "@/models/Currencies";
import AuthApiService from "@/api/AuthApiService";
import ExchangeApiService from "@/api/ExchangeApiService";


@Options({})
export default class MainLayout extends Vue {
  authentificated = false;
  login = "";
  password = "";
  loading = true;
  accounts: Account[] = [];
  account: Account = new Account();
  exchangeSum = 0;
  currencies = [
    {
      label: "BTC",
      value: "BTC"
    },
    {
      label: "USD",
      value: "USD"
    }];
  currencyFrom = "";
  currencyTo = "";
  options: any[] = [];
  exchangeMethod = "";
  exchangeMethodOptions = [
    {
      label: "BUY",
      value: "BUY"
    },
    {
      label: "SELL",
      value: "SELL"
    }];
  options_buf: any[] = [];
  token = "";
  accountsApiService: AccountsApiService = new AccountsApiService();
  authApiService: AuthApiService = new AuthApiService();
  exchangeApiService: ExchangeApiService = new ExchangeApiService();

  mounted() {
    this.getAuthToken();
  }

  getUserAccounts() {
    return this.accountsApiService.getAccounts(this.token).then(accounts => {
      this.accounts = accounts;
      for (let account of this.accounts) {
        this.options_buf.push({
          label: account.login,
          value: account
        });
      }
      this.options = this.options_buf;
    }).catch(err => console.log(err));
  }

  exchange() {
    return this.exchangeApiService.exchange(this.token, this.account, this.exchangeSum, this.currencyFrom, this.currencyTo, this.exchangeMethod)
      .then(response => console.log(response));
  }

  getAuthToken() {
    return this.authApiService.getAuthentificationToken().then(token => {
      this.token = token.data.token;
    });
  }

}
</script>

<style scoped lang="scss">

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

.exchange-form {
  display: flex;

  .exchange-form__currencies {
    margin-right: 20px;
  }

}
</style>
