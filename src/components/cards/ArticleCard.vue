<template>
  <!--Article Card-->
  <div class="card mb-3">
    <div class="row">

      <div class="col-md-6">
        <div class="card-body-left">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">{{description}}</p>
          <router-link v-bind:to="'/articles/'+id" class="btn btn-primary">View Article</router-link>
        </div>
      </div>


      <div class="col-md-6 pt-1">
        <img class="card-img-top" v-bind:src="baseUrl+coverImage" alt="Card image cap">
      </div>


    </div>
  </div>

</template>

<script>
import {API_BASE_URL} from '/src/config.js';
export default {
  name: 'ArticleCard',
  props: [
    'title',
    'description',
    'tags',
    'id',
    'coverImage'
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