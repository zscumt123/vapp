import Vue from "vue";
// import VueRouter from "vue-router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/base.less";

import App from "./App";
import {router} from "./routes/index";

axios.defaults.baseURL = "http://121.41.55.42:801/v1/";
Vue.prototype.axios = axios;
// Vue.use(VueRouter);
// const router = new VueRouter({
//     routes
// });
new Vue({
    router,
    template: "<App/>",
    components: {App}
}).$mount("#container");
