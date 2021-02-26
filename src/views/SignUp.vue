<template>
  <div class="main-background container">
    <!--Title Row-->
    <div class="row">
      <div class="col-12 pb-5 pt-5">
        <h1 class="text-center main-heading">Sign Up</h1>
      </div>
    </div>



    <form id="signup_form" @submit="submitForm">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" name="email" id="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" name="username" id="username" placeholder="Enter Username">
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" name="name" id="name" placeholder="Enter Name">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" id="password" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="password_confirmation">Confirm Password</label>
        <input type="password" class="form-control" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password">
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
  name: "SignUp",
  data() {
    return {
      baseURL : API_BASE_URL
    }
  },
  methods:{
    submitForm: function (e) {
      // Prevent Default Action of Submit Button
      e.preventDefault();
      const url = `${this.baseURL}simplecodingapi/signup`;
      $('#alert').hide();

      //Get the FormData
      let formData = new FormData(document.getElementById("signup_form"));

      //Post the Form Data
      axios.post(url,formData)
      .then(function () {
        alert("You have successfully signed up.")
        window.location.replace("/login");
      })
      .catch(error => {
        if (error.response) {
          alert("Errors in the form. Please fix the errors");
          let text = "";
          error.response.data.errors.forEach(function (item) {
            text+="<li>"+item+"</li>";
          })
          $('#alert').html(text);
          $('#alert').show();
        }
      });
    }
  }
}
</script>

<style scoped>

</style>