<template>
  <!-- Display component here as per the url -->
  <div>
    <router-view :key="$route.fullPath"></router-view>
  </div>  
  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

</style>
