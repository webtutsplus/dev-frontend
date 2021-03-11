<template>
  <div v-for="article in articles" :key="article.id">
    <ArticleCardElastic v-bind:id="article.id" v-bind:title="article.title"
                 v-bind:coverImage="article.main_image" v-bind:tags="article.tag_list" v-bind:slug="article.path"/>
  </div>

</template>

<script>
import axios from 'axios';
import ArticleCardElastic from "@/components/cards/ArticleCardElastic";


export default {
  name: "ArticleListElastic",
  data() {
    return {
      articles: null
    }
  },
  components: {
    ArticleCardElastic
  },
  props: [
    'apiUrl'
  ],
  methods: {
    fetchArticleList: function () {
      axios.get(this.apiUrl)
          .then(data => this.articles = data.data.result)
          .catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchArticleList();
  }
}
</script>

<style scoped>

</style>