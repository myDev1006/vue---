<template>
 <div>
   <router-view></router-view>
  <Footernav v-show="$route.meta.showfooter"/>
 </div>
  
</template>

<script>
  import Footernav from "./components/Footernav/Footernav"
  export default {
    components:{
      Footernav
    },
    mounted(){
      this.$store.dispatch("getAddress")//分发地址action
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
