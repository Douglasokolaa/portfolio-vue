<template>
  <section class="section section-services py-5" id="services">
    <div class="container">
      <div class="section-head">
        <span>Skills</span>
        <h2>Services I provide</h2>
      </div>

      <div class="row justify-content-around">
        <div class="col-sm-10 col-md-4">
          <div class="services-list py-4 p-md-4 mb-4">
            <div class="services-list-icon">
              <i class="fa fa-puzzle-piece"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Web App Development</h5>
              <p class="mt-3">
                I have worked with variety of teams from freelance to large teams ( 136 members ) projects, in a variety of roles from Programming web application codes, Troubleshooting and debugging to Analysis and testing
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-10 col-md-4">
          <div class="services-list py-4 p-md-4 mb-4">
            <div class="services-list-icon">
              <i class="fas fa-cog"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">DevOps</h5>
              <p class="mt-3">
                Automated processes make the world go round. I set up hosting
                and perform the automation of manual tasks &amp; processes to
                provide continuous integration &amp; delivery. Your satisfaction
                with the result will also be continuous!
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm-110 col-md-4 ">
          <div class="services-list py-4 p-md-4 mb-4">
            <div class="services-list-icon">
              <i class="fas fa-chart-bar"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Website Management</h5>
              <p class="mt-3">
                Modern and mobile-ready website that will help of your
                marketing.
              </p>
            </div>
          </div>
        </div> -->
        <div class="col-sm-10 col-md-4">
          <div class="services-list py-4 p-md-4 mb-4">
            <div class="services-list-icon">
              <i class="fa fa-users-cog" aria-hidden="true"></i>
            </div>
            <div class="mt-4">
              <h5 class="mb-0">Web Master</h5>
              <p class="mt-3">
                I ensure that the web servers, hardware and software are
                operating correctly, designing the website, generating and
                revising web pages, A/B testing, replying to user comments, and
                examining traffic through the site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      leftItem: '',
      rightItem: '',
      items:[],
    }
  },
  computed: {
    
  },
  methods: {
    
  },
  created: {
    
  }
};
</script>