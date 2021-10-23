<template>
  <div
    id="nav"
    class="
      flex flex-col
      items-flex-start
      justify-center
      text-xl
      h-screen
      fixed
      top-0
      left-0
      z-10
      navbar-gradient
    "
  >
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      class="my-4 text-amber-100 transition duration-150 ease-in-out"
    >
      {{ link.text }}
    </router-link>
  </div>
</template>

<script>
// bg-gradient-radial-to-cr
//       from-transparent
//       to-transparent
//       hover:bg-gradient-radial-to-cr hover:from-emerald-600 hover:to-transparent
export default {
  name: "NavBar",
  // eslint-disable-next-line
  data() {
    return {
      links: [
        {
          to: "/",
          text: "Home",
        },
        {
          to: "/about",
          text: "About",
        },
        {
          to: "/projects",
          text: "Projects",
        },
        {
          to: "/resume",
          text: "Resume",
        },
        {
          to: "/contact",
          text: "Contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbar-gradient {
  transition: all 0.15s ease-in-out;
  background: rgb(5, 150, 105);
  background: radial-gradient(
    100% 50% at 0% 50%,
    rgba(5, 150, 105, 1) 0%,
    rgba(5, 150, 105, 0) 100%
  );
  background-position: -200px;
  background-repeat: no-repeat;
}
.navbar-gradient:hover {
  background-position: 0px;
}
</style>
