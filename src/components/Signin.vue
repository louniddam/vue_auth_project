<template>
  <div>
    <b-form>
      <b-form-group id="input-group-2" label="Email:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter your email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.password"
          type="password"
          required
          placeholder="Enter your secret password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success" @click="signin"
        >Sign-in</b-button
      >
    </b-form>
  </div>
</template>

<script>

export default {
  name: "Signin",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signin() {
      if (this.form.email == "" || this.form.password == "") {
        console.log("Please fill the input");
      } else {
        this.axios
          .post("http://localhost:3000/signin", this.form)
          .then((res) => {
            this.form.email = "";
            this.form.password = "";
            this.$router.push("/Dashboard");
            this.$store.dispatch('addToken', res.data) //payload
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>