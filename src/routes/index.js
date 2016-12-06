/**
 * Created by ZhanG on 2016/12/1.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/login/Login.vue";
import Main from "../views/main/Main.vue";
// const Main = (resolve) => {
//     require.ensure(["../views/main/Main.vue"], () => {
//         resolve(require("../views/main/Main.vue"));
//     });
// };
import Content from "../views/content/Content.vue";
Vue.use(VueRouter);
const routes = [
    {
        path: "/",
        name: "index",
        component: Login
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/main",
        component: Main,
        redirect: {name: "content", params: {category: "quickstart"}},
        children: [
            {
                path: "content/:category",
                component: Content,
                name: "content"
            }
        ]
    },
    {
        path: "*",
        redirect: "/main"
    }
];
const router = new VueRouter({
    routes
});
export {router};