<template>
  <div class="container d-flex vh-100" id="about">
    <div class="row w-100">
      <div class="col-md-6 offset-md-3">
        <div class="d-flex justify-content-center align-items-center h-100">
          <div class="w-100 text-center">
            <h1 class="d-block">404</h1>
            <p class="mt-5 mb-4">
              The page you navigated to does not exit or has been removed
            </p>
            <router-link class="btn btn-info" :to="{ name: 'home', params: { StopPreloader: true } }"> HOMEPAGE</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>