<template>
  <!-- For displaying single article -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-9">
        <div class="crayons-article__header__meta">
          <h1 class="fs-3xl s:fs-4xl l:fs-5xl fw-bold s:fw-heavy lh-tight mb-4 medium" v-html="title"></h1>
        </div>
        <div class="crayons-article__header__meta">
        <span v-for="tag in tags" :key="tag">
          #{{ tag + ' ' }}
        </span>
        </div>
        <div class="crayons-article__main">
          <div v-html="content" class="crayons-article__body text-styles spec__body" data-article-id="1"
               id="article-body"></div>
        </div>
      </div>
      <div class="col-2">
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=21&l=ur1&category=software&banner=1Z36BNH72MSXQVSEHZR2&f=ifr&linkID=633cbfa02e6343e3c95da32e2330b3dc&t=simplecoding-20&tracking_id=simplecoding-20" width="125" height="125" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=electronics&banner=1RJ5QAT5B55ECPXSXB82&f=ifr&linkID=1e2cf56ed283082297dee33abbcc27f8&t=simplecoding-20&tracking_id=simplecoding-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=14&l=ur1&category=primevideo&banner=1XBD06H7J758M69D85G2&f=ifr&linkID=7d163fa45c10985325c80ac8560645c8&t=simplecoding-20&tracking_id=simplecoding-20" width="160" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=clothingandshoes&banner=0KGG5528RQ692034NDG2&f=ifr&linkID=331873d2cd060b78510d3d6c19d9d3d5&t=simplecoding-20&tracking_id=simplecoding-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=11&l=ez&f=ifr&linkID=ef0f7d1b475266c857f1cbf3af5ca1d0&t=simplecoding-20&tracking_id=simplecoding-20" width="120" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=12&l=ur1&category=audibleplus&banner=0MG2XKQ7PYPP84NBNFR2&f=ifr&linkID=d8c2c54c7a42376126e41ba753a2fe66&t=simplecoding-20&tracking_id=simplecoding-20" width="300" height="250" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
        <iframe src="//rcm-na.amazon-adsystem.com/e/cm?o=1&p=49&l=ur1&category=amazonfashion&banner=0Y5RTMXKY62H4FKGBA02&f=ifr&linkID=44fdd0b9159fde23b056ccaa5ee8d7ff&t=simplecoding-20&tracking_id=simplecoding-20" width="300" height="600" scrolling="no" border="0" marginwidth="0" style="border:none;" frameborder="0"></iframe>
      </div>
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
      content: null,
      title: null,
      tags: [],
      baseURL: API_BASE_URL
    }
  },
  methods: {
    fetchArticle: function () {
      const url = `${this.baseURL}articles/slugs/${this.$route.params.slug}`
      axios.get(url)
          .then(response => {
            this.content = response.data.processed_html;
            this.title = response.data.title;
            this.tags = response.data.tag_list;
          }).then(() => {
        let arr = document.getElementsByClassName('ltag_gist-liquid-tag')
        document.title = this.title
        for (let i = 0; i < arr.length; i++) {
          postscribe(arr[i], arr[i].innerHTML, {
            done: function () {
              console.info('Dblclick script has been delivered.');
            }
          });
        }
      }).catch(err => console.log(err));
    },
    initializeDisqus: function () {
      /**
       *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
       *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */

      var disqus_config = function () {
        this.page.url = "https://simplecoding.dev/articles";  // Replace PAGE_URL with your page's canonical URL variable
        this.page.identifier = this.$route.params.slug; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      };

      (function () { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://https-www-simplecoding-dev.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
      })();

      console.log('Initialized Comments for ' + disqus_config.identifier)
    }
  },
  mounted() {
    this.fetchArticle();
    this.initializeDisqus();
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
