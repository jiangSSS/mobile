<template>
    <div>
        <Header></Header>
        <div v-for="(item,index) in newsList" :key="index" class="row1 fll">
            <router-link :to="{path:'/shoot_detail',query:{id:item.newsId}}" class="left fll">
                <img :src="item.pic" alt="">
                <p class="img-title">{{item.title}}</p>             
            </router-link>
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
                newsList:[]
            }
        },
        methods:{
            getNewList(){
                this.$axios.get("/news/newsList.do?page=1&rows=10&type=7").then(res=>{
                    if(res.code == 1){
                        this.newsList = res.rows
                    }
                })
            }
        },
        created(){
            this.getNewList()
        }
    }
</script>

<style scoped lang="scss">
    .row1{
        margin: 0.3rem;
        img{
            width: 3.112rem;
            height: 2.334rem;
            display: block;
        }
        .img-title{
            width: 3.112rem;
            font-size: 12px;            
        }
        .left{
            
        }
    }
</style>