<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/"><img id="logo" src="/assets/icon.png" class="img-fluid" width="70%"/></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="'/articles'">Articles</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" :to="'/tags'">Tags</router-link>
        </li>

        <li class="nav-item" v-if="!token">
          <router-link class="nav-link"  :to="'/signin'">Sign In</router-link>
        </li>

        <li class="nav-item" v-if="!token">
          <router-link class="nav-link" :to="'/signup'">Sign Up</router-link>
        </li>

        <li class="nav-item" v-else>
          <a class="nav-link" href="#" @click="signOut">Sign Out</a>
        </li>


      </ul>
    </div>
  </nav>
  <!-- Navbar Ends -->

</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      token : null
    }
  },
  methods: {
    signOut() {
      localStorage.removeItem('token');
      this.token = null;
    }
  },
  mounted() {
    this.token = localStorage.getItem('token');
  }
}
</script>

<style scoped>
  #logo {
    width: 70%;
  }
</style>