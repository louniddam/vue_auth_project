<template>
  <div>
    <h1>This is Dashboard page</h1>
    <hr class="my-4" />
    <p>Welcome to your conected user!</p>
    <hr class="my-4" />
      <b-button type="submit" variant="success" @click="logout">Log-out</b-button>
  </div>
</template>

<script>
export default {
    name: 'Dashboard',
    methods: {
      logout(){
            this.$router.push("/");
            this.$store.state.tokens = null;
      }
    }
};
</script>