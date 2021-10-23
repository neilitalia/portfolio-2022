<template>
  <div id="app" class="bg-gradient-to-b from-darkestBlue to-darkTeal h-screen">
    <NavBar />
    <transition name="fade">
      <router-view class="view ml-36" />
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
  },
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.view {
  position: absolute;
  width: 100%;
  left: 0;
  transition: all 0.3s ease;
}
</style>
