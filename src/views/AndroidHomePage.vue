<template>
  <!--  Main Container-->
  <div class="main-background container">

    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <h1 class="text-center main-heading">Learn Android</h1>
        <h4 class="text-center main-subheading">Learn Algorithms, Web and Mobile Devlopment</h4>
      </div>
    </div>
    <div class="row">
      <!-- Image Div Starts -->
      <div style=" margin-left: auto; margin-right: auto;" class="col-12 text-center">
        <img src="/assets/android.png" style="max-width: 80%;" class="img-fluid mx-auto d-block" alt="Android">
      </div>
      <!-- Image Div Ends -->
    </div>
    <!--Title Row Ends-->


    <!--Article List-->
<!--    <ArticleListElastic v-bind:api-url="baseURL"/>-->
    <ArticleListbyTag v-bind:api-url="baseURL" v-bind:tag="'android'"/>
  </div>
  <!--  Main Container Ends-->
</template>

<script>
import {API_BASE_URL} from "@/config";
// import ArticleListElastic from "@/components/lists/ArticleListElastic";
import ArticleListbyTag from "@/components/lists/ArticleListbyTag";
export default {
  name: "AndroidHomePage",
  components: {ArticleListbyTag},
  data() {
    return {
      // baseURL :  ELASTIC_API_BASE_URL+'?tag_names[]=android&sort_by=hotness_score&sort_direction=desc&approved=&class_name=Article',
      baseURL :  API_BASE_URL+'/tags/android',
    }
  },
  mounted() {
    const titleEl = document.querySelector('head title');
    titleEl.textContent = "Learn Android";

    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', 'Learn about Android App Development');
  }
}
</script>

<style scoped>

</style>
