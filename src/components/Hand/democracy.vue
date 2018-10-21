<template>
    <div>
        <Header></Header>
        <div class="btn-warp">
            <mt-button type="danger" class="btn" @click="$router.push('/Personal')">个人总结</mt-button>
            <mt-button type="danger" class="btn" @click="$router.push('/comments')">民主评议</mt-button>
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
    .btn-warp{
        margin-top: 4rem;
    }
    .btn{
        display: block;
        margin: 0.5rem auto;
        width: 4rem;     
    }
</style>