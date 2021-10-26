<template>
  <div
    id="about"
    class="flex flex-col justify-start items-center h-auto"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: $props.intersectionOptions,
    }"
  >
    <h1 class="text-5xl text-amber-100 font-bold mt-24 my-5">About me</h1>
    <p class="text-xl text-amber-400 w-5/6 my-5 max-w-2xl">
      I'm a full-stack software engineer with a background in client facing
      service. I enjoy helping others, exploring new technology, and developing
      technical solutions that work for people.
    </p>
    <p class="text-xl text-amber-400 w-5/6 my-5 max-w-2xl">
      With my software engineering experience as an intern for a multinational
      outsourcing company and my service industry experience as restaurant
      waitstaff, my goal is to make digital customer experiences more engaging,
      accessible, and memorable through efficient system design — from front-end
      interfaces to back-end business logic.
    </p>
    <p class="text-xl text-amber-400 w-5/6 my-5 max-w-2xl">
      I'm passionate about open-source, non-profits, and volunteering! Let me
      know if your organization needs an extra hand, my inbox is a welcome place
      for invitations.
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
