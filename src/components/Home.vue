<template>
    <div>
  <b-jumbotron>
    <template v-slot:header>Connexion Interface</template>
    <p>Below the formulary for sign-up or sign-in in our magnificent application</p>

    <hr class="my-4">
        <FormHandler></FormHandler>
  </b-jumbotron>
</div>
</template>

<script>
import FormHandler from "./FormHandler";

export default {
     components: {
    FormHandler
  },
    name: 'Home'
    
}
</script>