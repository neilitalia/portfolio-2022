<template>
  <div id="app" class="bg-gradient-to-b from-darkestBlue to-darkTeal h-screen">
    <NavBar />
    <Home />
    <About />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "@/components/NavBar.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavBar,
    Home,
    About,
    Projects,
    Contact,
  },
});
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
