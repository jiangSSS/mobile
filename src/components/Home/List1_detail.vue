<template>
    <div>
        <Header></Header>
        <div class="detail-warp">
            <div class="detail-title" v-text="this.detailData.title"></div>
            <div class="detail-article" v-html="this.detailData.content"></div>
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
                detailData: {},
                title:""
            }
        },
        methods: {
            getNewDetail() {
                this.$axios.get(`/news/newsContent.do?newsId=${this.$route.query.id}`).then(res => {
                    console.log(res)
                    if (res.code == 1) {
                        this.detailData = res.data
                        let type = this.detailData.type
                        switch (type) {
                            case 0:
                                this.title = "信工新闻眼"
                                break;
                            case 1:
                                this.title = "特色活动"
                                break;
                            case 2:
                                this.title = "新闻早知道"
                                break;
                            case 3:
                                this.title = "党建一点通"
                                break;
                            case 4:
                                this.title = "制度建设"
                                break;
                            case 5:
                                this.title = "党员亮身份"
                                break;
                            case 6:
                                this.title = "随时随地学"
                                break;
                            case 7:
                                this.title = "随时随地拍"
                                break;
                            case 8:
                                this.title = "政治学习"
                                break;
                        }
                    }
                })
            }
        },
        created() {
            this.getNewDetail()
        }
    }
</script>

<style scoped lang="scss">
    .detail-warp {
        margin: 0.2rem;

        .detail-title {
            font-size: 24px;
            color: #333;
            margin-bottom: 10px;
        }

        .detail-article {
            font-size: 14px;
            line-height: 2;

        }

        /deep/ .ql-align-center {
            text-align: center;

            img {
                width: 7rem;
                height: 100%;
            }

        }

        /deep/ .detail-article {
            img {
                width: 7rem;
                height: 100%;
            }

        }
    }
</style>