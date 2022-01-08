<template>
  <div
    id="nav"
    class="fixed bottom-0 left-0 z-10 flex flex-row items-center w-full h-16 pl-0 text-xl transition duration-200 ease-in-out lg:pl-4 lg:flex-col lg:items-flex-start justify-evenly lg:justify-center lg:h-screen lg:w-auto lg:top-0 navbar-gradient"
  >
    <router-link
      v-for="link in links"
      :key="link.to"
      :to="link.to"
      :class="
        link.text === $props.activeSection
          ? `py-4
          text-amber-100
        lg:text-emerald-400 text-sm
        lg:text-xl
        transform
        hover:text-amber-100
        hover:translate-x-0
        lg:hover:translate-x-5
        transition
        duration-150
        ease-in-out
        navbar-link
        flex flex-row
        justify-flex-start
        items-center
        font-extrabold`
          : `py-4
        text-emerald-400 text-sm
        lg:text-xl
        transform
        hover:text-amber-100 
        hover:translate-x-0
        lg:hover:translate-x-5
        transition
        duration-150
        ease-in-out
        navbar-link
        flex flex-row
        justify-flex-start
        items-center
        font-extrabold`
      "
    >
      <i
        v-if="$props.activeSection === link.text"
        class="hidden text-xl font-extrabold bx bxs-chevrons-right lg:inline-flex"
      ></i>
      <i
        v-else
        class="hidden text-2xl font-extrabold bx bx-chevron-right lg:inline-flex"
      ></i>
      {{ link.text }}
    </router-link>
    <a href="https://blog.neilitalia.dev" target="_blank" class="flex flex-row items-center py-4 text-sm font-extrabold transition duration-150 ease-in-out transform text-emerald-400 lg:text-xl hover:text-amber-100 hover:translate-x-0 lg:hover:translate-x-5 navbar-link justify-flex-start">
      <i
        class="hidden text-2xl font-extrabold bx bx-chevron-right lg:inline-flex"
      ></i>
      Blog</a>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    activeSection: {
      type: String,
      default: "Home",
    },
  },
  // eslint-disable-next-line
  data() {
    return {
      links: [
        {
          to: "/#home",
          text: "Home",
        },
        {
          to: "/#about",
          text: "About",
        },
        {
          to: "/#projects",
          text: "Projects",
        },
        {
          to: "/#contact",
          text: "Contact",
        },
      ],
    };
  },
};
</script>

<style scoped>
.navbar-gradient {
  background: rgba(0, 58, 70, 0.6);
  backdrop-filter: blur(5px);
}

@media (min-width: 1024px) {
  .navbar-gradient {
    transition: background-position 0.15s ease-in-out;
    background: radial-gradient(
      100% 50% at 0% 50%,
      rgba(5, 150, 150, 0.479) 0%,
      rgba(5, 150, 105, 0) 100%
    );
    background-position: -200px;
    background-repeat: no-repeat;
  }
  .navbar-gradient:hover {
    background-position: 0px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.view-item {
  position: absolute;
  width: 100%;
  left: 0;
  transition: all 0.3s ease;
}
</style>
