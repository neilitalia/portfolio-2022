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
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Contact",
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
