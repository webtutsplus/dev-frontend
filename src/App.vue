<template>
  <!-- Display component here as per the url -->
  <div>
    <router-view></router-view>
  </div>





  <!-- <div v-for="weatherData in type" :key="weatherData.id">
      <HelloWorld v-bind:msg="weatherData.processed_html"/>
  </div> -->
  
  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
