<template>
    <div>
        <common v-if="isQuick"></common>
        <!--<div v-else>主体{{this.$route.params.category}}</div>-->
        <div v-else>
            <yqmenu @open="handleOpen" @close="handleClose" @select="handleSelect">
                <yqsubmenu index="1">
                    <template slot="title">导航一</template>
                    <yqmenuitem index="10">选项1</yqmenuitem>
                    <yqmenuitem index="11">选项2</yqmenuitem>
                </yqsubmenu>
                <yqsubmenu index="2">
                    <template slot="title">导航二</template>
                    <yqmenuitem index="20">选项3</yqmenuitem>
                    <yqmenuitem index="21">选项4</yqmenuitem>
                </yqsubmenu>
            </yqmenu>
        </div>
    </div>

</template>
<script>
    import common from "../quickstart/CommonUse.vue";
    import yqmenu from "../../components/menu/Menu.vue";
    import yqmenuitem from "../../components/menu/MenuItem.vue";
    import yqsubmenu from "../../components/menu/SubMenu.vue";
    export default{
        name: "Content",
        components: {
            common,
            yqmenu,
            yqmenuitem,
            yqsubmenu
        },
        computed: {
            isQuick: function() {
                return this.$route.params.category == "quickstart";
            }
        },
        methods: {
            handleOpen(index, indexPath) {
                console.log(index, indexPath);
            },
            handleClose(index, indexPath) {
                console.log(index, indexPath);
            },
            handleSelect(index, indexPath) {
                console.log(index, indexPath);
            }
        }
    };
</script>
