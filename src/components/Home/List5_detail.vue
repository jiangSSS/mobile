<template>
    <div>
        <Header></Header>
        <div class="detail-warp">
            <div class="detail-title" v-text="newsDetail.title"></div>
            <div class="detail-article" v-html="newsDetail.content"></div>    
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

<style scoped lang="scss">
    .detail-warp{
        margin: 10px;
        .detail-title{
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
        }
        .detail-article{
            font-size: 14px;
            line-height: 2; 
            
        }    
        /deep/ .detail-article {
            img{
                width: 6rem;
                height: 100%;
            }
     
        }
    }
</style>