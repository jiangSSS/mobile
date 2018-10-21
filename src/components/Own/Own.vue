<template>
    <div class="home">
        <Header></Header>
        <div class="banner">
            <img src="@/image/own/我的党建_iPhone_assets/头像.png">
            <div class="banner-desc">您还没有登录，请登录</div>
        </div>
       <div>
           <router-link to="/userinfo" class="list clearfix">
               <img src="@/image/own/我的党建_iPhone_assets/个人信息.png" class="fll own-logo">
               <div class="content">
                   <div class="title fll">个人信息</div><span class="flr"><img src="@/image/own/我的党建_iPhone_assets/形状-7-拷贝-5.png"/></span>
               </div>           
           </router-link>
           <router-link to="/integral" class="list clearfix">
               <img src="@/image/own/我的党建_iPhone_assets/量化积分icon.png" class="fll own-logo">
               <div class="content">
                   <div class="title fll">个人量化积分</div><span class="flr"><img src="@/image/own/我的党建_iPhone_assets/形状-7-拷贝-5.png"/></span>
               </div>
           </router-link>
           <router-link to="/update_pwd" class="list clearfix">
               <img src="@/image/own/我的党建_iPhone_assets/修改密码icon.png" class="fll own-logo">
               <div class="content">
                   <div class="title fll">修改密码</div><span class="flr"><img src="@/image/own/我的党建_iPhone_assets/形状-7-拷贝-5.png"/></span>
               </div>   
           </router-link>
           <router-link to="/payment" class="list clearfix">
               <img src="@/image/own/我的党建_iPhone_assets/党费缴纳.png" class="fll own-logo last-img">
               <div class="content">
                   <div class="title fll">党费缴纳</div><span class="flr"><img src="@/image/own/我的党建_iPhone_assets/形状-7-拷贝-5.png"/></span>
               </div>
           </router-link >
       </div>
        <mt-button type="danger" class="logout" @click="$router.push('/login')">退出登录</mt-button>

       <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/Footer/Footer.vue"
    import Header from "@/components/Header/com-header.vue"
    export default {
        components:{
            Footer,
            Header
        },
        data(){       
            return{
                 show:false
            }
        }
        
    }
</script>

<style scoped lang="scss">
    .banner{
        background: #c50206;
        height: 2.8rem;
        text-align: center;
        img{
            margin-top: 0.5rem;
        }
        .banner-desc{
            font-size: 14px;
            color: #fff
        }
    }
    .list{
        font-size: 16px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        .own-logo{
            margin: 15px;
        }
        .title{
            width: 4rem;
        }
        .last-img{
            width: 0.65rem;
            height: 0.65rem;
        }
    }
    .content img{
        position: fixed;
        right: 12px;
    }
    .logout{
        width: 100%;
        margin-top: 0.6rem;
    }   
</style>