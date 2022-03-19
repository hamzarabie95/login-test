<template>
  <!-- <hello-world /> -->
  <login-component></login-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// Components
// import HelloWorld from "../components/HelloWorld.vue";
import LoginComponent from "../components/LoginComponent.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    // HelloWorld,
    LoginComponent,
  },
});
</script>
