<template>
  <div>
    <v-card class="mx-auto" max-width="344" variant="outlined">
      <v-card-header>
        <div>
          <div class="text-overline mb-1">OVERLINE</div>
          <div class="text-h6 mb-1">Headline</div>
          <div class="text-caption">
            Greyhound divisely hello coldly fonwderfully
          </div>
        </div>
      </v-card-header>

      <v-card-actions>
        <v-btn @click="sendMail()" variant="outlined" rounded text>
          Subscribe
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import emailjs from "emailjs-com";

export default defineComponent({
  name: "NewsLetter",
  components: {},
  methods: {
    sendMail() {
      emailjs.init("nLaxzQlzlcgAM2f_D"); //please encrypted user id for malicious attacks
      var templateParams = {
        to_name: "Rihno Soft",
        from_name: "Hamza",
        message_html: "this is a subscribe notice",
      };
      emailjs.send("service_im6sd0q", "template_rvvy1q8", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    },
  },
});
</script>
