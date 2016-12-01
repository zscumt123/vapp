import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "./assets/css/base.less";
import "element-ui/lib/theme-default/index.css";

import App from "./App";
import {routes} from "./routes/index";
Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter({
    routes
});
new Vue({
    router,
    template: "<App/>",
    components: {App}
}).$mount("#container");
