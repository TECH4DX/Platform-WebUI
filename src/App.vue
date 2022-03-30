<template>
  <title>开发者画像</title>
  <DeveloperPortrait />
  <Pageheader />
  <Pagenavbar />
  <Pagemain />
</template>

<script>
import { defineComponent } from "vue";
import DeveloperPortrait from "./components/DeveloperPortrait.vue";
import Pageheader from "./components/Pageheader.vue";
import Pagenavbar from "./components/Pagenavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    DeveloperPortrait,
    Pageheader,
    Pagenavbar,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
