<template>
    <ArticleList v-bind:api-url="baseURL"/>
</template>

<script>
import {API_BASE_URL} from '/src/config.js';
import ArticleList from '/src/components/lists/ArticleList.vue';

export default {
    name: 'ArticlesList',
    data() {
    return {
      baseURL: API_BASE_URL+'/all'
    }
  },
  components: {
      ArticleList
  },
}
</script>

<style>

</style>