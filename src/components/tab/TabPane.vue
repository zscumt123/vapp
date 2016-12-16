<template>
    <div class="yq-tab-pane" v-show="show && $slots.default">
        <slot></slot>
    </div>
</template>
<script>
    export  default {
        name: "TabPane",
        props: {
            label: String,
            name: String
        },
        data() {
            return {
                index: "",
                isClosable: null
            };
        },
        created() {
            this.isClosable = this.$parent.closable;
            if (!this.index) {
                this.index = this.$parent.$children.indexOf(this) + 1 + "";
            }
            if (this.$parent.panes) {
                this.$parent.panes.push(this);

            }
        },
        computed: {
            show() {
                return this.$parent.currentName === this.index;
            }
        },
        destroyed() {
            if (this.$el && this.$el.parentNode) {
                this.$el.parentNode.removeChild(this.$el);
            }
            const panes = this.$parent.panes;
            if (panes) {
                panes.splice(this, panes.indexOf(this));
            }

        },
        watch: {
            name: {
                immediate: true,
                handler(val) {
                    this.index = val;
                }
            }
        }

    };
</script>
<style>
    .yq-tab-pane{

    }
</style>