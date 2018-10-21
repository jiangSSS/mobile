<template>
    <div>
        <Header></Header>
        <div class="warp-detail">
            <div v-text="newsDetail.title" class="title"></div>
            <div v-html="newsDetail.content" class="content"></div>
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
                newsDetail:{}
            }
        },
        methods:{
            getNewDetail(){
                this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.id}`).then(res=>{
                    if(res.code == 1){
                        this.newsDetail = res.data
                    }
                })
            }
        },
        created(){
            this.getNewDetail()
        }
    }
</script>

<style scoped>
    .warp-detail{
        margin: 0.3rem;
    }
    .title{
        font-size: 24px;
        margin-bottom: 0.3rem;
    }
    .content{
        font-size: 14px;
        line-height: 1.5;
    }
</style>