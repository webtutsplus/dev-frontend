<template>
  <!--  Main Container-->
  <div class="main-background container">

    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <h1 class="text-center main-heading">Learn Frontend</h1>
        <h4 class="text-center main-subheading">Learn Algorithms, Web and Mobile Devlopment</h4>
      </div>
    </div>
    <div class="row">
      <!-- Image Div Starts -->
      <div style=" margin-left: auto; margin-right: auto;" class="col-12 text-center">
        <img src="/assets/front-end.png" style="max-width: 80%;" class="img-fluid mx-auto d-block" alt="front-end technologies">
      </div>
      <!-- Image Div Ends -->
    </div>
    <!--Title Row Ends-->


    <!--Article List-->
    <ArticleListElastic v-bind:api-url="baseURL"/>

  </div>
  <!--  Main Container Ends-->

</template>

<script>
import {ELASTIC_API_BASE_URL} from '/src/config.js';
import ArticleListElastic from "@/components/lists/ArticleListElastic";
document.title = "Frontend"
export default {
  name: "FrontendElastic",
  data() {
    return {
      baseURL :  ELASTIC_API_BASE_URL+'?tag_names[]=frontend&sort_by=hotness_score&sort_direction=desc&approved=&class_name=Article',
    }
  },
  components : {
    ArticleListElastic
  },
  mounted() {
    const titleEl = document.querySelector('head title');
    titleEl.textContent = "Learn Frontend";

    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', 'Learn about various FrontEnd frameworks');
  }
}
</script>

<style scoped>

</style>
