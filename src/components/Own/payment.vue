<template>
    <div>
        <Header></Header>
        <p>请选择支付方式</p>
        <div class="clearfix pay" @click="show = true">
            <div class="wechatpay fll">
                <img src="@/image/own/timg.jpg" alt="">
                <span>微信</span>
            </div>
            <div class="flr right">
                <i class="iconfont icon-arr-right"></i>
            </div>
        </div>
        <div class="clearfix pay" @click="show = true">
            <div class="alipay fll">
                <img src="@/image/own/true.jpg" alt="">
                <span>支付宝</span>
            </div>
            <div class="flr right">
                <i class="iconfont icon-arr-right"></i>
            </div>
        </div>
        <el-dialog :visible.sync="show" class="wechat" width="80%" center show-close="false">
            <span>微信支付</span>
            <img src="@/image/own/微信支付.png" class="pay-img">
        </el-dialog>
    </div>  
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    export default {
        components: {
            Header
        },
        data(){
            return{
                show:false
            }
        },
        computed:{
            title(){
                return this.$route.meta.title
            }
        }
    }
</script>

<style scoped lang="scss">
    p {
        font-size: 15px;
        line-height: 2;
        margin-top: 0.2rem;
        border-bottom: 2px solid #f1f3f5;
    }

    .pay {
        border-bottom: 2px solid #f1f3f5;
        .right {
            margin-right: 0.4rem;
        }
    }

    .wechatpay {
        display: flex;
        align-items: center;
        height: 1.6rem;

        img {
            width: 1.2rem;
            height: 1.2rem;
        }

        span {
            font-size: 16px;
            margin-left: 0.4rem;
            width: 4.5rem;
        }
    }

    .alipay {
        display: flex;
        align-items: center;
        height: 1.6rem;

        img {
            width: 1rem;
            height: 1rem;
            margin-left: 0.14rem;
        }

        span {
            font-size: 16px;
            margin-left: 0.4rem;
            width: 4.5rem;
        }
    }
    
    .wechat{
        .pay-img{
            width: 4rem;
            height: 4rem;
            margin-left: 0.5rem;
        }
        span{
           font-size: 20px;
           line-height: 2;
           text-align: center;
           display: block;
       }
    }
</style>