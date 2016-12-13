<template>
    <li :class="{
        'is-opened':opened
    }">
        <div @click="handleClick">
            <slot name="title"></slot>
            <Icon name="opened ? 'chevron-up' : 'chevron-down'"></Icon>
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
<style>

</style>