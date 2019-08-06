<template>
 <div>
   <router-view></router-view>
  <Footernav/>
 </div>
  
</template>

<script>
  import Footernav from "./components/Footernav/Footernav"
  export default {
    components:{
      Footernav
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
