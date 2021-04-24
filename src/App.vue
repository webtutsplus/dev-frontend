<template>
  <!-- Display component here as per the url -->
  <Navbar></Navbar>
  <div>
    <router-view :key="$route.fullPath"></router-view>
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
export default {
  name: "App",
  components: { Footer, Navbar },
};
</script>

<style></style>
