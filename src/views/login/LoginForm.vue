<template>
    <div class="yq-login-form">
        <el-form ref="loginForm" :model="loginData" :rules="rules">
            <el-form-item prop="number">
                <el-input icon="upload" size="large" v-model="loginData.number" placeholder="请输入商户号"></el-input>
            </el-form-item>
            <el-form-item prop="account">
                <el-input icon="edit" size="large" v-model="loginData.account" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item class="yq-margin-4" prop="password">
                <el-input icon="warning" size="large" type="password" v-model="loginData.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="yq-margin-4">
                <el-checkbox v-model="loginData.isRemember" label="记住账号" name="type"></el-checkbox>
            </el-form-item>
            <el-form-item class="yq-margin-4">
                <el-button class="yq-login-button" type="success" @click="onSubmit" :loading="isLoading">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default{
    name: "LoginForm",
    data() {
        return {
            loginData: {
                number: "",
                account: "",
                password: "",
                isRemember: false
            },
            rules: {
                number: [
                    {
                        required: true,
                        message: "请输入商户号",
                        trigger: "blur"
                    }

                ],
                account: [
                    {
                        required: true,
                        message: "请输入账户",
                        trigger: "blur"
                    }

                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    }

                ]
            },
            isLoading: false

        };
    },
    methods: {
        onSubmit() {
            this.$refs.loginForm.validate((valid) => {
                if (!valid) {
                    return false;
                } else {
                    this.isLoading = !this.isLoading;
                    console.log(this.isLoading);
                }
            });
        }
    }

};
</script>
<style lang="less">
    .yq-login-form{
        box-sizing: border-box;
        border-radius: 2px;
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
            width:100%;
            letter-spacing: 10px;
        }
        .yq-margin-4{
            margin-bottom: 10px;
        }
    }
</style>
