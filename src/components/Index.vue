<template>
  <div>
    <div id="preloader" class="preloader">
      <div class="spinner-grow text-light" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <NavBar></NavBar>
    <Home name="Douglas Okolaa"></Home>
    <AboutMe></AboutMe>
    <Services></Services>
    <Portfolio></Portfolio>
    <ContactForm></ContactForm>
    <Technologies></Technologies>
    <Footer></Footer>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import $ from "jquery";
import NavBar from "./NavBar.vue";
import Home from "./Home.vue";
import AboutMe from "./About.vue";
import Services from "./Services.vue";
import Portfolio from "./Portfolio.vue";
import ContactForm from "./ContactForm.vue";
import Technologies from "./Technologies.vue";
import Footer from "./Footer.vue";

export default {
  name: "Index",
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
  data() {
    return {
      
    }
  },
  mounted() {
    this.$loadScript("vendor.min.js").then(() => {
      this.$loadScript(
        "https://cdn.jsdelivr.net/npm/simple-parallax-js@5.2.0/dist/simpleParallax.min.js"
      ).then(() => {
        this.$loadScript("custom.min.js");
      });
    });
  },
};
</script>