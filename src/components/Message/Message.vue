<template>
    <div class="home">
        <Header></Header>
        <div v-for="(item,index) in newsList" :key="index">
            <router-link :to="{path:'/m_detail1',query:{id:item.newsId}}" class="content clearfix" @click="$router.push('/m_detail1')">
                <img src="@/image/message/iconfont_gonggaotongzhi.png" class="img fll">
                <div class="title fll">
                    <p class="message-title">{{item.title}}</p>
                    <p class="data">{{item.currentTime}}</p>
                </div>
            </router-link>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/Footer/Footer.vue"
    import Header from "@/components/Header/com-header.vue"
    export default {
        components: {
            Footer,
            Header
        },
        data(){
            return{
                newsList:[]
            }
        },
        methods:{
            getNewDetail(){
                this.$axios.get("/news/newsList.do?page=1&rows=10&type=2").then(res=>{
                    if(res.code == 1){
                        this.newsList = res.rows
                    }
                })
            }
        },
        created(){
            this.getNewDetail()
        }
    }
</script>

<style scoped lang="scss">
    .content {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
        margin: 0.3rem;
        .message-title {
            font-size: 16px;
        }

        .data {
            font-size: 12px;
            margin-top: 5px;
        }

        .img {
            margin: 0.2rem;
        }
    }
   
</style>