<template>
  <div
    class="
      cursor-pointer
      border-2 border-emerald-400 border-opacity-50
      rounded-xl
      my-3
      transform
      hover:scale-105 hover:shadow-2xl
      transition
      duration-150
      ease-in-out
    "
  >
    <img src="https://placebear.com/640/360" alt="" class="rounded-t-lg" />
    <h1 class="text-amber-100 text-lg">Card Title</h1>
    <h3 class="text-amber-100 text-lg">Card Description</h3>
    <div class="flex flex-row justify-start items-center">
      <p class="text-amber-100 text-lg mr-5">
        <i class="bx bxl-github"></i>
        Source Code
      </p>
      <p class="text-amber-100 text-lg">
        <i class="bx bx-link-external"></i>
        Live Demo
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProjectCard",
});
</script>
