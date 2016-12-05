/**
 * Created by ZhanG on 2016/12/5.
 */
import Vue from "vue";
import Vuex from "vuex";
const USER_LOGIN = "USER_LOGIN";
Vue.use(Vuex);
export  default new Vuex.Store({
    state: {
        userInfo: JSON.parse(window.localStorage.getItem("user")) || {},
        isLogin: Boolean(window.localStorage.getItem("isLogin")) || false
    },
    getter: {

    },
    mutations: {
        [USER_LOGIN](state, user) {
            state.isLogin = true;
            window.localStorage.setItem("isLogin", state.isLogin);
            state.userInfo = user;
            window.localStorage.setItem("user", JSON.stringify(user));

        }
    },
    actions: {
        [USER_LOGIN]({commit}, user) {
            commit(USER_LOGIN, user);
        }
    }

});