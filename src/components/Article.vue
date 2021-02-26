
<template>
<!-- For displaying single article -->
  <div class="container">
    <div class="crayons-article__header__meta">
      <h1 class="fs-3xl s:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 medium" v-html="title"></h1>
    </div>

    <div class="crayons-article__main">
      <div v-html="content" class="crayons-article__body text-styles spec__body" data-article-id="1" id="article-body"></div>
    </div>

    <div id="disqus_thread"></div>
  </div>

<!--  For Displaying Comments-->

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
      const url = `${this.baseURL}articles/slugs/${this.$route.params.slug}`
      axios.get(url)
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
    },
    initializeDisqus : function () {
      /**
       *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
       *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

      var disqus_config = function () {
        this.page.url = "https://simplecoding.dev/articles";  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = this.$route.params.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };

      (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://https-www-simplecoding-dev.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();

      console.log('Initialized Comments for '+disqus_config.identifier)
    }
  },
  mounted() {
    this.fetchArticle();
    this.initializeDisqus();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
