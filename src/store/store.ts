import Vue from 'vue'
import Vuex from 'vuex'
import { Getters, Mutations, Module, createStore } from 'vuex-smart-module'
import Account from "@/models/Account";

class State {
  permitState = false
  token = ''
  user_accounts: Account[] = []
}

class SGetters extends Getters<State> {
  get permit(): boolean {
    return this.state.permitState
  }

  get account(): Account[] {
    return this.state.user_accounts
  }
}

class SMutations extends Mutations<State> {
  permit(value: boolean) {
    this.state.permitState = value
  }
}

export const store = createStore(
  new Module({
    state: State,
    getters: SGetters,
    mutations: SMutations,
  })
)

// Vue.use(Vuex)