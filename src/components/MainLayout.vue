<template>
  <div class="container">
    <div class="input-section">
      <p class="text_headers">Login</p>
      <ui-textfield v-model="login"></ui-textfield>
    </div>
    <div class="input-section">
      <p>Password</p>
      <ui-textfield v-model="password"></ui-textfield>
    </div>
    <div class="input-section"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class MainLayout extends Vue {
  login = "";
  password = "";
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  margin-left: 20%;
  margin-right: 20%;
}
.text_headers {
  font-family: Roboto, sans-serif;
}
.input-section {
  margin-right: 20px;
}
</style>
