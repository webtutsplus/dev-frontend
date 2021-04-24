<template>
  <!--Article Card-->
  <div class="card mb-3">
    <!--Tags-->
    <div class="card-header">
      <span v-for="tag in tags" :key="tag">
        <RouterLink v-bind:to="`/tags/${tag}`">#{{ tag + " " }}</RouterLink>
        <!--        <router-view :key="$route.fullPath"></router-view>-->
        <!--        <a v-bind:href="'/tags/'+tag">#{{tag+' '}}</a>-->
      </span>
    </div>
    <!--Tags Ends-->

    <!--Body-->
    <div class="row pt-2">
      <!--Text-->
      <div class="col-md-6">
        <div class="card-body-left">
          <router-link v-bind:to="'/articles/' + slug"
            ><h5 class="card-title">{{ title }}</h5>
          </router-link>
          <p class="card-text">{{ description }}</p>
          <router-link v-bind:to="'/articles/' + slug" class="btn btn-primary"
            >View Article</router-link
          >
        </div>
      </div>
      <!--Text Ends-->
      <!--Image-->
      <div class="col-md-6 pt-1">
        <img
          class="card-img-top"
          v-bind:src="baseUrl + coverImage"
          alt="Card image cap"
        />
      </div>
      <!--Image Ends-->
    </div>
    <!--Body Ends-->
  </div>
  <!--Article Card Ends-->
</template>

<script>
import { API_BASE_URL } from "/src/config.js";
export default {
  name: "ArticleCard",

  props: ["title", "description", "tags", "id", "coverImage", "slug"],
  data() {
    return {
      baseUrl: API_BASE_URL,
    };
  },
};
</script>
a { color: black; } a:link { text-decoration: none; color:black } a:visited {
text-decoration: none; } a:hover { text-decoration: underline; } a:active {
text-decoration: underline; } .card-title { color: black !important; }
<style></style>
