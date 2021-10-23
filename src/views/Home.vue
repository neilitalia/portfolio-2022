<template>
  <div class="home flex flex-col justify-center items-center">
    <HelloWorld class="w-full" />
    <svg viewBox="0 0 200 500" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#F29F05"
        d="M38.7,-65.8C52.8,-58.9,68.6,-53.8,74.9,-43.2C81.3,-32.5,78.1,-16.2,77.9,-0.1C77.7,16,80.3,32,73.3,41.4C66.2,50.8,49.4,53.7,35.6,52.3C21.8,50.8,10.9,45.1,1.8,41.9C-7.2,38.8,-14.4,38.1,-19.5,34.5C-24.6,30.8,-27.6,24.3,-35,18C-42.3,11.8,-54.1,5.9,-59.1,-2.9C-64.2,-11.7,-62.6,-23.5,-55,-29.3C-47.3,-35,-33.6,-34.8,-23.5,-43.9C-13.3,-53.1,-6.7,-71.6,2.8,-76.5C12.3,-81.4,24.6,-72.7,38.7,-65.8Z"
        transform="translate(100 170) scale(1.8)"
      />
    </svg>
    <p>hello</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    HelloWorld,
  },
});
</script>
