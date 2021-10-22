<template>
  <div class="hello text-amber-100 flex flex-col justify-evenly items-center">
    <div>
      <h1 class="text-7xl font-bold">Neil Italia</h1>
    </div>
    <div>
      <ul>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
            target="_blank"
            rel="noopener"
            >babel</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router"
            target="_blank"
            rel="noopener"
            >router</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener"
            >eslint</a
          >
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
            target="_blank"
            rel="noopener"
            >typescript</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
