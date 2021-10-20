/* eslint-disable */
declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "vuex" {
  function useStore<T = any>(key?: string): T;
}

declare module "balm-ui";
declare module "balm-ui-plus";
declare module "vuex";
