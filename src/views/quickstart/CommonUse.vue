<template>
    <div class="yq-common-container">
        <div></div>
        <div class="yq-common-list">

        </div>
    </div>

</template>
<script>
    export default{
        name: "commonuse",
        data() {
            return {
                tester: "world"
            };
        }
    };
</script>
<style lang="less">
    .yq-common-container{
        div:first-child{
           height: 30px;
            background-color: #18b025;
        }
    }
</style>
