<template>
  <div
    id="home"
    class="home flex flex-col justify-center items-center h-screen"
  >
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
