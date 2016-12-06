<template>
    <div>
        <common v-if="isQuick"></common>
        <div v-else>主体{{this.$route.params.category}}</div>
    </div>

</template>
<script>
    import common from "../quickstart/CommonUse.vue";
    export default{
        name: "Content",
        components: {
            common
        },
        computed: {
            isQuick: function() {
                return this.$route.params.category == "quickstart";
            }
        }
    };
</script>
