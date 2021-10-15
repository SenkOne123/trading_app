<template>
  <div class="container">
    <h1>SimpleFX App</h1>
    <div class="content-section">
<!--      <div class="form-sections">-->
<!--        <p class="text_headers">Login</p>-->
<!--        <ui-textfield type="email" outlined v-model="login"></ui-textfield>-->
<!--      </div>-->
<!--      <div class="form-sections">-->
<!--        <p class="text_headers">Password</p>-->
<!--        <ui-textfield type="password" outlined v-model="password"></ui-textfield>-->
<!--      </div>-->
    </div>
    <div class="form-sections">
      <h6 class="text_headers">Количество аккаунтов: {{ accounts.length }} </h6>
      <ui-select outlined :options="options"></ui-select>
      <div class="form-sections">
        <ui-button @click="getUserAccounts" style="color: #1F1F1F;" outlined class="login__button">Get Accounts</ui-button>
      </div>
    </div>
    <div class="form-sections">
      <p>Купить/Продать</p>
      <div class="exchange-form">
        <ui-select class="exchange-form__currencies" outlined :options="currencies" label="from"></ui-select>
        <ui-select outlined :options="currencies" label="to"></ui-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Account from "src/models/Account";
import AccountsApiService from "@/api/AccountsApiService";
import { store } from "@/store/store";
import Currencies from "@/models/Currencies";
import AuthApiService from "@/api/AuthApiService";


@Options({})
export default class MainLayout extends Vue {
  authentificated = false
  login = "";
  password = "";
  loading = true;
  accounts: Account[] = [];
  currencies: Currencies[] = [];
  options: any[] = []
  options_buf : any[] = []
  token = ''
  accountsApiService: AccountsApiService = new AccountsApiService()
  authApiService: AuthApiService = new AuthApiService()

  mounted() {
    this.getAuthToken()
  }

  getUserAccounts() {
    this.accountsApiService.getAccounts(this.token).then(accounts => {
      this.accounts = accounts
      for (let account of this.accounts) {
        this.options_buf.push({
          label: account.login.toString(),
          value: account.balance
        })
      }
      this.options = this.options_buf
    }).catch(err => console.log(err))
  }

  getAuthToken() {
    return this.authApiService.getAuthentificationToken().then(token =>  {
      this.token = token.data.token
    })
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
