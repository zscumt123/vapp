<template>
    <div class="yq-common-container">
        <div></div>
        <div class="yq-common-list" v-calheight>

        </div>
    </div>

</template>
<script>
    export default{
        name: "commonuse",
        data() {
            return {
                tester: "world"
            };
        },
        directives: {
            calheight: {
                bind: function(el, binding, vnode) {
//                    el.style.height = "300px";
//                    console.log(el.offsetParent);
                    console.log(binding);
                    console.log(vnode);
                },
                inserted: function(el) {
                    function renderHeight() {
                        let bodyHeight = document.body.offsetHeight;
                        let elOffsetTop = el.offsetTop;
                        el.style.height = bodyHeight - elOffsetTop + "px";
                    }
                    renderHeight();
                    window.resize = function () {
                        renderHeight();
                    };

                }
            }
        }
    };
</script>
<style lang="less">
    .yq-common-container{
        div:first-child{
           height: 30px;
            background-color: #18b025;
        }
    }
</style>
