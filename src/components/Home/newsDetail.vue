<template>
    <div>
        <Header></Header>
        <div>
        {
            path: "/payment",
            name: "payment",
            component: () => import("@/components/Own/payment.vue"),
            meta: {
                title: "轮播新闻"
            }
        },
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

<style scoped>

</style>