<template>
    <div class="yq-logo-container">
        <img src="../../assets/images/logo.png">
        <span>CLOUD LUCK</span>
        <h3>{{logoTitle}}</h3>
        <h5>{{logoInfo}}</h5>
    </div>
</template>
<script>
    export default{
        name: "logo",
        data() {
            return {
                logoTitle: "新一代智慧云餐饮管理系统",
                logoInfo: "让管理更加轻松、高效、安全、智能"
            };
        }
    };

</script>
<style lang="less">
    .yq-logo-container{
        margin-top:228px;
        span{
            display: block;
            margin-top:8px;
            font-size: 20px;
        }
        h3{
            font-weight: bold;
            margin:18px 0 14px;
            font-size: 24px;
        }
        h5{
            font-weight: normal;
            font-size: 18px;
            margin: 0;
            color:#999999;
        }
    }
</style>