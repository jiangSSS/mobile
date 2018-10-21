<template>
    <div>
        <Header></Header>
        <div class="form" @submit.prevent>
            <p>旧密码：</p> 
            <input type="password" class="input"  v-model="formData.password">
            <p>新密码：</p>
            <input type="password" class="input" v-model="formData.new_password">
            <p>确认密码：</p>
            <input type="password" class="input" v-model="formData.new_password2">
            <mt-button type="danger" class="login">确定</mt-button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    export default {
        components:{
            Header
        },
        data(){
            return{
                formData:{
                    password:"",
                    new_password:"",
                    new_password2:""
                }
            }
        },
        methods:{
            changePassword(){
                
            }
        }
    }
</script>

<style scoped lang="scss">
    .form {      
        font-size: 16px;
        color: #555;
        margin: 0.8rem;
        .input{
            width: 5.6rem;
            height: 0.8rem;
            border: 1px solid #ccc;
            border-radius: 6px;
            color: #000;
            outline: none;
            padding: 0 0.2rem;
        }
        p{
            text-align-last: left;
            line-height: 2;
        }
        .login {
            width: 6rem;
            border-radius: 6px;
            height:0.84rem;
            margin-top: 0.4rem;
        }
    }
</style>