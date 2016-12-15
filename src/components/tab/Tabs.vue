<template>
    <div class="yq-tab">
        <ol class="nav" :class="'nav-'+type">
            <li :class="{
                    'active':currentName === n.index
                }" v-for="n in $children" @click="handleTabClick(n, $event)">
                {{n.label}}
                <span class="glyphicon glyphicon-remove" v-if="closable" @click="handleTabRemove(n, $event)"></span>
            </li>
        </ol>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>

</template>
<script>
    export default {
        name: "Tabs",
        props: {
            type: {
                type: String,
                default: "tabs"
            },
            activeName: String,
            closable: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                children: null,
                activeTab: null,
                currentName: 0,
                panes: []
            };
        },
        watch: {
            activeName: {
                handler(val) {
                    this.currentName = val;
                }
            }
        },
        methods: {
            handleTabRemove(tab, event) {
                event.stopPropagation();
                let tabs = this.$children;
                let index = tabs.indexOf(tab);
                tab.$destroy(true);
                if (tab.index === this.currentName) {
                    let nextChild = tabs[index];
                    let prevChild = tabs[index - 1];
                    this.currentName = nextChild ? nextChild.index : prevChild ? prevChild.index : "-1";
                }
                this.$emit("tab-remove", tab);
                this.$forceUpdate();
            },
            handleTabClick(tab, event) {
                this.currentName = tab.index;
                this.$emit("tab-click", tab, event);
            },
            mounted() {
                this.currentName = this.activeName || this.$children[0].index || "1";
                this.$nextTick(() => {
                    this.$forceUpdate();
                });
            },
        },


    };
</script>