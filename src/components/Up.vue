<template>
  <Header> </Header>

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
      let result = await axios.put(
        `http://localhost:3000/resturant/${this.$route.params.id}`,
        {
          name: this.resturant.name,
          location: this.resturant.location,
          contact: this.resturant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      `http://localhost:3000/resturant/${this.$route.params.id}`
    );
    this.resturant = result.data;
  },
};
</script>
<style>
form {
  margin-top: 50px;
}

input {
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
}
</style>
