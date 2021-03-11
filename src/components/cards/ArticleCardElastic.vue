<template>
  <!--Article Card-->
  <div class="card mb-3">

    <!--Tags-->
    <div class="card-header">
      <span v-for="tag in tags" :key="tag">
        <router-link :to="'/tags/'+tag">#{{tag+' '}}</router-link>
      </span>
    </div>
    <!--Tags Ends-->

    <!--Body-->
    <div class="row pt-2">
      <!--Text-->
      <div class="col-md-6">
        <div class="card-body-left">
          <h5 class="card-title">{{title}}</h5>
          <router-link v-bind:to="'/articles'+slug" class="btn btn-primary">View Article</router-link>
        </div>
      </div>
      <!--Text Ends-->
      <!--Image-->
      <div class="col-md-6 pt-1">
        <img class="card-img-top" v-bind:src="baseUrl+coverImage" alt="Card image cap">
      </div>
      <!--Image Ends-->
    </div>
    <!--Body Ends-->

  </div>
  <!--Article Card Ends-->

</template>

<script>
import {API_BASE_URL} from '/src/config.js';
export default {
  name: 'ArticleCardElastic',
  props: [
    'title',
    'tags',
    'id',
    'coverImage',
    'slug'
  ],
  data() {
    return {
      baseUrl : API_BASE_URL
    }
  }
}
</script>

<style>

</style>
