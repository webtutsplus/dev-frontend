<template>
    <!-- For displaying lists of all the articles -->
    <ArticleCard title="Java" description="Begin coding" tags="java, ruby"/>

    <!-- Use the following code for displaying the list of articles -->

    <!-- <div v-for="weatherData in type" :key="weatherData.id">
      <HelloWorld v-bind:msg="weatherData.processed_html"/>
  </div> -->
</template>

<script>
//import axios from 'axios';
import {API_BASE_URL} from '/src/config.js';
import ArticleCard from '/src/components/cards/ArticleCard.vue';

export default {
    name: 'ArticlesList',
    data() {
    return {
      baseURL: API_BASE_URL
    }
  },
  components: {
      ArticleCard
  },
  methods: {
    // fetchWishlist : function() {
    //   axios.get(this.baseURL)
    //     .then(data => this.type = data.data)
    //     .catch(err => console.log(err));
    // }
  }, 
  mounted() {
    // this.fetchWishlist();
  }
}
</script>

<style>

</style>