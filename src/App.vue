<template>
  <div v-for="weatherData in type" :key="weatherData.id">
      <HelloWorld v-bind:msg="weatherData.processed_html"/>
  </div>
  
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      type : null,
      baseURL : "http://104.197.181.100:3000/all"
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    fetchWishlist : function() {
      axios.get(this.baseURL)
        .then(data => this.type = data.data)
        .catch(err => console.log(err));
    }
  }, 
  mounted() {
    this.fetchWishlist();
  }
}
</script>

<style>

</style>
