<template>
    <section class="section section-about">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-6">
                    <div class="simpleParallax-wrap">
                        <img class="thumbnail img-fluid d-block wow fadeInUp"
                            :src="require('../assets/images/DouglasSVG.svg')" alt="About Picture" />
                        <img class="about-dots" :src="require('../assets/images/dots.svg')" alt="About dots" />
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="about-desc">
                        <div class="about-desc-content text-left">
                            <h2>About Me</h2>
                            <p class="mt-5 mb-4">
                                {{ about_me_description }}
                                <!--Dedicated and efficient full stack developer with
									Passionate designer & developer who loves simplicity in things
									and crafts beautiful user interfaces with love. -->
                            </p>

                            <a href="#contact" class="btn">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            about_me_description: {
                type: String,
                default: "I am a Performance-driven Full Stack Developer having 2 years\
                            experience with strong attention to detail, well-developed time\
                            management skills, and ability to complete all projects in a\
                            timely mannerin all phases of software development"
            }
        }
    }
</script>