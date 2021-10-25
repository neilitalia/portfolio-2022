<template>
  <div
    class="text-amber-100 flex flex-col lg:flex-row justify-center items-center"
  >
    <DevIllustration
      class="w-5/6 mb-10 mt-28 lg:w-3/6 lg:mt-0 lg:mr-10 lg:mb-10 md:w-96"
    />
    <div class="flex flex-col justify-start lg:h-full">
      <h3 class="text-xl lg:text-2xl font-medium lg:mt-24">
        Hello World! My name is
      </h3>
      <h1 class="text-5xl font-bold text-amber-100 underline mt-3">
        Neil Italia.
      </h1>
      <p id="typeit" class="text-xl lg:text-2xl text-amber-400 w-72 mt-5"></p>
      <div class="mt-auto mb-72 flex flex-row justify-flex-start items-center">
        <router-link
          to="/#projects"
          class="
            p-2
            border-2
            rounded-md
            border-emerald-400
            hover:border-emerald-600 hover:bg-emerald-600
            text-emerald-400
            hover:text-amber-100
            mr-5
            transition
            duration-150
            ease-in-out
          "
        >
          See My Projects
        </router-link>
        <router-link
          to="/#projects"
          class="
            p-2
            border-2
            rounded-md
            border-emerald-400
            hover:border-emerald-600 hover:bg-emerald-600
            text-emerald-400
            hover:text-amber-100
            mr-5
            transition
            duration-150
            ease-in-out
          "
        >
          Get In Touch
        </router-link>
      </div>
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
      speed: 50,
      deleteSpeed: 20,
      lifeLike: true,
      loop: true,
      cursor: true,
    })
      .type("I am a Software Engineer", { delay: 800 })
      .delete("Engineer".length)
      .type("Developer", { delay: 800 })
      .move(" Developer".length * -1)
      .delete("Software".length)
      .type("Full-Stack", { delay: 800 })
      .move(null, { to: "END", instant: true })
      .delete("Full-Stack Developer".length)
      .type("UX/UI Designer", { delay: 800 })
      .delete("UX/UI Designer".length)
      .type("Front-End Rockstar", { delay: 800 })
      .delete("Front-End Rockstar".length)
      .type("Back-End Ninja", { delay: 800 })
      .delete(" Back-End Ninja".length)
      .type("n Open-Source Enthusiast", { delay: 800 })
      .delete("n Open-Source Enthusiast".length)
      .type(" Designer + Developer Unicorn", { delay: 800 })
      .delete(" Designer + Developer Unicorn".length)
      .type(" Web Developer Volunteer", { delay: 1000 })
      .delete("a Web Developer Volunteer".length)
      .type("vaccinated 💉", { delay: 800 })
      .delete("vaccinated 💉".length)
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
