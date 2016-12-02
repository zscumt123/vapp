<template>
    <div class="yq-login-form" @keyup.enter="onSubmit">
        <div>
            <div class="form-group  has-feedback">
                <input type="text" v-model="loginData.number" class="form-control input-lg" placeholder="请输入商户号">
                <span class="glyphicon glyphicon-edit form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="text" v-model="loginData.account" class="form-control input-lg" placeholder="请输入账号">
                <span class="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div class="form-group has-feedback">
                <input type="password" v-model="loginData.password" class="form-control input-lg" placeholder="请输入密码">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div class="checkbox">
                <label>
                    <input type="checkbox" v-model="isRemember"> 记住账号
                </label>
            </div>
            <button type="submit" class="btn btn-success btn-block btn-lg yq-login-button"  @click="onSubmit">登录</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default{
    name: "LoginForm",
    data() {
        return {
            loginData: {
                number: "",
                account: "",
                password: "",
            },
            isRemember: false,
            isLoading: false

        };
    },
    methods: {
        onSubmit() {
            let that = this;
            let loginData = this.loginData;
            //get token
            this.axios({
                method: "post",
                url: "token",
                data: {
                    "grant_type": "client_credentials",
                    "client_id": "84668-39563-41171-50000",
                    "client_secret": "7A876B447827ED06911C1A6EED0A6B02"
                },
                params: {
                    "ProductType": 0,
                    "loginname": loginData.account,
                    "password": loginData.password,
                    "productInstanceId": loginData.number
                }
            }).then(function(res) {
                if (res.status == 200) {
                    let token = `Bearer ${res.data.access_token}`;
                    //set token in global axios with token
                    axios.defaults.headers.common["Authorization"] = token;
                    that.$router.replace({path: "main/123"});
                    console.log(that.$router);
                }
            });
        }
    }

};
</script>
<style lang="less">
    .yq-login-form{
        box-sizing: border-box;
        border-radius: 8px;
        width:456px;
        height: 300px;
        background-color: #ffffff;
        margin-top:188px;
        float: right;
        padding:22px 30px 0;
        input{
            font-size: 14px;
        }
        .yq-login-button{
            letter-spacing: 10px;
        }
    }
</style>
