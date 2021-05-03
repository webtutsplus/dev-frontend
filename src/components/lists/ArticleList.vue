<template>
  <div v-for="article in articles" :key="article.id">
    <ArticleCard
      v-bind:id="article.id"
      v-bind:title="article.title"
      v-bind:description="article.description"
      v-bind:coverImage="article.main_image"
      v-bind:tags="article.tag_list"
      v-bind:slug="article.slug"
    />
  </div>

  <div v-if="articles.length == 0">
    Loadin...
  </div>
</template>

<script>
// import axios from "axios";
import ArticleCard from "/src/components/cards/ArticleCard.vue";
import { db } from "/src/firebase.js";

export default {
  name: "ArticleLists",
  data() {
    return {
      articles: [],
    };
  },
  components: {
    ArticleCard,
  },
  props: ["apiUrl"],
  // watch: {
  //   $route(to,from) {
  //       if (to !== from) {
  //         this.fetchArticleList();
  //       }
  //   }
  // },
  methods: {
    fetchArticleList: function() {
      console.log("fetching article");
      db.collection("articles")
        .get()
        .then((snap) => {
          if (!snap.empty) {
            console.log("Article Found");
            this.articles = snap.docs.map((doc) => doc.data());
          } else {
            console.log("No Data");
            // const url = `${this.apiUrl}`;
            // axios
            //   .get(url)
            //   .then((response) => {
            //     let data = response.data;
            //     data.forEach((article) => {
            //       db.collection("articles")
            //         .doc(article.slug)
            //         .set(article);
            //     });
            //     this.articles = data;
            //   })
            //   .catch((err) => {
            //     console.log(err.toString());
            //   });
          }
        })
        .catch((err) => {
          console.log(err.toString());
        });
    },
  },
  mounted() {
    this.fetchArticleList();
  },
};
</script>

<style scoped></style>
