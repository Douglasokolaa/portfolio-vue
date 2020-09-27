<template>
  <section class="section section-contact" id="contact">
    <div class="contact-Otherdetails">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="section-head text-left">
              <span>say Hello</span>
              <h2>Contact</h2>
            </div>

            <div class="contact-left">
              <div class="contact-left--content my-4 pb-3">
                <h4>My Location</h4>
                <a target="_blank" href="#">Nigeria</a>
              </div>
              <div class="contact-left--content my-4 pb-3">
                <h4>Mail</h4>
                <a href="mailto:hello@codeindoug.com">hello@codeindoug.com</a>
              </div>
              <div class="contact-left--content my-4 pb-3">
                <h4>Phone</h4>
                <a href="tel:+2348130488941">0813 048 8941</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="contact-form">
              <form id="contact_me" name="COntact Me">
                <div class="contact-form--wrap p-4 p-md-5">
                  <div
                    class="form-group mt-3 wow fadeInUp"
                    data-wow-duration="1.5s"
                  >
                    <input
                      name="name"
                      id="name"
                      type="text"
                      class="form-control s/website.css"
                      placeholder="Your Name*"
                      required
                    />
                  </div>
                  <div
                    class="form-group mt-3 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".2s"
                  >
                    <input
                      name="email"
                      id="email"
                      type="email"
                      class="form-control s/website.css"
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                  <div
                    class="form-group mt-3 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".4s"
                  >
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      class="form-control s/website.css"
                      placeholder="Your message..."
                      required
                    ></textarea>
                  </div>
                  <div
                    class="text-center mt-5 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".5s"
                  >
                    <button @click="recaptcha" type="submit" class="btn">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
            v-cloak
              id="noticeF"
              class="alert alert-primary alert-dismissible fade show d-none"
              role="alert"
            >
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
                <span class="sr-only">Close</span>
              </button>
              <strong>Thanks for writing to me!</strong> I will revert to you
              ASAP.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "ContactForm",
  props: "",
  methods: {
    async recaptcha() {
      await this.$recaptchaLoaded();
      const token = await this.$recaptcha("login");
      alert(token);
    },
  },
};


</script>

