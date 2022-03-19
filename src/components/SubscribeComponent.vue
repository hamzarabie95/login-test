<template>
  <div>
    <v-container>
      <v-container class="logo-container"> </v-container>
      <v-col cols="12">
        <v-text-field
          v-model="email"
          label="Email"
          variant="outlined"
          hide-details="auto"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="confirmEmail"
          label="Confirm Email"
          variant="outlined"
          hide-details="auto"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="password"
          label="Password"
          variant="outlined"
          hide-details="auto"
          clearable
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="confirmPassword"
          label="Confirm Password"
          variant="outlined"
          hide-details="auto"
          clearable
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>
      </v-col>
      <v-col align="start" cols="12">
        {{ errorMessage }}
      </v-col>
      <v-col align="center" cols="12">
        <v-btn
          @click="createAccount()"
          rounded="lg"
          color="primary"
          min-width="270"
          size="x-large"
        >
          Register
        </v-btn>
      </v-col>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SubscribeComponent",
  data() {
    return {
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      errorMessage: "",
    };
  },
  methods: {
    async createAccount() {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const validEmail = pattern.test(this.email);
      if (!validEmail) {
        this.errorMessage = "email must be avalid email";
      } else if (this.email != this.confirmEmail) {
        this.errorMessage = "confirm email must equal email";
      } else if (this.password.length <= 6) {
        this.errorMessage = "password must be at least 6 characters ";
      } else if (this.password != this.confirmPassword) {
        this.errorMessage = "confirm password mus equal password";
      } else {
        this.errorMessage = "";
        await this.$store.dispatch("login/logIn", {
          email: this.email,
          password: this.password,
        });
        this.$router.push({ name: "news-letter" });
        // console.log(result);
        // console.log(this.$store.getters["login/getUser"]);
      }
    },
  },
});
</script>

<style scoped lang="scss">
.logo-container {
  background-color: rgb(65, 64, 66);
  background-image: url("@/assets/login/rhino_logo_white.6dc7fbe5.png");
  background-size: auto 180px;
  background-position: center;
  height: 200px;
}
</style>
