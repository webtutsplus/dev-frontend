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
      axios.get(this.apiUrl+'&per_page='+this.per_page+'&page='+this.page)
          .then(data => this.articles = data.data.result)
          .catch(err => console.log(err));
    },
    scroll: function () {
      window.onscroll = () => {

        let bottomOfWindow = (document.documentElement.scrollTop + window.innerHeight) - document.documentElement.offsetHeight > -1;
        console.log(document.documentElement.scrollTop)
        console.log(document.documentElement.offsetHeight)
        console.log(window.innerHeight)
        if (bottomOfWindow) {
          this.page+=1;
          axios.get(this.apiUrl+'&per_page='+this.per_page+'&page='+this.page)
              .then(response => {
                for (let i = 0; i < response.data.result.length; i++)
                  this.articles.push(response.data.result[i]);
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