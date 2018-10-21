<template>
    <div>
        <Header></Header>
        <div class="cloud-content">
            <div v-for="(item,index) in forumList" :key="index">
                <div class="body-warp">
                    <div class="clearfix row">
                        <img :src="item.header" class="avatar fll">
                        <div class="content fll">
                            <div class="name">{{item.username}}</div>
                            <div class="">
                                <img src="@/image/home/list-3/时间.png" class="fll">
                                <div class="desc1 fll">{{item.currentTime}}</div>
                                <img src="@/image/home/list-3/声音.png" class="fll">
                                <div class="desc1 fll">公开</div>
                            </div>
                        </div>
                        <img src="@/image/home/list-3/党员互动icon.png" class="img-warp flr">
                    </div>
                    <div class="desc">{{item.content}}</div>
                    <div>
                        <router-link class="flr reply" :to="{path:'/list3_detail',query:{id:item.forumId}}">
                            <i class="iconfont icon-huifu fll"></i>
                            <span class="flr">回复</span>
                        </router-link>
                    </div>
                </div>
            </div>
            <i class="iconfont icon-xinzeng add" @click="show = true"></i>
        </div>
        <van-popup v-model="show" position="bottom" :overlay="true" class="form">
            <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" class="textarea"></el-input>
            <van-button type="danger" class="fll" small>发布</van-button>
            <van-button class="flr" @click="show = false">取消</van-button>
        </van-popup>
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
                forumList: [],
                show:false
            }
        },
        methods: {
            getForumList() {
                this.$axios.get("/forum/forumList.do?page=1&rows=10&type=0&cates=0").then(res => {
                    console.log("党员云互动 >>", res)
                    if (res.code == 1) {
                        this.forumList = res.rows
                    }
                })
            }
        },
        created() {
            this.getForumList()
        }
    }
</script>

<style scoped lang="scss">
    .cloud-content {
        background: #efeff4;

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

                .desc1 {
                    font-size: 12px;
                    padding: 0 0.1rem;
                }

                .img-warp {
                    width: 1.32rem;
                    height: 0.55rem;
                }
            }

            .desc {
                font-size: 16px;
                padding: 0.2rem 0;
            }

            .iconfont {
                margin-right: 0.1rem;
            }

            .reply {
                font-size: 14px;
                padding-bottom: 0.2rem;
                display: block;
            }
        }
    }

    .content {
        img {
            width: 0.24rem;
            height: 0.24rem;

        }
    }

    .add {
        position: fixed;
        bottom: 1.2rem;
        right: 0.25rem;
        color: #f00;
        font-size: 1.12rem;
    }

    .form {
        width: 6.8rem;
        background: #f1f1f1;   
        padding: 0.4rem;    
        .textarea{
            margin-bottom: 0.3rem;
        }
    }
</style>