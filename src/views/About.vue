<template>
  <div
    id="about"
    class="flex flex-col justify-start items-center h-screen"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: $props.intersectionOptions,
    }"
  >
    <h1 class="text-5xl text-amber-100 font-bold mt-24 my-5">About me</h1>
    <p class="text-xl text-amber-400 w-96 my-5">
      I'm a Software Engineer with experience as a SWE Intern for a
      multinational company and as a Web Developer Volunteer for a Philippine
      non-profit.
    </p>
    <p class="text-xl text-amber-400 w-96 my-5">
      With my background in the service industry and my client-facing
      experience, I want to make digital customer experiences more engaging,
      accessible, and memorable through efficient system design — from front-end
      interfaces to back-end business logic.
    </p>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "About",
  props: ["intersectionOptions"],
  methods: {
    onWaypoint: function (args) {
      if (args.going === this.$waypointMap.GOING_IN) {
        this.$emit("updateActiveSection", "About");
      }
    },
  },
});
</script>
