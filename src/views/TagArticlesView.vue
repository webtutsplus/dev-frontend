<template>
  <div class="main-background container">
    <ArticleList v-bind:api-url="baseURL"/>
  </div>
</template>

<script>
import {API_BASE_URL} from '/src/config.js';
import ArticleList from '/src/components/lists/ArticleList.vue'

export default {
  name: "TagArticlesView",
  data() {
    return {
      baseURL :  API_BASE_URL+'/tags/'+this.$route.params.tag,
    }
  },
  components : {
    ArticleList
  }
}
</script>

<style scoped>

</style>