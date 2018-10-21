<template>
    <div>
        <Header></Header>
         <div v-for="(item,index) in newsList" :key="index" :label="item">
            <router-link :to="{path:'/list1_detail', query:{id:item.newsId}}" class="content">
                <img :src="item.pic" class="img">
                <div class="title">
                    <p class="message-title">{{item.title}}</p>
                    <span class="date clearfix">
                        <span class="dateTime fll">
                            {{item.currentTime}}
                        </span>
                        <span class="look-num flr">
                            <img src="@/image/crop/12-eye.png">
                            <span class="date1">{{item.count}}</span>
                        </span>
                    </span> 
                </div>
            </router-link>
        </div>
        <p class="footer">没有更多数据了</p>
        <!-- <van-loading type="spinner" color="white" v-if="isLoading" class="loading"/>     -->
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
                newsList:[]
            }
        },
        methods:{
            getNews(){
                this.$axios.get("/news/newsList.do?page=1&rows=10&type=1").then(res=>{
                    if(res.code == 1){
                        this.newsList = res.rows
                    }
                })
            }
        },
        created(){
            this.getNews()
        }
    }
</script>

<style scoped lang="scss">
    .content {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 0.2rem;
        .title{
            width: 100%;
            .message-title {
                font-size: 16px;
                padding-bottom: 0.3rem;
            }
            .date{
                font-size: 12px;
                margin-top: 5px;
            }
        }   
        .img {
            width: 1.7rem;
            height: 1.6rem;
            margin-right: 0.3rem
        }   
    }
    .footer{
        font-size: 16px;
        line-height: 2.2;
        text-align: center;
        color: #888;
    }
    
    
</style>