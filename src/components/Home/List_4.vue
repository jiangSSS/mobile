<template>
    <div>
        <Header></Header>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading">
            <div v-for="(item,index) in newsList" :key="index" :label="item">
                <router-link :to="{path:'/list4_detail', query:{id:item.newsId}}" class="content">
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
            <div class="loading">
                <img v-if="isLoading" src="../../image/crop/spinner.gif">
            </div>
            <p class="footer" v-if="isShow">没有更多数据了</p>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    export default {
        components: {
            Header
        },
        data() {
            return {
                newsList: [],
                page:1,
                isShow:false,
                loading:false,
                isLoading:false
            }
        },
        methods: {
            loadMore(){
                this.page = this.page + 1,
                this.getNews()
            },
            getNews() {
                this.isLoading = true
                this.$axios.get(`/news/newsList.do?page=${this.page}&rows=10&type=3`).then(res => {
                    console.log(res)
                    if (res.code == 1) {
                        this.newsList = [...this.newsList,...res.rows]
                        this.loading = false    
                        if(res.rows.length == 0){
                            this.loading = true
                            this.isShow = true
                            this.isLoading = false
                        }
                    }
                })
            }
        },
        created() {
            this.getNews()
        }
    }
</script>

<style scoped lang="scss">
    .content {
        display: flex;
        border-bottom: 1px solid #ccc;
        padding: 0.2rem;

        .title {
            width: 100%;

            .message-title {
                font-size: 16px;
                padding-bottom: 0.3rem;
            }

            .date {
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

    .footer {
        font-size: 16px;
        line-height: 2.2;
        text-align: center;
        color: #888;
    }
    .loading{
        display: flex;
        justify-content: center
    }
</style>