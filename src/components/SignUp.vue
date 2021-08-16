<template>
  <img class="logo" src="../assets/resturant.jpg" alt="Res" />
  <h1>Signup</h1>
  <div class="signIn-box">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button @click="signUp">Sign Up</button>
    <p><router-link to="/Login">Login</router-link></p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      let result = await axios.post(" http://localhost:3000/users", {
        email: this.email,
        password: this.password,
        name: this.name,
      });
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      console.log(user);
      this.$router.push({ name: "Home" });
    }
  },
};
</script>

<style>
.logo {
  width: 100px;
}
.signIn-box input {
  width: 300px;
  height: 30px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  border: 1px solid skyblue;
}
.signIn-box button {
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  background-color: skyblue;
  cursor: pointer;
}
</style>
