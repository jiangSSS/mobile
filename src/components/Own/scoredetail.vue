<template>
    <div>
        <Header></Header>
        <div v-for="(item,index) in integralList" :key="index">
            <div class="item clearfix">
                <div class="fll">
                    <div class="desc">{{item.typeName}}</div>
                    <div class="date">{{item.timeFormat}}</div>
                </div>
                <div class="fright flr">{{item.singleDesc}}</div>
            </div>
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
                integralList: []
            }
        },
        methods: {
            getData() {
                this.$axios.get("/integral/integralList.do?page=1&rows=10").then(res => {
                    console.log("积分明细 >>",res)
                    if (res.code == 1) {
                        this.integralList = res.rows
                    }
                })
            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
    .item {
        padding: 0.4rem;
        color: #333;
        border-bottom: 1px solid #ccc;

        .desc {
            font-size: 18px;
            padding-bottom: 0.1rem;
        }

        .date {
            font-size: 14px;
        }

        .fright {
            font-size: 16px;
            color: #f00;
        }
    }
</style>