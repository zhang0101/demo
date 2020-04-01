import Vue from "vue";
import App from "./App.vue";
import router from "router";
import store from "store";
import VCharts from "v-charts";
import mock from "mock";

mock.bootstrap();

Vue.config.productionTip = false;
Vue.use(VCharts);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
