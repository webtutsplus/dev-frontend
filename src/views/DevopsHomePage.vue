<template>
  <!--  Main Container-->
  <div class="main-background">

    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <h1 class="text-center main-heading">Learn Devops</h1>
        <h4 class="text-center main-subheading">Learn Algorithms, Web and Mobile Devlopment</h4>
      </div>
    </div>
    <!--Title Row Ends-->

    <!--Article List-->
    <ArticleList v-bind:api-url="baseURL"/>

  </div>
  <!--  Main Container Ends  -->

</template>

<script>
import {API_BASE_URL} from '/src/config.js';
import ArticleList from '/src/components/lists/ArticleList.vue'

export default {
  name: "DevopsHomePage",
  data() {
    return {
      baseURL :  API_BASE_URL+'/tags/devops',
    }
  },
  components : {
    ArticleList
  }
}
</script>

<style scoped>

</style>