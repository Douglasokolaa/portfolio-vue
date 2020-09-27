<template>
  <section class="section section-contact" id="contact">
    <div class="contact-Otherdetails">
      <div class="container">
        <div class="row col-md-12">
          <div class="col-md-6">
            <div class="section-head text-left">
              <span>say Hello</span>
              <h2>Contact</h2>
            </div>
            <div class="contact-left">
              <div class="contact-left--content">
                <h4>Social</h4>
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a
                      href="https://ng.linkedin.com/in/douglas-okolaa"
                      target="_blank"
                    >
                      <i class="fab fa-linkedin fa-2x mx-1"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://twitter.com/douglasokolaa" target="_blank"
                      ><i class="fab fa-twitter fa-2x mx-1"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://github.com/douglasokolaa" target="_blank"
                      ><i class="fab fa-github fa-2x mx-1"></i>
                    </a>
                  </li>
                </ul>
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
              <form
                id="contact_me"
                name="COntact Me"
                @submit.prevent="submit"
                class="needs-validation"
              >
                <div class="contact-form--wrap p-4 p-md-5">
                  <div
                    class="form-group mt-3 wow fadeInUp"
                    data-wow-duration="1.5s"
                  >
                    <input
                      name="name"
                      id="name"
                      class="form-control form__input s/website.css"
                      placeholder="Your Name*"
                      v-model="name"
                      :class="{
                        'is-invalid': $v.name.$error,
                        'is-valid': $v.name.$dirty && !$v.name.$error,
                      }"
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
                      class="form-control s/website.css"
                      placeholder="Your Email*"
                      v-model="email"
                      :class="{
                        'is-invalid': $v.email.$error,
                        'is-valid': $v.email.$dirty && !$v.email.$error,
                      }"
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
                      v-model="message"
                      :class="{
                        'is-invalid': $v.message.$error,
                        'is-valid': $v.message.$dirty && !$v.message.$error,
                      }"
                    ></textarea>
                  </div>
                  <div
                    class="text-center mt-5 wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay=".5s"
                  >
                    <button
                      type="submit"
                      class="btn"
                      :disabled="submitStatus == 'OK'"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              v-if="submitStatus === 'OK'"
              id="noticeF"
              class="alert alert-info alert-dismissible fade show scroll-to-me"
              role="alert"
              ref="submitNotice"
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
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "ContactForm",
  props: [],
  data() {
    return {
      name: "",
      email: "",
      message: "",
      token: null,
      submitStatus: "",
    };
  },
  mixins: [validationMixin],
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    email: {
      required,
      minLength: minLength(4),
      email,
    },
    message: {
      required,
      minLength: minLength(20),
    },
  },
  methods: {
    validate() {
      console.log("submit");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        return false;
      } else {
        this.submitStatus = "PENDING";
        return true;
      }
    },

    async recaptcha() {
      await this.$recaptchaLoaded();
      this.token = await this.$recaptcha("login");
      this.$recaptchaInstance.hideBadge();
    },

    async sendEmail(data) {
      let fetchData = {
        method: "POST",
        body: JSON.stringify(data),
      };
      await fetch("/.netlify/functions/send-contact-email", fetchData).then(
        (response) => {
          if (response.ok) {
            this.submitStatus = "OK";
            this.name = this.message = this.email = "";
            this.$v.$reset();
            this.$nextTick(() => {
              this.$refs.submitNotice.scrollTop = 0;
            });
              this.scrollToElement();
          } else {
            this.submitStatus = "Error";
          }
        }
      );
    },
    submit() {
      let isvalid = this.validate();
      if (isvalid) {
        let data = {
          name: this.name,
          message: this.message,
          email: this.email,
          token: this.token,
        };
        this.sendEmail(data);
      }
    },

    scrollToElement() {
    const el = this.$el.getElementsByClassName('scroll-to-me')[0];
    if (el) {
      el.scrollIntoView();
    }
  }
  },
  created() {
    this.recaptcha();
  },
};
</script>

