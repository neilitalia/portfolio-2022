<template>
  <div
    id="projects"
    class="flex flex-col justify-start items-center"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: $props.intersectionOptions,
    }"
  >
    <h1 class="text-5xl text-amber-100 font-bold text-center mt-24">
      My Projects
    </h1>
    <div class="flex flex-col max-w-xl justify-between align-top">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ProjectCard from "@/components/ProjectCard.vue";
import projects from "@/assets/projects.json";

export default Vue.extend({
  name: "Projects",
  components: { ProjectCard },
  props: ["intersectionOptions"],
  data: () => ({
    projects: projects,
  }),
  methods: {
    onWaypoint: function (args) {
      if (args.going === this.$waypointMap.GOING_IN) {
        this.$emit("updateActiveSection", "Projects");
      }
    },
  },
});
</script>

<style></style>
