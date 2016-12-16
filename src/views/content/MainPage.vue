<template>
    <div class="yq-main-page">
        <div v-on:openTab="handleOpenTab">hello</div>
        <div class="yq-main-wrapper" v-if="!isShowTab">
            欢迎使用云祺管理系统
        </div>
        <tab :closable="true" @tab-remove="handleRemoveTab" v-if="isShowTab">
            <!--<tabpane v-for="item in navData" :key="item" :label="item">{{item}}</tabpane>-->
            <tabpane label="hello">hello</tabpane>
            <tabpane label="world">world</tabpane>
            <tabpane label="java">world</tabpane>
        </tab>
    </div>
</template>
<script>
    import tab from "../../components/tab/Tabs.vue";
    import tabpane from "../../components/tab/TabPane.vue";
    export default{
        name: "MainPage",
        components: {
            tab,
            tabpane
        },
        data() {
            return {
                activeTab: "",
                tabs: ["java", "hello", "world"]
            };
        },
        computed: {
            isShowTab() {
                return this.navData.length !== 0;
            },
            navData() {
                return this.tabs;
            }
        },
        watch: {
//            navData(val) {
//                this.activeTab = val.length !== 0 ? val[val.length - 1] : "";
//            }
        },
        methods: {
            handleRemoveTab() {
//                let index = this.$store.state.hasOpenedTabs.indexOf(tab.label);
//                console.log(tab.label);
//                this.$store.state.hasOpenedTabs.splice(index, 1);
//                console.log(this.$store.state.hasOpenedTabs);
//                console.log(this.navData);
//                this.$nextTick(() => {
//                    this.$forceUpdate();
//                });
//                let index = this.tabs.indexOf(tab);
//                this.tabs.splice(index, 1);

            },
            handleOpenTab() {
                this.tabs.push("php");
            }
        }

    };
</script>
<style lang="less" scoped>
    .yq-main-page{
        padding:1px  4px 0 190px;
        width:100%;
        height: 100%;
        box-sizing: border-box;
        .yq-main-wrapper{
            width:100%;
            height: 100%;
            box-sizing: border-box;
            border:1px solid #ebebeb;
            border-radius: 4px;
            font-size: 50px;
            font-weight: bold;
        }
    }
</style>