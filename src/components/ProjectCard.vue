<template>
  <div
    class="
      flex flex-col
      bg-white
      rounded-xl
      my-4
      transform
      hover:scale-105 hover:shadow-2xl
      transition
      duration-150
      ease-in-out
    "
  >
    <div class="bg-emerald-800">
      <img :src="$props.project.image" alt="" class="rounded-t-lg" />
    </div>
    <div class="p-5 text-emerald-900">
      <h1 class="text-xl font-bold">{{ $props.project.title }}</h1>
      <h3 class="text-lg">{{ $props.project.description }}</h3>
      <div class="flex flex-row justify-start items-center">
        <a
          :href="$props.project.sourceCode"
          target="_blank"
          class="
            text-lg
            mr-5
            hover:text-emerald-600
            transition
            duration-150
            ease-in-out
          "
        >
          <i class="bx bxl-github"></i>
          Source Code
        </a>
        <a
          :href="$props.project.liveDemo"
          target="_blank"
          class="
            text-lg
            mr-5
            hover:text-emerald-600
            transition
            duration-150
            ease-in-out
          "
        >
          <i class="bx bx-link-external"></i>
          Live Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProjectCard",
  props: ["project"],
});
</script>
