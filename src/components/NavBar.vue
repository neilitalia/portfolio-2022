<template>
  <div
    id="nav"
    class="
      pl-0
      lg:pl-4
      flex flex-row
      lg:flex-col
      items-center
      lg:items-flex-start
      justify-evenly
      lg:justify-center
      text-xl
      h-16
      lg:h-screen
      w-full
      lg:w-auto
      fixed
      bottom-0
      lg:top-0
      left-0
      z-10
      transition
      duration-200
      ease-in-out
      navbar-gradient
    "
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
        class="
          bx
          bxs-chevrons-right
          text-xl
          font-extrabold
          hidden
          lg:inline-flex
        "
      ></i>
      <i
        v-else
        class="
          bx bx-chevron-right
          text-2xl
          font-extrabold
          hidden
          lg:inline-flex
        "
      ></i>
      {{ link.text }}
    </router-link>
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
