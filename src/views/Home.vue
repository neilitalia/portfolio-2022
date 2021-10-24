<template>
  <div
    id="home"
    class="home flex flex-col justify-center items-flex-start h-screen"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: $props.intersectionOptions,
    }"
  >
    <HelloWorld />
  </div>
</template>

<script>
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
  props: ["updateActiveSection", "intersectionOptions"],
  methods: {
    onWaypoint: function (args) {
      if (args.going === this.$waypointMap.GOING_IN) {
        this.$emit("updateActiveSection", "Home");
      }
    },
  },
});
</script>
