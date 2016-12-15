<template>
    <div v-calheight>
        <common v-show="isQuick"></common>
        <!--<div v-else>主体{{this.$route.params.category}}</div>-->
        <section class="yq-content" v-show="!isQuick">
            <div class="yq-left-nav pull-left">
                <yqmenu :default-openeds="navFirstItem" unique-opened  @select="handleSelect">
                    <yqsubmenu v-for="item in leftNavParam" :index="item.Route">
                        <template slot="title">{{item.Name}}</template>
                        <yqmenuitem v-for="v in item.Childs" :index="v.Route">{{v.Name}}</yqmenuitem>
                    </yqsubmenu>
                </yqmenu>
            </div>
            <mainpage></mainpage>

        </section>
    </div>

</template>
<script>
    import common from "../quickstart/CommonUse.vue";
    import yqmenu from "../../components/menu/Menu.vue";
    import yqmenuitem from "../../components/menu/MenuItem.vue";
    import yqsubmenu from "../../components/menu/SubMenu.vue";
    import mainpage from "./MainPage.vue";
    export default{
        name: "Content",
        components: {
            common,
            yqmenu,
            yqmenuitem,
            yqsubmenu,
            mainpage
        },
        computed: {
            isQuick: function() {
                return this.$route.params.category == "quickstart";
            },
            leftNavParam: function() {
                let paramObj;
                if (!this.isQuick) {
                    let obj = this.$store.getters.childParam;
                    let currentParam = this.$route.params.category;
                    obj.forEach((item) => {
                        if (item.Route == currentParam) {
                            if (item.Childs) {
                                paramObj = item.Childs;
                            }

                        }
                    });

                }
                return paramObj;
            },
            navFirstItem: function() {
                if (!this.isQuick) {
                    if (this.leftNavParam) {
                        return [this.leftNavParam[0].Route];
                    }
                }

            }
        },
        methods: {
//            handleOpen(index, indexPath) {
//                console.log(index, indexPath);
//            },
//            handleClose(index, indexPath) {
//                console.log(index, indexPath);
//            },
            handleSelect(index, indexPath) {
                console.log(index, indexPath);
            }
        }
    };
</script>
<style lang="less" scoped>
    .yq-content{
        height: 100%;
        padding: 0 0 5px 4px;
    }
    .yq-left-nav{
        height: 100%;
        width:184px;
        border:1px solid #ebebeb;
        border-radius: 4px;
        overflow:hidden;
    }
</style>
