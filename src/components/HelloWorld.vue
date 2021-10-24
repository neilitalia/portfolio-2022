<template>
  <div
    class="text-amber-100 flex flex-col lg:flex-row justify-center items-center"
  >
    <DevIllustration
      class="w-5/6 mb-10 mt-56 lg:w-3/6 lg:mt-0 lg:mr-10 lg:mb-10 md:w-96"
    />
    <div class="flex flex-col justify-start lg:h-full">
      <h3 class="text-xl lg:text-2xl font-medium lg:mt-24">
        Hello World! My name is
      </h3>
      <h1 class="text-5xl font-bold text-amber-100 underline">Neil Italia.</h1>
      <p id="typeit" class="text-xl lg:text-2xl text-amber-400 w-60 mt-5"></p>
      <!-- <div class="flex flex-row justify-start items-center text-3xl mt-16">
        <a href="https://github.com/neilitalia" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/neilitalia/" target="_blank">
          <i class="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://github.com/neilitalia" target="_blank">
          <i class="bx bx-mail-send"></i>
        </a>
        <a href="https://github.com/neilitalia" target="_blank">
          <i class="bx bx-phone"></i>
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import TypeIt from "typeit";
import DevIllustration from "@/assets/DevIllustration.vue";

export default Vue.extend({
  name: "HelloWorld",
  components: {
    DevIllustration,
  },
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
