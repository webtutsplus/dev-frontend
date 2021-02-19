
<template>
<!-- For displaying single article -->
  <div class="container">
    <div class="crayons-article__header__meta">
      <h1 class="fs-3xl s:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 medium" v-html="title"></h1>
    </div>

    <div class="crayons-article__main">
      <div v-html="content" class="crayons-article__body text-styles spec__body" data-article-id="1" id="article-body"></div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import {API_BASE_URL} from '/src/config.js';
import postscribe from 'postscribe';

export default {
  name: 'Article',
  data() {
    return {
      content : null,
      title : null,
      baseURL: API_BASE_URL
    }
  },
  methods: {
    fetchArticle : function() {
      axios.get(this.baseURL+'articles/slugs/'+this.$route.params.slug)
          .then(response => {
            this.content = response.data.processed_html;
            this.title = response.data.title;
          }).then(()=>{
            let arr = document.getElementsByClassName('ltag_gist-liquid-tag')
            for (let i = 0; i < arr.length; i++){
              postscribe(arr[i], arr[i].innerHTML, {
                done: function() {
                  console.info('Dblclick script has been delivered.');
                }
              });
            }
          }).catch(err => console.log(err));
    }
  },
  mounted() {
    this.fetchArticle();
    console.log(this.$route.params.id)
    console.log(this.content)
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
