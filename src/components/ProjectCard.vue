<template>
  <div
    class="
      h-44
      w-44
      cursor-pointer
      border-2 border-emerald-400 border-opacity-50
      rounded-xl
      my-3
      transform
      hover:scale-110 hover:shadow-2xl
      transition
      duration-150
      ease-in-out
    "
  >
    <img src="https://placebear.com/640/360" alt="" class="rounded-t-lg" />
    <h1 class="text-amber-100">Card Title</h1>
    <h3 class="text-amber-100">Card Description</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProjectCard",
});
</script>
