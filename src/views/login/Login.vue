<template>
    <div class="yq-login-container">
        <el-row>
            <el-col :span="12"><Logo></Logo></el-col>
            <el-col :span="12"><LoginForm></LoginForm></el-col>
        </el-row>
    </div>
</template>
<script>
    import Logo from "./Logo.vue";
    import LoginForm from "./LoginForm.vue";
    export default{
        name: "Login",
        components: {
            Logo,
            LoginForm
        }
    };
</script>
<style lang="less">
    @media(max-width: 992px){
        .yq-login-container{
            padding:0 30px;
        }
    }
    @media screen and(min-width: 992px) and (max-width: 1200px){
        .yq-login-container{
            padding:0 100px;
        }
    }
    @media (min-width: 1200px){
        .yq-login-container{
            padding:0 192px;
        }
    }

</style>