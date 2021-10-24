<template>
  <div class="text-amber-100 mt-40 mx-auto">
    <h3 class="text-xl font-medium">Hey there! My name is</h3>
    <h1 class="text-5xl font-bold text-amber-100 underline">Neil Italia.</h1>
    <p id="typeit" class="text-xl text-amber-400 w-96"></p>
    <div>
      <a href="" target="_blank"><i class="bx bxl-github"></i></a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TypeIt from "typeit";

export default Vue.extend({
  name: "HelloWorld",
  mounted() {
    new TypeIt("#typeit", {
      waitUntilVisible: true,
      speed: 75,
      loop: true,
      cursor: true,
    })
      .type("I am a Software Engineer", { delay: 500 })
      .delete("Engineer".length)
      .type("Developer", { delay: 500 })
      .move(" Developer".length * -1)
      .delete("Software".length)
      .type("Full-Stack", { delay: 500 })
      .move(null, { to: "END" })
      .delete("Full-Stack Developer".length)
      .type("UX/UI Designer", { delay: 500 })
      .delete("UX/UI Designer".length)
      .type("Front-End Rockstar", { delay: 500 })
      .delete("Front-End Rockstar".length)
      .type("Back-End Ninja", { delay: 500 })
      .delete("Back-End Ninja".length)
      .type("Open-Source Enthusiast", { delay: 500 })
      .delete("Open-Source Enthusiast".length)
      .type("Designer + Developer Unicorn", { delay: 500 })
      .delete("Designer + Developer Unicorn".length)
      .go();
  },
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
          text: "Designer + Developer Unicorn",
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
