<template>
    <div>
        <Header></Header>
        <img src="@/image/crop/timg.jpg" class="banner">
        <div class="row">
            <router-link to="/list2_learning" class="icon">
                <div>
                    <img src="@/image/crop/icon1.png" alt="">
                </div>
                <div class="icon-title">
                    政治学习
                </div>
            </router-link>
            <router-link to="/list2_report" class="icon">
                <div>
                    <img src="@/image/crop/icon2.png" alt="">
                </div>
                <div class="icon-title">
                    思想汇报
                </div>
            </router-link>
            <router-link to="/list2_experience" class="icon">
                <div>
                    <img src="@/image/crop/icon3.png" alt="">
                </div>
                <div class="icon-title">
                    心得总结
                </div>
            </router-link>
        </div>
        <div class="row">
            <router-link to="/list2_democracy" class="icon"> 
                <div>
                    <img src="@/image/crop/icon4.png" alt="">
                </div>
                <div class="icon-title">
                    民主评议
                </div>
            </router-link>
            <router-link to="/list2_find" class="icon">
                <div>
                    <img src="@/image/crop/icon5.png" alt="">
                </div>
                <div class="icon-title">
                    流动党员找组织
                </div>
            </router-link>
            <div class="icon"></div>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/Header/com-header.vue"
    export default {
        components: {
            Header
        }
    }
</script>

<style scoped lang="scss">
    .banner {
        width: 7.5rem;
    };
    .row {
            display: block;
            display: flex;
            justify-content: space-around;
            margin-bottom: 20px;

            .icon {
                width: 2.5rem;
                text-align: center;

                .icon-title {
                    font-size: 14px;
                }

                img {
                    width: 1.7rem;
                    height: 1.7rem;
                }
            }
        }
</style>