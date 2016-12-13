/**
 * Created by ZhanG on 2016/12/5.
 */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const USER_LOGIN = "USER_LOGIN";
const USER_LOGOUT = "USER_LOGOUT";
const SYSTEM_PARAM = "SYSTEM_PARAM";
Vue.use(Vuex);
export  default new Vuex.Store({
    state: {
        userInfo: JSON.parse(window.localStorage.getItem("user")) || {},
        isLogin: Boolean(window.localStorage.getItem("isLogin")) || false,
        systemParameters: []
    },
    getters: {
        childParam: (state) => {
            // if (state.systemParameters.length != 0) {
            //     return state.systemParameters.filter((item) => item.Route != "quickstart");
            // }
            return state.systemParameters;
        },
        navRouteParam: (state) => {
            return state.systemParameters.map((item) => {
                return item.Route;
            });
        }
    },
    mutations: {
        [USER_LOGIN](state, user) {
            state.isLogin = true;
            window.localStorage.setItem("isLogin", state.isLogin);
            state.userInfo = user;
            window.localStorage.setItem("user", JSON.stringify(user));

        },
        [USER_LOGOUT](state) {
            state.isLogin = false;
            window.localStorage.removeItem("isLogin");
            state.userInfo = {};
            window.localStorage.removeItem("user");
        }
    },
    actions: {
        [USER_LOGIN]({commit}, user) {
            commit(USER_LOGIN, user);
        },
        [USER_LOGOUT]({commit}) {
            commit(USER_LOGOUT);
        },
        [SYSTEM_PARAM]({state}) {
            if (state.systemParameters.length == 0) {
                axios.get("SystemParameters").then(function(res) {
                    let val = res.data;
                    if (!val.isError) {
                        state.systemParameters = val.Data.SystemMenu;
                        console.log(state.systemParameters);
                    }
                });
            }

        }
    }

});