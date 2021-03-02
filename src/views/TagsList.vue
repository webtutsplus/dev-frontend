<template>
    <div v-for="item in tags" :key="item.id">
      <TagCard v-bind:tag="item.name"/>
  </div>
</template>

<script>
import axios from 'axios';
import {API_BASE_URL} from '/src/config.js';
import TagCard from '/src/components/cards/TagCard.vue';
document.title = "Tags"
export default {
  name: 'TagsList',
  data() {
    return {
      tags : null,
      baseURL: API_BASE_URL
    }
  },
  components: {
      TagCard
  },
  methods: {
    fetchTaglist : function() {
      const url = `${this.baseURL}tags/`;
      axios.get(url)
        .then(data => this.tags = data.data)
        .catch(err => console.log(err));
    }
  }, 
  mounted() {
    this.fetchTaglist();
  }
}
</script>

<style>

</style>
