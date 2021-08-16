<template>
  <div>
    <router-view />
  </div>
</template>
<script>
// import SignUp from "./components/SignUp.vue";
export default {
  name: "App",
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style>
#app {
  font-family: "Lucida Sans", "Lucida Grande", Geneva, Verdana, sans-serif;
  text-align: center;
  margin-top: 0px;
  padding: 0px;
}
body {
  padding: 0px;
  margin: 0px;
}
.navBar {
  background-color: rgb(117, 119, 119);
  padding: 10px;
  margin-top: 0px;
  overflow: hidden;
}
.navBar a {
  padding: 10px;
  float: right;
  color: #000;
  text-decoration: none;
}
.navBar a:hover {
  background-color: seashell;
}
.signIn-box,
.add input {
  width: 300px;
  height: 30px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;
  border: 1px solid skyblue;
}
.signIn-box,
.add button {
  width: 300px;
  height: 30px;
  margin-bottom: 15px;
  background-color: skyblue;
  cursor: pointer;
}
</style>
