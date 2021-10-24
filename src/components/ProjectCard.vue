<template>
  <div
    class="
      flex flex-col
      border-2 border-emerald-400 border-opacity-50
      bg-white
      rounded-xl
      my-3
      transform
      hover:scale-105 hover:shadow-2xl
      transition
      duration-150
      ease-in-out
    "
  >
    <div>
      <img src="https://placebear.com/640/360" alt="" class="rounded-t-lg" />
    </div>
    <div class="p-5 text-emerald-900">
      <h1 class="text-xl font-bold">Card Title</h1>
      <h3 class="text-lg">Card Description</h3>
      <div class="flex flex-row justify-start items-center">
        <a
          :href="'#'"
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
          :href="'#'"
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
});
</script>
