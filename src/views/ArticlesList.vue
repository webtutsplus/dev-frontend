<template>
    <ArticleCard title="Java" description="Begin coding"/>
</template>

<script>
import axios from 'axios';
import {API_BASE_URL} from '/src/config.js';
import ArticleCard from '/src/components/cards/ArticleCard.vue';

export default {
    name: 'App',
    data() {
    return {
      baseURL: API_BASE_URL
    }
  },
  components: {
      ArticleCard
  },
  methods: {
    fetchWishlist : function() {
      axios.get(this.baseURL)
        .then(data => this.type = data.data)
        .catch(err => console.log(err));
    }
  }, 
  mounted() {
    // this.fetchWishlist();
  }
}
</script>

<style>

</style>