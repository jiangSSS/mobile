<template>
    <div class="">
        <Header></Header>
        <div class="body">
            <div v-text="this.detail.title" class="title"></div>
            <div v-html="this.detail.content" class="content"></div>       
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
                detail:{}
            }
        },
        methods:{
            getDetail(){
                this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.id}`).then(res=>{
                    console.log("通知 >>",res)
                    if(res.code == 1){
                        this.detail = res.data
                    }
                })
            }
        },
        created(){
            this.getDetail()
        }
    }
</script>

<style scoped lang="scss">
    .body{
        margin: 0.2rem;
    }
    .title{
        font-size: 24px;
        margin-bottom: 0.4rem;
    }
    .content{
        font-size: 18px;
        font-weight: 400;
    }
    /deep/ .content{
        img{
            width: 7rem;
        }     
    }   

</style>