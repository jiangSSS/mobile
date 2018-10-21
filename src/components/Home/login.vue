<template>
    <div class="login-warp">
        <Header></Header>
        <div class="login-logo">
            <img src="../../image/crop/logo.png" class="logo">
        </div>
        <div class="form">
            <input type="text" class="input" placeholder="身份证号" v-model="userInfo.id_card">
            <input type="password" class="input" placeholder="密码" v-model="userInfo.password">
            <mt-button type="danger" class="login" @click="handleLogin">登录</mt-button>
        </div>
    </div>
</template>
<script>
    import Header from "@/components/Header/com-header.vue"
    // import axios from "axios"
    export default {
        components: {
            Header
        },
        data(){
            return{
                userInfo:{
                    id_card:"1001",
                    password:"123456",
                }
            }
        },
        methods:{
            handleLogin(){
                let formData = new FormData();
                formData.append("id_card",this.userInfo.id_card)
                formData.append("password",this.userInfo.password)
                this.$axios.post("/user/userLogin.do",formData).then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        // this.$store.commit("USERINFO",res.data)
                        this.$message.success(res.msg)
                        setTimeout(()=>{
                            this.$router.push("/own")
                        },1000)
                        
                    }else{
                        this.$message.error(res.msg)  
                    }
                })
            }   
        }
    }
</script>

<style scoped lang="scss">
    .login-warp {
        background: #c50206;
        height: 100vh;
    }
    .login-logo{
        text-align: center;
        .logo{
            width: 4rem;
            height: 0.96rem;
            margin-top: 0.6rem;          
        }
    }
    
    .form {
        text-align: center;
        .input {
            // margin-left: 0.25rem;
            padding-left: 0.2rem;
            width: 5.76rem;
            height: 0.8rem;
            background: #c50206;
            border: 1px solid #ff0;
            border-radius: 6px;
            color: #fff;
            outline: none;
            font-size: 14px;
        }
        input::placeholder {
            color: #f1f3f5;
        }
        .login {
            width: 6rem;
            border-radius: 6px;
            height:0.84rem;
        }
    }
</style>