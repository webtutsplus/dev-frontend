<template>
  <div v-for="article in articles" :key="article.id">
    <ArticleCard v-bind:id="article.id" v-bind:title="article.title" v-bind:description="article.description"
                 v-bind:coverImage="article.main_image" v-bind:tags="article.tag_list" v-bind:slug="article.slug"/>
  </div>

</template>

<script>
import axios from 'axios';
import ArticleCard from '/src/components/cards/ArticleCard.vue';


export default {
  name: "ArticleLists",
  data() {
    return {
      articles: null
    }
  },
  components: {
    ArticleCard
  },
  props: [
    'apiUrl'
  ],
  methods: {
    fetchArticleList: function () {
      axios.get(this.apiUrl)
          .then(data => this.articles = data.data)
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