<template>
    <div>
        <Header></Header>
        <div v-html="content" class="content">

        </div>

    </div>
</template>

<script>
    import axios from "axios"
    import getToday from "@/components/Home/Today.js"
    import cheerio from "cheerio"
    import Header from "@/components/Header/com-header"
    export default {
        components:{
            Header
        },
        data() {
            return {
                content: ""
            }
        },
        methods: {
            getData() {
                let url = `http://211.67.177.56:8080/hhdj/proxy/proxy.do`
                let day = new Date().getDate()
                let month = new Date().getMonth() + 1
                day = day >=10 ? day + "" : "0" + day
                month = month >=10 ? month + "" : "0" + month
                axios.get(url, { params: { url: getToday(month, day) } }).then(res => {
                    console.log(res.data)
                    const $ = cheerio.load(res.data)
                    this.content = $(".p1_02").html()
                })

            }
        },
        created() {
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
    .content{
        padding: 20px;
    }
    /deep/ .red{
        font-size: 30px;
        padding: 10px;
    }
    /deep/ h2{
        font-size: 20px;
        padding-bottom: 10px;
    }
    /deep/ p{
        font-size: 16px;
        line-height: 1.5;
        padding-bottom: 10px;
    }
</style>