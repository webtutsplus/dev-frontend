<template>
  <!--  Main Container-->
  <div class="main-background container-fluid">

    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <img src="/assets/homepage.gif" class="img-fluid">
      </div>
    </div>
    <!--Title Row Ends-->

    <!-- Learn FrontEnd Div Starts -->
    <div class="row card-odd-background p-5">
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4>
            <router-link to="/frontend" class="card-heading">Learn Frontend</router-link>
          </h4>
          <p class="card-content pl-md-4 text-left">Do you want to build websites with an amazing user interface? Do you
            want to have good projects on your resume? We will deep dive into the world of Frontend Development. We will
            teach you HTML, CSS, JavaScript and Vue.js. We will walk you through complete projects.</p>
        </div>
      </div>
      <div class="col-md-6 text-center">
        <img src="/assets/front-end.png" style="width: 80%" class="img-fluid">
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->

      <!-- Image Div Ends -->
    </div>
    <!-- Learn FrontEnd Div Ends -->

    <br>

    <!-- Learn BackEnd Div Starts -->
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-md-6 text-center">
        <img src="/assets/back-end.png" style="width: 80%" class="img-fluid">
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pr-md-4">
          <h4>
            <router-link class="card-heading" to="/backend">Learn Backend</router-link>
          </h4>
          <p class="card-content pr-md-4 text-left">Ever wondered how Facebook works? With a single click, we get all
            our required information. Here, we will teach you Backend Development with Java Springboot and develop
            complete projects</p>
        </div>
      </div>
      <!-- Text Div Ends -->
    </div>
    <!-- Learn BackEnd Div Ends -->

    <br>

    <!-- Learn Algorithms Div Starts -->
    <div class="row card-odd-background p-5">
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4>
            <router-link class="card-heading" to="/algorithms">Learn Algorithms</router-link>
          </h4>
          <p class="card-content pl-md-4 text-left">Algorithms are the solution to all Interview problems. If you want
            to improve your coding skills and crack your dream job, this is the place to go. We will guide you through
            the process of solving problems in a technical interview. We will solve Leetcode problems live, give you a
            platform to run your code and many more.</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->
      <div class="col-md-6 text-center">
        <img src="/assets/algorithm.gif" style="width: 80%" class="img-fluid">
      </div>
      <!-- Image Div Ends -->
    </div>
    <!-- Learn Algorithms Div Ends -->

    <br>

    <!-- Learn DevOps Div Starts -->
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-md-6 text-center">
        <img src="/assets/devops.gif" style="width: 80%" class="img-fluid">
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pr-md-4">
          <h4>
            <router-link class="card-heading" to="/devops">Learn Devops</router-link>
          </h4>
          <p class="card-content pr-md-4 text-left">Wondered how to make development and deployment faster? Learn DevOps
            from us to build, test and release your software faster. We will go through Google Cloud Platform,
            Kubernetes, Docker etc.
          </p>
        </div>
      </div>
      <!-- Text Div Ends -->
    </div>
    <!-- Learn DevOps Div Ends -->

    <br>
    <div class="row card-odd-background p-5">
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4>
            <router-link to="/chrome-extension" class="card-heading">Learn Chrome Extension</router-link>
          </h4>
          <p class="card-content pl-md-4 text-left">Do you want to build websites with an amazing user interface? Do you
            want to have good projects on your resume? We will deep dive into the world of Frontend Development. We will
            teach you HTML, CSS, JavaScript and Vue.js. We will walk you through complete projects.</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->
      <div class="col-md-6 text-center">
      <img src="/assets/front-end.png" style="width: 80%" class="img-fluid" alt="chrome-extension">
      </div>
      <!-- Image Div Ends -->
    </div>

    <br>
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-md-6 text-center">
      <img src="/assets/front-end.png" style="width: 80%" class="img-fluid" alt="open-source">
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4>
            <router-link to="/opensource" class="card-heading">Learn OpenSource</router-link>
          </h4>
          <p class="card-content pl-md-4 text-left">Do you want to build websites with an amazing user interface? Do you
            want to have good projects on your resume? We will deep dive into the world of Frontend Development. We will
            teach you HTML, CSS, JavaScript and Vue.js. We will walk you through complete projects.</p>
        </div>
      </div>
      <!-- Text Div Ends -->

    </div>
    <br>

    <div class="row card-odd-background p-5">
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4>
            <router-link to="/explore-courses" class="card-heading">Explore Courses</router-link>
          </h4>
          <p class="card-content pl-md-4 text-left">Do you want to build websites with an amazing user interface? Do you
            want to have good projects on your resume? We will deep dive into the world of Frontend Development. We will
            teach you HTML, CSS, JavaScript and Vue.js. We will walk you through complete projects.</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <!-- Image Div Starts -->
      <div class="col-md-6 text-center">
      <img src="/assets/front-end.png" style="width: 80%" class="img-fluid" alt="courses">
      </div>
      <!-- Image Div Ends -->
    </div>
    <br>
    <div class="row card-even-background p-5">
      <!-- Image Div Starts -->
      <div class="col-md-6 text-center">
      <img src="/assets/android.png" style="width: 80%" class="img-fluid" alt="Android">
      </div>
      <!-- Image Div Ends -->
      <!-- Text Div Starts -->
      <div class="col-md-6 text-center">
        <div class="pt-2 pt-md-4 pl-md-4">
          <h4>
            <router-link to="/android" class="card-heading">Learn Android</router-link>
          </h4>
          <p class="card-content pl-md-4 text-left">Do you want to build websites with an amazing user interface? Do you
            want to have good projects on your resume? We will deep dive into the world of Frontend Development. We will
            teach you HTML, CSS, JavaScript and Vue.js. We will walk you through complete projects.</p>
        </div>
      </div>
      <!-- Text Div Ends -->
      <br>
    </div>


  </div>
  <!--  Main Container Ends-->
</template>

<script>
// import image from './ass'
export default {
  title: "Home",
  name: "HomePageView",
  mounted() {
    const titleEl = document.querySelector('head title');
    titleEl.textContent = "Home";

    const descEl = document.querySelector('head meta[name="description"]');
    descEl.setAttribute('content', 'Our Homepage');
  }
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
