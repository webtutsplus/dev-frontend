<template>
  <div class="main-background container">
    <ArticleList v-bind:api-url="baseURL"/>
  </div>
</template>

<script>
import {API_BASE_URL} from '/src/config.js';
import ArticleList from '/src/components/lists/ArticleList.vue'
document.title = "Articles"
export default {
  name: "TagArticlesView",
  // watch: {
  //   '$route.params.tag': {
  //     handler: function (tag) {
  //       this.baseURL = API_BASE_URL + '/tags/' + tag;
  //       this.reload();
  //     },
  //     deep: true,
  //     immediate: true
  //   }
  // },
  data() {
    return {
      baseURL: API_BASE_URL + '/tags/' + this.$route.params.tag,
    }
  },
  components: {
    ArticleList
  },
  mounted() {
    const titleEl = document.querySelector('head title');
    titleEl.textContent = this.$route.params.tag;
  }
}
</script>

<style scoped>

</style>
