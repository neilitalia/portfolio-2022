<template>
  <div
    id="contact"
    class="contact flex flex-col justify-start items-center h-screen"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
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
  data: function () {
    return {
      text: "Test",
      intersectionOptions: {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: [0, 1],
      },
    };
  },
  methods: {
    onWaypoint: function (args) {
      const going = args.going;
      const direction = args.direction;
      if (going === this.$waypointMap.GOING_IN) {
        console.log("waypoint going in!");
      }
      if (going === this.$waypointMap.GOING_OUT) {
        console.log("waypoint going out!");
      }
      if (direction === this.$waypointMap.DIRECTION_TOP) {
        console.log("waypoint going top!");
      }
    },
  },
});
</script>

<style></style>
