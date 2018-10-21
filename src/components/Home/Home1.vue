<template>
    <div class="home container">
        <div class="header-home clearfix">
            <div class="logo fll">
               <img src="@/image/crop/logo.png" alt="">
            </div>
            <router-link to="/login" class="login flr">
                登录
            </router-link>
        </div>
        <mt-swipe>
            <mt-swipe-item v-for="(img,index) in swiperimg" :key="index">
                <img :src="img.url" class="swiper-img">
                <div>{{img.title}}</div>
            </mt-swipe-item>          
        </mt-swipe>
        <div class="nav">
            <div class="row">
                <router-link to="/list_1" class="icon">
                    <div>
                        <img src="@/image/home/drawable-hdpi/icon_01@2x.png" alt="">
                    </div>
                    <div class="icon-title">
                        信工新闻眼
                    </div>
                </router-link>
                <router-link to="/list_2" class="icon" >
                    <div>
                        <img src="@/image/home/drawable-hdpi/icon_03@2x.png" alt="">
                    </div>
                    <div class="icon-title">
                        掌上组织生活
                    </div>
                </router-link>
                <router-link to="/list_3" class="icon">
                    <div>
                        <img src="@/image/home/drawable-hdpi/icon_05@2x.png" alt="">
                    </div>
                    <div class="icon-title">
                        党员云互动
                    </div>
                </router-link>
            </div>
            <div class="row">
                <router-link to="/list_4" class="icon">
                    <div>
                        <img src="@/image/home/drawable-hdpi/icon_04@2x.png" alt="">
                    </div>
                    <div class="icon-title">
                        党建一点通
                    </div>
                </router-link>
                <router-link to="/list_5" class="icon">
                    <div>
                        <img src="@/image/home/drawable-hdpi/icon_06@2x.png" alt="">
                    </div>
                    <div class="icon-title">
                        党员亮身份
                    </div>
                </router-link>
                <router-link to="/list_6" class="icon">
                 <!-- @click="$router.push('/list-6')" -->
                    <div>
                        <img src="@/image/home/drawable-hdpi/icon_02@2x.png" alt="">
                    </div>
                    <div class="icon-title">
                        党史上的今天
                    </div>
                </router-link>
            </div>
        </div>
        <div class="banner">
            <img src="@/image/home/drawable-hdpi/banner01@2x.png" alt="">
        </div>
        <div class="type">
            <div class="menu-left">
                <router-link to="/"></router-link>
            </div>
            <div class="menu-right">
                <div class="row">
                    <router-link to="/learn"></router-link>
                    <router-link to="/shoot"></router-link>
                </div>
                <div class="row">
                    <router-link to="/system"></router-link>
                    <router-link to="/activity"></router-link>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/Footer/Footer.vue"
    export default {
        components:{
            Footer
        },
        data() {
            return {
                swiperimg: [
                    {
                        url: "http://oowantxlb.bkt.clouddn.com/upload/rear/749b4f2a7cc56b5c0068545718fd24d4.png",
                        title:"1111111"
                    },
                    {
                        url: "http://oowantxlb.bkt.clouddn.com/upload/rear/4bbac18c1f8f6c0521b7b6af2ae8ad6c.png",
                        title:""
                    },
                    {
                        url: "http://oowantxlb.bkt.clouddn.com/upload/rear/66e257fe2b5afdbb6acb8ed1127d06c9.png"
                    },
                    {
                        url: "http://oowantxlb.bkt.clouddn.com/upload/rear/46296e429c7cda71b941b99fa3461fd1.png"
                    }
                ]
            };
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>
    .home {
        background: #f1f1f1;
        // padding-top: 0.88rem;
    }
    .header-home {
        width: 7.5rem;
        height: 0.88rem;
        background: #c50206;
        // position: fixed;
        // top: 0;right: 0;left: 0;


        .logo {
            margin-left: 10px;
            img{
                width: 2.92rem;
                padding-top: 0.1rem;
                display: block;
            }           
        }
        .login {
            font-size: 16px;
            font-weight: 300;
            color: #f1f1f1;
            margin-right: 10px;
            line-height: 2.5;
            width: 1rem;
            text-align: center;
        }
    }
    .mint-swipe { height: 3.75rem;width: 7.5rem }
    .swiper-img{
        width: 7.5rem;
        height: 3.75rem;
    }
    .nav {
        background: url("../../image/home/drawable-hdpi/bt_bg@2x.png") no-repeat;
        background-size: 100%;
        -webkit-background-size: 100%;
        margin-top: 10px;
        .row {
            display: block;
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;

            .icon {
                width: 2.5rem;
                text-align: center;

                .icon-title {
                    font-size: 12px;
                }

                img {
                    width: 1rem;
                    height: 1rem;
                }
            }
        }
    }
    .banner{
        img{
            width: 7.5rem;
            display: block;
        }
    }   
    .type {
        width: 7.5rem;
        height: 3.296rem;
        background: url("../../image/home/drawable-hdpi/channelType@2x.png") no-repeat;
        -webkit-backgrounp-size:100%;
        background-size: 100%;
        display: block;
        display: flex;
        .menu-left{
            flex: 1;
        }
        .menu-right{
            flex: 2;
            .row{
                height: 50%;
                display: flex;
                a{
                    width: 100%;
                    
                }
            }
        }
    }
</style>