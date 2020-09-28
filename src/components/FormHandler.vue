<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Sign up" active>
          <Signup></Signup>
        </b-tab>
        <b-tab title="Sign in">
          <Signin></Signin>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Signin from "./Signin.vue";
import Signup from "./Signup.vue";

export default {
  name: "FormHandler",
  components: {
    Signin,
    Signup,
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
