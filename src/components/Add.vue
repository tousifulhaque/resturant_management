<template>
  <Header> </Header>
  <h1>Hello, User welcome on Add Resturant page</h1>
  <form class="add">
    <input
      type="text"
      name="name"
      placeholder="Enter Name"
      v-model="resturant.name"
    />
    <input
      type="text"
      name="location"
      placeholder="Enter Location"
      v-model="resturant.location"
    />
    <input
      type="text"
      name="contact"
      placeholder="Enter valid Contact"
      v-model="resturant.contact"
    />
    <button name="Submit" type="button" @click="onSubmit">Submit</button>
  </form>
</template>
<script>
import axios from "axios";
import Header from "./Header.vue";
export default {
  name: "Add",
  components: {
    Header,
  },
  data() {
    return {
      resturant: {
        name: "",
        location: "",
        contact: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      let result = await axios.post("http://localhost:3000/resturant", {
        name: this.resturant.name,
        location: this.resturant.location,
        contact: this.resturant.contact,
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>
<style>
input {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>
