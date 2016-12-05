import Vue from "vue";
// import VueRouter from "vue-router";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/base.less";

import App from "./App";
import {router} from "./routes/index";
import store from "./stores/index";

axios.defaults.baseURL = "http://121.41.55.42:801/v1/";
Vue.prototype.axios = axios;
if (store.state.isLogin) {
    let token = store.state.userInfo.token;
    axios.defaults.headers.common["Authorization"] = token;
}
router.beforeEach(({path, name}, from, next) => {
    console.log(path);
    let isLogin = store.state.isLogin;
    if (!isLogin && name != "login" && name != "index") {
        return next({path: "/login"});
    }
    next();
});
new Vue({
    router,
    store,
    template: "<App/>",
    components: {App}
}).$mount("#container");
