<template>
    <li class="menu-item"
        @click="handleClick"
        :class="{
            'is-active':active
        }"><slot></slot></li>
</template>
<script>
    import Menu from "./menu-mixin";
    export default {
        name: "MenuItem",
        componentName: "MenuItem",
        mixins: [Menu],
        props: {
            index: {
                type: String,
                required: true
            }
        },
        computed: {
            active() {
                return this.index === this.rootMenu.activeIndex;
            }
        },
        methods: {
            handleClick() {
                this.rootMenu.handleSelect(this.index, this.indexPath, this);
            }
        },
        created() {
            this.rootMenu.menuItems[this.index] = this;
        }
    };

</script>
<style>

</style>