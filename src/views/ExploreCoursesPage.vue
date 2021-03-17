<template>
  <!--  Main Container-->
  <div class="main-background container">

    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <h1 class="text-center main-heading">Explore Courses</h1>
        <h4 class="text-center main-subheading">Learn Algorithms, Web and Mobile Devlopment</h4>
      </div>
    </div>
    <div class="row">
      <!-- Image Div Starts -->
      <div style=" margin-left: auto; margin-right: auto;" class="col-12 text-center">
        <img src="/assets/front-end.png" style="max-width: 80%;" class="img-fluid mx-auto d-block"
             alt="front-end technologies">
      </div>
      <!-- Image Div Ends -->
    </div>
    <!--Title Row Ends-->


    <!--Article List-->
    <ArticleList v-bind:api-url="baseURL"/>

  </div>
  <!--  Main Container Ends-->
</template>

<script>
import {API_BASE_URL} from "/src/config";
import ArticleList from "@/components/lists/ArticleList";

export default {
  name: "ExploreCoursesPage",
  data() {
    return {
      baseURL: API_BASE_URL + '/tags/frontend',
    }
  },
  components : {
    ArticleList
  },
  mounted() {
    const titleEl = document.querySelector('head title');
    titleEl.textContent = "Explore Courses";
  }
}
</script>

<style scoped>

</style>
