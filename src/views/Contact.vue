<template>
  <div
    id="contact"
    class="contact flex flex-col justify-start items-center h-screen"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: $props.intersectionOptions,
    }"
  >
    <h1 class="text-5xl text-amber-100 font-bold mt-24">Contact</h1>
    <div
      class="
        text-amber-100
        flex flex-col
        md:flex-row
        justify-center
        items-center
      "
    >
      <div class="flex flex-col justify-start items-center lg:h-full md:w-5/6">
        <h3 class="text-center text-2xl lg:text-2xl font-medium mt-10 lg:mt-24">
          Let's build something impactful together.
        </h3>
        <div
          class="
            flex flex-row flex-wrap
            md:flex-col
            justify-center
            items-center
            text-xl
            mt-14
          "
        >
          <a
            :href="contacts.resume"
            target="_blank"
            class="mx-3 flex flex-row justify-center items-center md:mb-3"
          >
            <i class="bx bxs-file-pdf text-3xl"></i>
            Résumé
          </a>
          <a
            :href="contacts.github"
            target="_blank"
            class="mx-3 flex flex-row justify-center items-center md:mb-3"
          >
            <i class="bx bxl-github text-3xl"></i>
            GitHub
          </a>
          <a
            :href="contacts.linkedin"
            target="_blank"
            class="mx-3 flex flex-row justify-center items-center md:mb-3"
          >
            <i class="bx bxl-linkedin-square text-3xl"></i>
            LinkedIn
          </a>
          <a
            :href="contacts.mail"
            class="mx-3mx-3 flex flex-row justify-center items-center md:mb-3"
          >
            <i class="bx bx-mail-send text-3xl"></i>
            Email
          </a>
          <a
            :href="contacts.phone"
            class="mx-3 flex flex-row justify-center items-center md:mb-3"
          >
            <i class="bx bx-phone text-3xl"></i>
            Phone
          </a>
        </div>
      </div>
      <CollabIllustration
        class="mb-10 mt-16 w-5/6 md:w-full lg:m2-10 lg:ml-10"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CollabIllustration from "@/assets/CollabIllustration.vue";
import contacts from "@/assets/contacts.json";

export default Vue.extend({
  name: "Contact",
  components: {
    CollabIllustration,
  },
  props: ["intersectionOptions"],
  data: () => ({
    contacts,
  }),
  methods: {
    onWaypoint: function (args) {
      if (args.going === this.$waypointMap.GOING_IN) {
        this.$emit("updateActiveSection", "Contact");
      }
    },
  },
});
</script>

<style></style>
