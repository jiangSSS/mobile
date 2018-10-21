<template>
    <div class="body-rule">
        <Header></Header>
        <!-- <img src="@/image/own/个人积分/积分bg.png" class="bg"> -->
        <p class="bg">{{userInfo.totalScore}}</p>
        <div class="detail-warp clearfix">
            <router-link to="/scoredetail" class="fll detail">
                <img src="@/image/own/个人积分/积分明细icon.png" >
                <span>积分明细</span>
            </router-link>  
            <div class="flr right">
                <i class="iconfont icon-arr-right"></i>
            </div>       
        </div>
        <div class="rules">
            <span>积分规则</span>
            <img src="@/image/own/个人积分/问号icon.png" class="flr">
        </div>
        <div class="item-rule clearfix">
            <span class="fll">登录App</span><span class="flr num">5</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">完善个人信息</span><span class="flr num">2</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">查看积分</span><span class="flr num">1</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">按时缴纳党费</span><span class="flr num">10</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">查看通知</span><span class="flr num">2</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">了解学院工作动态</span><span class="flr num">5</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">上交思想汇报经审核通过</span><span class="flr num">5</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">主动学习相关文件</span><span class="flr num">10</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">认真撰写心得总结并上交，经审核通过</span><span class="flr num">5</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">提交个人总结，并参与评议</span><span class="flr num">2</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">积极参加互动</span><span class="flr num">5</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">学习党建知识</span><span class="flr num">5</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">学习党史</span><span class="flr num">10</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">创先争优事迹</span><span class="flr num">10</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">学党章，学习近平总书记系列讲话</span><span class="flr num">10</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">用镜头记录两学一做过程中令人感动的人和事</span><span class="flr num">3</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">关注并积极参与特色活动</span><span class="flr num">5</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">制度化，常态化建设</span><span class="flr num">5</span>
        </div>
        <div class="footer">

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
                userInfo:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get("/user/userInfo.do").then(res=>{
                    if(res.code == 1){
                        this.userInfo = res.data
                    }
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
    .body-rule{
        padding-bottom: 1rem;
    }
    .bg{
        font-size: 14px;
        color: #f1f1f1;
        height: 2.88rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: url("../../image/own/个人积分/积分bg.png") no-repeat;
        background-size: 100%;
        margin-bottom: 0.1rem;
    }
    .detail-warp{
        padding: 0.2rem;
        border-top: 1.5px solid #888;
        .detail{
            font-size: 14px;
            line-height: 2;
            display: flex;
            align-items: center;
            span{
                margin-left: 0.2rem;
                width: 5rem;
            }
        }
        .right{
            display: flex;
            align-items: center;
            padding-right: 0.1rem;
            padding-top: 0.15rem;
        }
    }
    .rules{
        background: #ccc;
        display: flex;
        justify-content: space-between;
        padding:0.2rem;
        span{
            font-size: 14px;
        }
    }
    .item-rule{
        font-size: 14px;
        line-height: 2;
        padding: 0 0.15rem;
        // padding: 0.15rem;
        color: #888;
        border-bottom: 1px solid #888;
        .num{
            color: #f00
        }
    }
    .footer{
        background: #ccc;
        height: 1rem;
        position: fixed;
        left: 0;right: 0;bottom: 0;width: 100%;
    }
    
</style>