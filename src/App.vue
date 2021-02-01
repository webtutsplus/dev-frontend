<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld v-bind:msg="type"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      type : null,
      baseURL : "http://35.232.166.121:3000/all"
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
