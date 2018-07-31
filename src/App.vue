<template>
  <div>
    <mt-header title="信息管理系统"></mt-header>
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img @click="changeHash" slot="icon" src="./assets/img/home.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img @click="changeHash" slot="icon" src="./assets/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopping">
        <img @click="changeHash" slot="icon" src="./assets/img/shopping.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img @click="changeHash" slot="icon" src="./assets/img/search.png">
        发现
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  methods:{
    changeHash(){
      // 此时拿不到对应的id，是因为该调用在于了子组件赋值给父组件的selected
      this.$nextTick(()=>{
        // 利用这个函数可以拿到对应的id，因为它主要作用于vue渲染之后
        // console.log(this.selected)
          this.$router.push({
            name: this.selected
          })
      })
      
    }
  }
  // watch: {
  //   selected (newV, oleV) {
  //     this.$router.push({
  //       name: newV
  //     })
  //   }
  // }
}
</script>

<style scoped lang="scss">
.mint-tabbar{
  position: fixed;
  bottom: 0;
}
</style>
