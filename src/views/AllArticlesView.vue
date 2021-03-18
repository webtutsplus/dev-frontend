<template>
  <div class="main-background container">
    <ArticleList v-bind:api-url="baseURL"/>
  </div>
</template>

<script>
import {API_BASE_URL} from '/src/config.js';
import ArticleList from '/src/components/lists/ArticleList.vue';
document.title = "Articles"
export default {
    name: 'ArticlesList',
    data() {
    return {
      baseURL: API_BASE_URL+'articles/'
    }
  },
  components: {
      ArticleList
  },
  mounted() {
    const titleEl = document.querySelector('head title');
    titleEl.textContent = "All Articles";

    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', 'See our all articles at a single page');
  }
}
</script>

<style>

</style>
