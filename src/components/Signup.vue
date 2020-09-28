<template>
  <div>
    <h3 v-if="log_mess == 'good'">You have been register, go sign-in now!</h3>
    <h3 v-else-if="log_mess == 'err'">Sorry this email  already exist</h3>
    <b-form>
      <b-form-group id="input-group-1" label="Name:" label-for="input-1" description>
        <b-form-input id="input-1" required v-model="form.name" placeholder="Enter your user name."></b-form-input>
      </b-form-group>

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
          type="password"
          v-model="form.password"
          required
          placeholder="Enter your secret password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success" @click="signup">Sign-up</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      log_mess: ""
    };
  },
  methods: {
    signup() {
      console.log(this.form);
      if (
        this.form.email == "" ||
        this.form.name == ""  ||
        this.form.password == ""
      ) {
        console.log("nvm");
      } else {
        this.axios
          .post("http://localhost:3000/sign_up", this.form)
          .then((res) => {
            this.form.email = "";
            this.form.name = "";
            this.form.password = "";
            this.log_mess = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }
};
</script>