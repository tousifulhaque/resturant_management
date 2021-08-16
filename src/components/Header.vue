<template>
  <div class="navBar">
    <router-link to="/"> Home </router-link>
    <router-link to="/add"> Add Resturant </router-link>
    <a href="#" @click="logOut"> Log out</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
