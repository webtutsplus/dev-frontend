<template>
  <!--  Main Container-->
  <div class="main-background">

    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <h1 class="text-center main-heading">Simple Coding</h1>
        <h4 class="text-center main-subheading">Learn Algorithms, Web and Mobile Devlopment</h4>
      </div>
    </div>
    <!--Title Row Ends-->

    <!-- Learn FrontEnd Div Starts -->
    <div class="row card-odd-background p-5">
      <!-- Text Div Starts -->
      <div class="col-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4 class="card-heading"><a href="/frontend">Learn Frontend</a></h4>
          <p class="card-content pl-md-4 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque commodi deserunt distinctio
            doloremque doloribus eaque et hic maiores molestias nihil, quam quis saepe! Doloremque fuga quisquam repellat
            vitae voluptatum?</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <i class="bi bi-credit-card-2-front" style="font-size: 9rem"></i>
      </div>
      <!-- Image Div Ends -->
    </div>
    <!-- Learn FrontEnd Div Ends -->

  <br>

    <!-- Learn BackEnd Div Starts -->
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <i class="bi bi-credit-card-2-front" style="font-size: 9rem"></i>
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-6 text-center">
        <div class="pt-2 pt-md-4 pr-md-4">
          <h4 class="card-heading"><a href="/backend">Learn Backend</a></h4>
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
          <h4 class="card-heading"><a href="/algorithms">Learn Algorithms</a></h4>
          <p class="card-content pl-md-4 text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque commodi deserunt distinctio
            doloremque doloribus eaque et hic maiores molestias nihil, quam quis saepe! Doloremque fuga quisquam repellat
            vitae voluptatum?</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <i class="bi bi-credit-card-2-front" style="font-size: 9rem"></i>
      </div>
      <!-- Image Div Ends -->
    </div>
    <!-- Learn Algorithms Div Ends -->

    <br>

    <!-- Learn DevOps Div Starts -->
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-6 text-center">
        <i class="bi bi-credit-card-2-front" style="font-size: 9rem"></i>
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-6 text-center">
        <div class="pt-2 pt-md-4 pr-md-4">
          <h4 class="card-heading"><a href="/devops">Learn Devops</a></h4>
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
export default {
name: "HomePageView"
}
</script>

<style>
.main-background, body {
  background-color: #1b3c65
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

a {
  text-decoration: none;
}


</style>