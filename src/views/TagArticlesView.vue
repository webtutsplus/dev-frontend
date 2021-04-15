<template>
  <div class="main-background container">
    <ArticleListbyTag v-bind:api-url="baseURL" v-bind:tag="$route.params.tag"/>
  </div>
</template>

<script>
import {API_BASE_URL} from '/src/config.js';
// import ArticleList from '/src/components/lists/ArticleList.vue'
import ArticleListbyTag from "@/components/lists/ArticleListbyTag";
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
    ArticleListbyTag
  },
  mounted() {
    const titleEl = document.querySelector('head title');
    titleEl.textContent = this.$route.params.tag;

    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', `See all articles related to ${this.$route.params.tag}`);
  }
}
</script>

<style scoped>

</style>
