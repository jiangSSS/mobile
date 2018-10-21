<template>
    <div>
        <Header></Header>
        <div class="body">
            <img src="@/image/home/list-2/审核中.png" alt="">
            <p>正在审核中</p>
            <mt-button class="clone" @click="$router.back()">关闭</mt-button>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    export default {
        components:{
            Header
        }
    }
</script>

<style scoped lang="scss">
    .body{
        text-align: center;
        img{
            margin-top: 1rem;
        }
        p{
            font-size: 15px;
            color: #888;
        }
    }
    .clone{
        background: #c50206;
        width: 4.5rem;
        height: 0.8rem;
        color: #fff;
        font-size: 18px;
        line-height: 2;
        border-radius: 10px;
        margin-top: 2rem;
    }
</style>