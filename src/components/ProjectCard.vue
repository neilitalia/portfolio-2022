<template>
  <div
    class="
      flex flex-col
      bg-white
      rounded-xl
      my-4
      transform
      transition
      duration-150
      ease-in-out
    "
  >
    <div class="bg-darkTeal">
      <img :src="$props.project.image" alt="" class="rounded-t-lg" />
    </div>
    <div class="p-5 text-emerald-900">
      <h1 class="text-4xl font-bold">{{ $props.project.title }}</h1>
      <div class="flex flex-row justify-start items-center my-3">
        <a
          :href="$props.project.sourceCode"
          target="_blank"
          class="
            flex flex-row
            justify-center
            items-center
            text-base
            mr-5
            bg-emerald-200
            hover:text-amber-50 hover:bg-emerald-900
            transition
            duration-150
            ease-in-out
            rounded-md
            py-1
            px-2
          "
        >
          <i class="bx bxl-github text-2xl mr-1"></i>
          Source Code
        </a>
        <a
          :href="$props.project.liveDemo"
          target="_blank"
          class="
            flex flex-row
            justify-center
            items-center
            text-base
            mr-5
            bg-emerald-200
            hover:text-amber-50 hover:bg-emerald-900
            transition
            duration-150
            ease-in-out
            rounded-md
            py-1
            px-2
          "
        >
          <i class="bx bx-link-external text-2xl mr-1"></i>
          Live Demo
        </a>
      </div>
      <h3 class="text-lg mb-3">{{ $props.project.description }}</h3>
      <h3 class="text-lg">Features:</h3>
      <ul class="list-disc list-outside ml-5 mb-3">
        <li v-for="feature in $props.project.features" :key="feature">
          {{ feature }}
        </li>
      </ul>
      <div class="flex flex-row flex-wrap justify-start items-center">
        <span
          v-for="tech in $props.project.techStack"
          :key="tech"
          class="
            px-1.5
            py-0.5
            mr-2
            mb-2
            rounded-md
            bg-emerald-100
            text-sm
            cursor-default
          "
        >
          {{ tech }}
        </span>
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
