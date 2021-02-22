<template>
  <!--  Main Container-->
  <div class="main-background container-fluid">

    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <img src="/assets/homepage.png" class="img-fluid">
      </div>
    </div>
    <!--Title Row Ends-->

    <!-- Learn FrontEnd Div Starts -->
    <div class="row card-odd-background p-5">
      <!-- Text Div Starts -->
      <div class="col-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4> <router-link to="/frontend" class="card-heading">Learn Frontend</router-link></h4>
          <p class="card-content pl-md-4 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque commodi deserunt distinctio
            doloremque doloribus eaque et hic maiores molestias nihil, quam quis saepe! Doloremque fuga quisquam repellat
            vitae voluptatum?</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <img src="/assets/front-end.png" style="width: 80%" class="img-fluid">
      </div>
      <!-- Image Div Ends -->
    </div>
    <!-- Learn FrontEnd Div Ends -->

  <br>

    <!-- Learn BackEnd Div Starts -->
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <img src="/assets/back-end.png" style="width: 80%" class="img-fluid">
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-6 text-center">
        <div class="pt-2 pt-md-4 pr-md-4">
          <h4><router-link class="card-heading" to="/backend">Learn Backend</router-link></h4>
          <p class="card-content pr-md-4 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque commodi deserunt distinctio
            doloremque doloribus eaque et hic maiores molestias nihil, quam quis saepe! Doloremque fuga quisquam repellat
            vitae voluptatum?</p>
        </div>
      </div>
      <!-- Text Div Ends -->
    </div>
    <!-- Learn BackEnd Div Ends -->

    <br>

    <!-- Learn Algorithms Div Starts -->
    <div class="row card-odd-background p-5">
      <!-- Text Div Starts -->
      <div class="col-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4><router-link class="card-heading" to="/algorithms">Learn Algorithms</router-link></h4>
          <p class="card-content pl-md-4 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque commodi deserunt distinctio
            doloremque doloribus eaque et hic maiores molestias nihil, quam quis saepe! Doloremque fuga quisquam repellat
            vitae voluptatum?</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <img src="/assets/algorithm.gif" style="width: 80%" class="img-fluid">
      </div>
      <!-- Image Div Ends -->
    </div>
    <!-- Learn Algorithms Div Ends -->

    <br>

    <!-- Learn DevOps Div Starts -->
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <img src="/assets/devops.gif" style="width: 80%" class="img-fluid">
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-6 text-center">
        <div class="pt-2 pt-md-4 pr-md-4">
          <h4><router-link class="card-heading" to="/devops">Learn Devops</router-link></h4>
          <p class="card-content pr-md-4 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque commodi deserunt distinctio
            doloremque doloribus eaque et hic maiores molestias nihil, quam quis saepe! Doloremque fuga quisquam repellat
            vitae voluptatum?</p>
        </div>
      </div>
      <!-- Text Div Ends -->
    </div>
    <!-- Learn DevOps Div Ends -->


  </div>
  <!--  Main Container Ends-->
</template>

<script>

// import image from './ass'
export default {
name: "HomePageView"
}
</script>

<style>
.main-background, body {
  background-color: #fff
}

.main-heading {
  color: #7acdf1
}

.main-subheading {
  color: #ffffff;
}

.card-odd-background {
  background-color: #7acdf1
}

.card-even-background {
  background-color: #bcc4d1
}

.card-heading {
  color: #1b3c65
}

.card-content {
  color: #ffffff;
}


</style>
