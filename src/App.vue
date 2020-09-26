<template>
  <div class="page-wrapper">
    <div id="app">
      <NavBar></NavBar>
      <Home name="Douglas Okolaa"></Home>
      <AboutMe></AboutMe>
      <Services></Services>
      <Portfolio></Portfolio>
      <ContactForm></ContactForm>
      <Technologies></Technologies>
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="scss">
@import "src/assets/css/app.scss";
</style>

<script>
import NavBar from "./components/NavBar.vue";
import Home from "./components/Home.vue";
import AboutMe from "./components/About.vue";
import Services from "./components/Services.vue"
import Portfolio from "./components/Portfolio.vue"
import ContactForm from "./components/ContactForm.vue"
import Technologies from "./components/Technologies.vue"
import Footer from "./components/Footer.vue"
import  './assets/css/vendor.css';

export default {
  name: "App",
  components: {
    NavBar,
    Home,
    AboutMe,
    Services,
    Portfolio,
    ContactForm,
    Technologies,
    Footer,
  },
};
</script>
