/**
 * Created by ZhanG on 2016/12/14.
 */
export const install = (Vue) => {
    Vue.directive("calheight", {
        inserted: function(el) {
            let oNav = document.querySelector(".yq-content-nav");
            let navHeight = oNav.offsetHeight;
            function renderHeight() {
                let bodyHeight = document.body.offsetHeight;
                el.style.height = bodyHeight - navHeight + "px";
            }
            renderHeight();
            window.onresize = function () {
                renderHeight();
            };
        }
    });
};