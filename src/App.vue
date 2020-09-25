<template>
  <div class="page-wrapper">
    <div id="app">
      <NavBar></NavBar>
      <Home name="Douglas Okolaa"></Home>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/css/app.scss";
</style>

<script>
import NavBar from "./components/NavBar.vue";
import Home from "./components/Home.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Home,
  },
};
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
