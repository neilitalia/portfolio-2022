<template>
  <div id="projects" class="flex flex-col justify-start items-center h-screen">
    <h1 class="text-5xl text-amber-100 font-bold text-center mt-24">
      Projects
    </h1>
    <div class="flex flex-row flex-wrap max-w-xl justify-between align-top">
      <ProjectCard v-for="i in 6" :key="i" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectCard from "@/components/ProjectCard.vue";

export default Vue.extend({
  name: "Projects",
  components: { ProjectCard },
});
</script>

<style></style>
