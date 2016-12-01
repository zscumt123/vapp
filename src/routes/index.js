/**
 * Created by ZhanG on 2016/12/1.
 */
import Login from "../views/login/Login.vue";
import Main from "../views/main/Main.vue";
const routes = [
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/main",
        name: "main",
        component: Main
    }
];
export {routes};