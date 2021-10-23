<template>
  <div class="hello text-amber-100 flex flex-col justify-evenly items-center">
    <div>
      <h1 class="text-5xl font-bold mt-48">Neil Italia</h1>
    </div>
    <div>
      <ul>
        <li v-for="(title, i) in titles" :key="i" class="text-xl">
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
