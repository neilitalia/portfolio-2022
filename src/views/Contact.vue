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
        lg:flex-row
        justify-center
        items-center
      "
    >
      <div class="flex flex-col justify-start items-center lg:h-full">
        <h3 class="text-center text-2xl lg:text-2xl font-medium mt-10 lg:mt-24">
          Let's work on something cool together.
        </h3>
        <div
          class="
            flex flex-row flex-wrap
            justify-center
            items-center
            text-xl
            mt-14
          "
        >
          <a
            href="https://drive.google.com/file/d/1dlPrJps-WJxt5IFT67SdjzaIZlbwx3rM/view"
            target="_blank"
            class="mx-3 flex flex-row justify-center items-center"
          >
            <i class="bx bxs-file-pdf text-3xl"></i>
            Résumé
          </a>
          <a
            href="https://github.com/neilitalia"
            target="_blank"
            class="mx-3 flex flex-row justify-center items-center"
          >
            <i class="bx bxl-github text-3xl"></i>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/neilitalia/"
            target="_blank"
            class="mx-3 flex flex-row justify-center items-center"
          >
            <i class="bx bxl-linkedin-square text-3xl"></i>
            LinkedIn
          </a>
          <a
            href="mailto:hello@neilitalia.dev"
            class="mx-3mx-3 flex flex-row justify-center items-center"
          >
            <i class="bx bx-mail-send text-3xl"></i>
            Email
          </a>
          <a
            href="tel:817-751-2462"
            class="mx-3 flex flex-row justify-center items-center"
          >
            <i class="bx bx-phone text-3xl"></i>
            Phone
          </a>
        </div>
      </div>
      <CollabIllustration
        class="mb-10 mt-16 w-5/6 lg:w-3/6 lg:mt-0 lg:mr-10 lg:mb-10 md:w-96"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import CollabIllustration from "@/assets/CollabIllustration.vue";

export default Vue.extend({
  name: "Contact",
  components: {
    CollabIllustration,
  },
  props: ["intersectionOptions"],
  data: function () {
    return {
      text: "Test",
    };
  },
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
