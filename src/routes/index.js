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
import QuickStart from "../views/quickstart/QuickStart.vue";
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
        children: [
            {
                path: "",
                component: QuickStart,
                name: "main"
            },
            {
                path: "quickstart",
                component: QuickStart,
                name: "quickstart"
            },
            {
                path: "content/:category",
                component: Content,
                name: "content"
            }
        ]
    },
    {
        path: "*",
        redirect: "main/quickstart"
    }
];
const router = new VueRouter({
    routes
});
export {router};