<template>
  <div id="app">
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
  import "@/style/style.scss"
  // import Footer from "@/components/Footer/Footer.vue"
export default {
  
  name: 'App',
  components:{
      // Footer
  }
}
</script>

<style>
    .container{
        padding-bottom: 1.12rem;
    }
    .header{
      padding-top: 0.84rem;
    }
    a{
      text-decoration: none;
      color: #333;
    }

</style>
