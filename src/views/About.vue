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
    <h1 class="text-5xl text-amber-100 font-bold mt-24">
      This is an about page
    </h1>
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
