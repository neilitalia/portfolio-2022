<template>
  <div class="text-amber-100 flex flex-row justify-center items-center">
    <div class="flex flex-col justify-center items-flex-start mt-40">
      <h3 class="text-xl font-medium">Hey there! My name is</h3>
      <h1 class="text-5xl font-bold text-amber-100 underline">Neil Italia.</h1>
      <ul>
        <li
          v-for="(title, i) in titles"
          :key="i"
          class="text-xl text-amber-400"
        >
          {{ title.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  // eslint-disable-next-line
  data() {
    return {
      titles: [
        {
          text: "Software Engineer",
        },
        {
          text: "UX/UI Designer",
        },
        {
          text: "Full-Stack Developer",
        },
        {
          text: "Open-Source Enthusiast",
        },
        {
          text: "Front-End Rockstar",
        },
        {
          text: "Back-End Ninja",
        },
        {
          text: "Painter",
        },
      ],
    };
  },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
