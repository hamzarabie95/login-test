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
          type="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          variant="outlined"
          hide-details="auto"
          clearable
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showPassword = !showPassword"
        ></v-text-field>
      </v-col>
      <v-col align="start" cols="12">
        {{ errorMessage }}
      </v-col>
      <v-col align="start" cols="12">
        <router-link to="register-user">
          dont have an account Register now
        </router-link>
      </v-col>
      <v-col align="center" cols="12">
        <v-btn
          @click="logIn()"
          rounded="lg"
          color="primary"
          min-width="270"
          size="x-large"
        >
          Login
        </v-btn>
      </v-col>
      <v-col align="center" cols="12">
        <div class="icon-container">
          <v-btn icon="mdi-google" color="error" id="signinBtn"></v-btn>
        </div>
      </v-col>
    </v-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginComponent",
  data() {
    return {
      clientId: "1066642189476-044miv5cjoj2mpg7cq3voigm5n0dubgc",
      email: "",
      password: "",
      showPassword: false,
      errorMessage: "",
    };
  },
  mounted() {
    if (!window.gapi) {
      throw new Error(
        '"https://apis.google.com/js/api:client.js" needs to be included as a <script>.'
      );
    }
    if (!this.clientId) {
      throw new Error("Client Id must be specified.");
    }
    window.gapi.load("auth2", () => {
      const auth2 = window.gapi.auth2.init({ client_id: this.clientId });
      auth2.attachClickHandler(
        "signinBtn",
        {},
        (googleUser) => {
          console.log(googleUser.getBasicProfile());
          this.$router.push("/news-letter");
          this.$emit("success", googleUser);
        },
        (error) => {
          this.$emit("error", error);
          this.$emit("failure", error); // an alias
        }
      );
    });
  },
  methods: {
    async logIn() {
      if (this.email == "") {
        this.errorMessage = "please enter an email";
      } else if (this.password == "") {
        this.errorMessage = "please enter password";
      } else {
        const result = await this.$store.dispatch("login/logIn", {
          email: this.email,
          password: this.password,
        });
        if (result == "Success") {
          this.$router.push("/news-letter");
        } else {
          this.errorMessage = "inccorect email or password";
        }
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
.icon-container {
  width: 250px;
  display: flex;
}
</style>
