<template>
    <div class="yq-tab">
        <div class="yq-tab-header">
            <div class="yq-tab-item pull-left" :class="{
                    'active':currentName === n.index
                }" v-for="n in $children"  @click="handleTabClick(n, $event)">
               {{n.label}}
                <span class="glyphicon glyphicon-remove" v-if="closable" @click="handleTabRemove(n, $event)"></span>
            </div>
        </div>
        <div class="yq-tab-content" v-caltabheight>
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
                    console.log(this.activeName);
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
                    console.log("true");
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

        },
        mounted() {
            this.currentName = this.activeName || this.$children[0].index || "1";
            this.$nextTick(() => {
                this.$forceUpdate();
            });
        },
        directives: {
            caltabheight: {
                inserted: function() {
                    const wrapper = document.querySelector(".yq-main-page");
                    console.log(wrapper.getBoundingClientRect());
//                    console.log(el.getBoundingClientRect());
                }
            }
        }


    };
</script>
<style lang="less">
    .yq-tab{
        background-color: #fff;
        .yq-tab-header{
            border-bottom:1px solid #ccc;
            height:40px;
            .yq-tab-item{
                margin-bottom: -1px;
                margin-right: 2px;
                height: 40px;
                line-height: 40px;
                border: 1px solid transparent;
                border-bottom: 1px solid #cccccc;
                padding:0 20px;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                cursor: pointer;
            }
            .yq-tab-item:last-child{
                margin-right: 0;
            }
            .yq-tab-item:hover{
                background-color: #cccccc;
            }

            .yq-tab-item.active{
                border: 1px solid #cccccc;
                border-bottom: 1px solid transparent;
                background-color: #ffffff;
                color: #18b025;
            }
        }
        .yq-tab-content{
            padding:15px;
            border:1px solid #ccc;
            border-top:none;
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
</style>