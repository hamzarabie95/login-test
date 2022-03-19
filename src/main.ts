import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzF7EszOJHZtQI7Wiixk2npHt1ifncYlk",
  authDomain: "login-test-b2e55.firebaseapp.com",
  databaseURL:
    "https://login-test-b2e55-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "login-test-b2e55",
  storageBucket: "login-test-b2e55.appspot.com",
  messagingSenderId: "876236333367",
  appId: "1:876236333367:web:70551be948f97c9db77ab2",
};

initializeApp(firebaseConfig);
loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
