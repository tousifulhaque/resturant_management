<template>
  <Header> </Header>
  <h1>Hello, {{ name }} welcome on our home page</h1>
  <table border="1">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Location</th>
      <th>Contact</th>
      <th>Actions</th>
    </tr>
    <tr v-for="r in resturant" :key="r.id">
      <td>{{ r.id }}</td>
      <td>{{ r.name }}</td>
      <td>{{ r.location }}</td>
      <td>{{ r.contact }}</td>
      <td>
        <router-link :to="`/Up/${r.id}`">Update</router-link>
        <button v-on:click="deleteResturant(r.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      resturant: [],
    };
  },
  methods: {
    async deleteResturant(id) {
      let result = await axios.delete(`http://localhost:3000/resturant/${id}`);
      if (result.status === 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user)[0].name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/resturant");
      this.resturant = result.data;
    },
  },
  async mounted() {
    this.loadData();
  },
};
</script>
<style>
table {
  margin: 0 auto;
  border-collapse: collapse;
}

td {
  padding: 10px;
  test-align: center;
}
th {
  padding: 10px;
  test-align: center;
}
</style>
