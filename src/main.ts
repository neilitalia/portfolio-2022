import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "boxicons";
import "boxicons/css/boxicons.min.css";
import "./assets/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
