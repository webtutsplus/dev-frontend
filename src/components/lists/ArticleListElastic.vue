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
      articles: null,
      per_page: null,
      page: null
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
      this.per_page = 5;
      this.page = 0;
      let url = this.apiUrl+'&per_page='+this.per_page+'&page='+this.page;
      axios.get(url)
          .then(data => this.articles = data.data.result)
          .catch(err => console.log(err));
    },
    scroll: function () {
      window.onscroll = () => {

        let bottomOfWindow = (document.documentElement.scrollTop + window.innerHeight) - document.documentElement.offsetHeight > -1;

        if (bottomOfWindow) {
          this.page+=1;
          let url = this.apiUrl+'&per_page='+this.per_page+'&page='+this.page;
          axios.get(url)
              .then(response => {
                response.data.result.forEach((item, index) => {
                  this.articles.push(response.data.result[index]);
                });
              });
        }
      };
    }
  },
  mounted() {
    this.fetchArticleList();
    this.scroll();
  }
}
</script>

<style scoped>

</style>