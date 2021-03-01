<template>
  <div class="main-background container">
    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <h1 class="text-center main-heading">Sign In</h1>
      </div>
    </div>



    <form id="signin_form" @submit="submitForm">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter email">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" id="password" placeholder="Password">
      </div>

      <div id="alert" class="alert alert-primary" role="alert" style="display: none">
      </div>


      <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
      <br>
    </form>


  </div>
</template>

<script>
import {API_BASE_URL} from "@/config";
import axios from "axios";
import $ from 'jquery'

export default {
  name: "SignIn.vue",
  data() {
    return {
      baseURL : API_BASE_URL
    }
  },
  methods : {
    submitForm: function (e) {
      // Prevent Default Action of Submit Button
      e.preventDefault();
      const url = `${this.baseURL}simplecodingapi/login`;
      $('#alert').hide();

      //Get the FormData
      let formData = new FormData(document.getElementById("signin_form"));

      //Post the Form Data
      axios.post(url,formData)
          .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            alert("You have successfully logged in.")
            window.location.replace("/");
          })
          .catch(error => {
            if (error.response) {
              console.log(error);
              alert("Username or Password is Incorrect. Please try again");
            }
          });
    }
  }
}
</script>

<style scoped>

</style>