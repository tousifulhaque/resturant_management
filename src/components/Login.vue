<template>
  <img class="logo" src="../assets/resturant.jpg" alt="Res" />
  <h1>Login</h1>
  <div class="logIn-box">
    <!-- <input type="text" v-model="name" placeholder="Enter Name" /> -->
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="logIn">Log In</button>
    <!-- <p><router-link to="/Login">Login</router-link></p> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.data.length >= 1) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
<style>
.logo {
  width: 100px;
}
.logIn-box input {
  width: 300px;
  height: 30px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  border: 1px solid skyblue;
}
.logIn-box button {
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  background-color: skyblue;
  cursor: pointer;
}
</style>
