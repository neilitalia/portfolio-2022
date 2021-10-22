<template>
  <div
    id="nav"
    class="
      flex flex-row
      bg-emerald-500
      h-7
      items-center
      justify-between
      text-xl
    "
  >
    <div>
      <h1 class="text-coolGray-900 font-bold">Neil Italia</h1>
    </div>
    <div class="text-coolGray-900">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="
          mx-4
          text-coolGray-900
          hover:text-amber-100
          transition
          duration-200
          ease-in-out
        "
      >
        {{ link.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
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
      ],
    };
  },
};
</script>
