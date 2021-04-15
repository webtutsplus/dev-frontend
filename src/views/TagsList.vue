<template>
    <div v-for="item in tags" :key="item.id">
      <TagCard v-bind:tag="item.name"/>
  </div>
</template>

<script>
import axios from 'axios';
import {API_BASE_URL} from '/src/config.js';
import TagCard from '/src/components/cards/TagCard.vue';
import {db} from "@/firebase";
document.title = "Tags"
export default {
  name: 'TagsList',
  data() {
    return {
      tags : [],
      articles: [],
      baseURL: API_BASE_URL
    }
  },
  components: {
      TagCard
  },
  methods: {
    fetchTagList: function () {
      console.log("fetching tags")
      db.collection("tags")
          .get()
          .then((snap) => {
            if (!snap.empty) {
              console.log("Tag Found")
              this.tags = snap.docs.map(doc => {
                return {
                  id: doc.data().id,
                  name: doc.id
                }
              })
            }
            else {
              console.log("No Data. Fetching From DB")
              const url = `${this.baseURL}tags/`;
              axios.get(url)
                  .then(response => {
                    let data = response.data;
                    data.forEach((tag)=> {
                      db.collection("tags")
                          .doc(tag.name)
                          .set({
                            id: tag.id
                          })
                    })
                    this.tags = data;
                  }).catch(err => {
                console.log(err.toString())
              })
            }
          }).catch(err => {
        console.log(err.toString())
      })
    }
  },
  mounted() {
    this.fetchTagList();
      const titleEl = document.querySelector('head title');
      titleEl.textContent = "All Tags";

    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', 'See all our tags');
  }
}
</script>

<style>

</style>
