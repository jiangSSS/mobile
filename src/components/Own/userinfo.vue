<template>
    <div>
        <Header></Header>
        <div class="item-rule clearfix">
            <span class="fll">头像</span><span class="flr num">{{userInfo.header}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">姓名</span><span class="flr num">{{userInfo.username}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">身份证</span><span class="flr num">{{userInfo.idCard}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">家庭住址</span><span class="flr num">{{userInfo.hometown}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">工作地址</span><span class="flr num">{{userInfo.address}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">民族</span><span class="flr num">{{userInfo.nation}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">微信号</span><span class="flr num">{{userInfo.wxNum}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">QQ号</span><span class="flr num">{{userInfo.qqNum}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">性别</span><span class="flr num">{{userInfo.qqNum}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">最高学历</span><span class="flr num">{{userInfo.education}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">职称</span><span class="flr num">{{userInfo.jobRank}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">薪资水平</span><span class="flr num">{{userInfo.salary}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">入党时间</span><span class="flr num">{{userInfo.joinPartyTime}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">党费最后缴纳时间</span><span class="flr num">{{userInfo.lastPayTime}}</span>
        </div>
        <div class="item-rule clearfix">
            <span class="fll">当前身份</span><span class="flr num">{{userInfo.partyIdentity}}</span>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    import {mapState} from "vuex"
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
        },
        computed:{
            ...mapState(["userinfo","token"])
        }
    }
</script>

<style scoped lang="scss">
    .item-rule{
        font-size: 15px;
        line-height: 3;
        color: #555;
        border-bottom: 1px solid #888;
        padding: 0 0.25rem;
    }
</style>