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
      <h1 class="text-2xl font-bold">{{ $props.project.title }}</h1>
      <h3 class="text-lg">{{ $props.project.description }}</h3>
      <h3 class="text-lg">Features:</h3>
      <ul class="list-disc list-outside ml-5">
        <li v-for="feature in $props.project.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
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
      <div class="flex flex-row flex-wrap justify-start items-center">
        <h6
          v-for="tech in $props.project.techStack"
          :key="tech"
          class="px-1.5 py-0.5 mr-2 mb-2 rounded-md bg-emerald-200 text-sm"
        >
          {{ tech }}
        </h6>
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
