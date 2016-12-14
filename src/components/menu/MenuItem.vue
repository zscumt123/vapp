<template>
    <li class="yq-menu-item"
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
<style lang="less" scoped>
    .yq-menu-item{
        line-height: 32px;
        color: #999999;
        padding-left: 40px;
        border-bottom: 1px solid #eeefef;
        cursor: pointer;
        &:hover{
            color:#4db232;

         }
    }
</style>