<template>
    <li class="yq-sub-menu" :class="{
        'is-opened':opened
    }">
        <div @click="handleClick">
            <slot name="title"></slot>
            <Icon name="chevron-down"></Icon>
        </div>
        <ul v-show="opened"><slot></slot></ul>
    </li>
</template>
<script>
    import menuMixin from "./menu-mixin";
    import Icon from "../icon/Icon.vue";
    export  default{
        name: "SubMenu",
        componentName: "SubMenu",
        mixins: [menuMixin],
        components: {
            Icon
        },
        props: {
            index: {
                type: String,
                required: true
            }
        },
        computed: {
            opened() {
                return this.rootMenu.openedMenus.indexOf(this.index) !== -1;
            }
        },
        methods: {
            handleClick() {
                this.rootMenu.handleSubmenuClick(this.index, this.indexPath);
            }
        },
        created() {
            this.rootMenu.submenus[this.index] = this;
        },
    };

</script>
<style lang="less" scoped>
    .yq-sub-menu > div{
        line-height: 34px;
        color: #ffffff;
        padding-left:40px;
        background-color:#18b025;
        cursor: pointer;
        border-bottom: 2px solid #ffffff;
        font-size: 16px;

    }
    .yq-sub-menu .glyphicon{
        float: right;
        margin:10px 10px 0 0;
        transition: 0.3s;
        font-size: 12px;
    }
    .yq-sub-menu.is-opened .glyphicon{
        transform: rotate(180deg);
    }

</style>