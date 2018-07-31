<template>
        <div class="list-header">
            <div class="pic" @click="goback">
                <img src="../../assets/img/goback.png" alt="">
            </div>
            <h1 class="page-title">{{title}}</h1>
        </div>

</template>
<script>
  export default{
      name:"NavBar" ,
      props:['title'],//父传子，数据传过来以后可以直接使用
      methods:{
          goback(){
              this.$router.go(-1);
          }
      }
  }  
</script>
<style scoped lang="scss">
.list-header{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    border-bottom: dashed 2px #c9c9c9;
}
.pic{
    float: left;
    height: .3rem;
    margin-top: .1rem;
    width: .3rem;
    img{
        width: 100%;
        height: 100%;
    }
}
h1{
    float: right;
    height: .5rem;
    width: 89%;
    line-height: .5rem;
    text-align: center;
}
</style>

