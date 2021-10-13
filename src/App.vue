<template>
  <MainLayout />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainLayout from "@/components/MainLayout.vue";

@Options({
  components: {
    MainLayout,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  color: #1F1F1F;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
