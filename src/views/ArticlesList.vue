<template>
    <p>{{baseURL}}</p>
</template>

<script>
import axios from 'axios'
import {API_BASE_URL} from '/src/config.js'

export default {
    name: 'App',
    data() {
    return {
      baseURL: API_BASE_URL
    }
  },
  components: {
  },
  methods: {
    fetchWishlist : function() {
      axios.get(this.baseURL)
        .then(data => this.type = data.data)
        .catch(err => console.log(err));
    }
  }, 
  mounted() {
    // this.fetchWishlist();
  }
}
</script>

<style>

</style>