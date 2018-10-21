<template>
    <div class="tabs">
        <router-link to="/" class="tab-item" :class="{active:$route.name === 'Home'}">
            <i class="iconfont icon-dang"></i>
            <div class="tab-title">首页</div>
        </router-link>
        <router-link to="/message" class="tab-item" :class="{active:$route.name === 'message'}">
            <i class="iconfont icon-xiaoxi1"></i>
            <div class="tab-title">通知早知道</div>
        </router-link>
        <router-link to="/own" class="tab-item" :class="{active:$route.name === 'own'}">
            <i class="iconfont icon-wode"></i>
            <div class="tab-title">我的党建</div>
        </router-link>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
    .tabs {
        position: fixed;
        bottom: 0;left: 0;right: 0;width: 100%;
        background: url("../../image/home/drawable-hdpi/底部bg.png") no-repeat;
        background-size: 100%;
        height: 1.12rem;
        display: flex;
        .tab-item{
            width: 2.5rem;
            height: 1.12rem;
            flex: 1;
            text-align: center;
            font-size: 12px;
            padding-top: 10px;   
            .iconfont{
                font-size: 22px;  
            }
        }
        .active{
            border-top: 2px solid #c7000a;
            color: #c7000a
        }
        
    }
   
</style>