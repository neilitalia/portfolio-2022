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
        <div class="flex flex-row justify-start items-center text-2xl mt-16">
          <a href="https://github.com/neilitalia" target="_blank" class="mx-3">
            <i class="bx bxl-github"></i>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/neilitalia/"
            target="_blank"
            class="mx-3"
          >
            <i class="bx bxl-linkedin-square"></i>
            LinkedIn
          </a>
          <a href="mailto:hello@neilitalia.dev" class="mx-3">
            <i class="bx bx-mail-send"></i>
            Email
          </a>
          <a href="tel:817-751-2462" class="mx-3">
            <i class="bx bx-phone"></i>
            Phone
          </a>
        </div>
      </div>
      <CollabIllustration
        class="mb-10 mt-16 lg:w-3/6 lg:mt-0 lg:mr-10 lg:mb-10 md:w-96"
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
