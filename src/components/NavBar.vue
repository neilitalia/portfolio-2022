<template>
  <div
    id="nav"
    class="
      pl-0
      md:pl-4
      flex flex-col
      items-center
      md:items-flex-start
      justify-center
      text-xl
      h-screen
      w-full
      md:w-auto
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
      class="
        py-4
        text-emerald-400
        transform
        hover:text-amber-100 hover:translate-x-5
        transition
        duration-150
        ease-in-out
        navbar-link
        flex flex-row
        justify-flex-start
        items-center
        font-extrabold
      "
    >
      <i
        v-if="$props.activeSection === link.text"
        class="bx bxs-chevrons-right text-xl font-extrabold"
      ></i>
      <i v-else class="bx bx-chevron-right text-2xl font-extrabold"></i>
      {{ link.text }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    activeSection: String,
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
          to: "/#resume",
          text: "Resume",
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
  background: #042229;
}

@media (min-width: 768px) {
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
