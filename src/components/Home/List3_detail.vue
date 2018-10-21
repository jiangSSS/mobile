<template>
    <div>
        <Header></Header>
        <div class="body-warp">
            <div class="clearfix row">
                <img :src="forumDetail.header" class="avatar fll">
                <div class="content fll">
                    <div class="name">{{forumDetail.username}}</div>
                    <div class="">
                        <img src="@/image/home/list-3/时间.png" class="fll">
                        <div class="date fll">{{forumDetail.currentTime}}</div>
                    </div>
                </div>
            </div>
            <div class="desc">{{forumDetail.content}}</div>
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
                forumDetail: []
            }

        },
        methods: {
            getForumDetail() {
                this.$axios.get(`/forum/forumCommentList.do?page=1&rows=10&forum_id=${this.$route.query.id}`).then(res => {
                    console.log("云互动详情 >>", res)
                    if (res.code == 1) {
                        this.forumDetail = res.rows
                    }
                })
            }
        },
        created() {
            this.getForumDetail()
        }

    }
</script>

<style scoped lang="scss">
    .body-warp {
        padding: 0.3rem;
        background: #fff;
        margin-bottom: 0.25rem;
        padding-bottom: 0.5rem;
        color: #555;

        .row {
            .avatar {
                margin-right: 0.2rem;
                width: 0.7rem;
                height: 0.7rem;
            }

            .name {
                font-size: 18px;
                margin-bottom: 0.1rem;
            }

            .date {
                font-size: 12px;
                padding: 0 0.1rem;
            }
        }
    }
</style>