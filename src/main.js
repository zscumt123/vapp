import Vue from "vue";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/base.less";

import App from "./App";
import {router} from "./routes/index";
import store from "./stores/index";

import * as Directive from "./global/directive/calheight";
Vue.use(Directive);
//the url of api request
axios.defaults.baseURL = "http://121.41.55.42:801/v1/";
Vue.prototype.axios = axios;

//if response error code===401, go to login page
axios.interceptors.response.use((res) => {
    return res;
}, (error) => {
    if (error.response.status === 401) {
        console.log(error.response.status);
        store.dispatch("USER_LOGOUT");
        router.replace({path: "login"});
    }
    return Promise.reject(error);
});

//set token in http header
if (store.state.isLogin) {
    let token = store.state.userInfo.token;
    axios.defaults.headers.common["Authorization"] = token;
}

router.beforeEach(({path, name}, from, next) => {
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
export default Vue;