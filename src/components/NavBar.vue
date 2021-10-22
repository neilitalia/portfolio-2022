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
      <router-link to="/" class="text-coolGray-900 hover:text-coolGray-100"
        >Home</router-link
      >
      |
      <router-link to="/about" class="text-coolGray-900 hover:text-coolGray-100"
        >About</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
