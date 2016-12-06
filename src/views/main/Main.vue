<template>
    <div>
        <topnav></topnav>
        <router-view></router-view>
    </div>

</template>
<script>
    import topnav from "./TopNav.vue";
    export default{
        name: "main",
        created() {
            this.getNavData();
        },
        components: {
            topnav
        },
        methods: {
            getNavData() {
                this.$store.dispatch("SYSTEM_PARAM");
            }
        },
        watch: {
            "$route": "getNavData"
        }
    };
</script>
<style>
</style>