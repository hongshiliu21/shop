import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import "@/assets/js/rem.js";

// 导入所有组件
// import Vant from "vant";
// import "vant/lib/index.css";

// Vue.use(Vant);

// 自动按需引入组件
import {
  Button,
  Icon,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Lazyload
} from "vant";
Vue.use(Button)
  .use(Icon)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);

import "@/mock/mock.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
