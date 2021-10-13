<template>
  <div class="container">
    <h1>SimpleFX App</h1>
    <div class="content-section">
      <div class="form-sections">
        <p class="text_headers">Login</p>
        <ui-textfield outlined v-model="login"></ui-textfield>
      </div>
      <div class="form-sections">
        <p class="text_headers">Password</p>
        <ui-textfield outlined v-model="password"></ui-textfield>
      </div>
      <div class="form-sections">
        <ui-button @click="getUserAccounts" style="color: #1F1F1F;" outlined class="login__button">Get Accounts</ui-button>
      </div>
    </div>
    <div class="form-sections">
      <h6 class="text_headers">Количество аккаунтов: {{accounts.length}} </h6>
      <ui-select outlined :options="options"></ui-select>
    </div>
    <div class="form-sections">

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Account from "src/models/Account";
import AccountsApiService from "@/api/AccountsApiService";

@Options({})
export default class MainLayout extends Vue {
  login = "";
  password = "";
  loading = true;
  accounts: Account[] = [];
  options: any[] = [{
    label: 'SOSAT SYUDA',
    value: 123,
  }]
  accountsApiService: AccountsApiService = new AccountsApiService()

  getUserAccounts() {
    this.accountsApiService.getAccounts().then(accounts => {
      this.accounts = accounts
      for (let account of this.accounts) {
        this.options.push({
          label: account.code.toString(),
          value: account
        })
      }
    }).catch(err => console.log(err))
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
</style>
