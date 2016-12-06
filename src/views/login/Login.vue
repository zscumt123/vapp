<template>
    <div class="yq-page-container">
        <div class="yq-login-container">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-6"><Logo></Logo></div>
                    <div class="col-xs-6"><LoginForm></LoginForm></div>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import Logo from "./Logo.vue";
    import LoginForm from "./LoginForm.vue";
    export default{
        name: "Login",
        beforeRouteEnter(to, from, next) {
            //if login, go to main page
            next((vm) => {
                if (vm.$store.state.isLogin) {
                    vm.$router.replace({path: "main"});
                }
            });
        },
        components: {
            Logo,
            LoginForm
        }
    };
</script>
<style lang="less">
    .yq-page-container{
        height: 100%;
        background: url("../../assets/images/login_bg.png") no-repeat;
        background-size: 100% 100%;
        /*.row {*/
            /*min-width:900px;*/
        /*}*/

    }
    @media (max-width: 992px){
        .yq-login-container{
            padding:0 30px;
        }
    }
    @media screen and(min-width: 992px) and (max-width: 1200px){
        .yq-login-container{
            padding:0 80px;
        }
    }
    @media (min-width: 1200px){
        .yq-login-container{
            padding:0 192px;
        }
    }

</style>