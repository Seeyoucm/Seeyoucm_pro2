<template>
<div>
    <div class="mint-swipe">
      <!-- 上有轮播图，下有九宫格 -->
      <mt-swipe :show-indicators="false">
        <mt-swipe-item v-for="(img, index) in imgs" :key="index">
            <img :src="img.img" alt="">
        </mt-swipe-item>
      </mt-swipe>
  </div>
  <div class="grid">
    <my-ul>
      <my-li v-for="grid in grids" :key="grid.id">
        <router-link :to="grid.router">
          <span :class="grid.className"></span>
          <span>{{grid.title}}</span>
        </router-link>
      </my-li>
    </my-ul>
    <!-- <ul>
      <li>
        <a href=""></a>
        <span class="cms-news"></span>
        <div>新闻资讯</div>
      </li>
      <li>
        <a href=""></a>
        <span class="cms-photo"></span>
        <div>图文分享</div>
      </li>
      <li>
        <a href=""></a>
        <span></span>
        <div>商品展示</div>
      </li>
      <li>
        <a href=""></a>
        <span></span>
        <div>留言反馈</div>
      </li>
      <li>
        <a href=""></a>
        <span></span>
        <div>搜索咨询</div>
      </li>
      <li>
        <a href=""></a>
        <span></span>
        <div>联系我们</div>
      </li>
    </ul> -->
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      imgs:[],// 轮播图数据
      grids:[
        {id: 1 , className : "cms-news" , title : "新闻资讯" 
        ,router : { name : 'news.list'} },
        {id: 2 , className : "cms-photo" , title : "图文分享" 
        ,router : { name : 'photo.list' ,params :{categoryId : 0}} },
        {id: 3 , className : "cms-show" , title : "商品展示" 
        ,router : {name : 'news.list'}},
        {id: 4 , className : "cms-fan" , title : "留言反馈" 
        ,router : {name : 'news.list'}},
        {id: 5 , className : "cms-find" , title : "搜索咨询" 
        ,router : {name : 'news.list'}},
        {id: 6 , className : "cms-contact" , title : "联系我们" 
        ,router : {name : 'news.list'}},
        ]
    }
  },
  // created创建组件的生命周期函数中，可以操作数据
  created() {
    this.$axios.get("getlunbo").then((res) => {
        this.imgs = res.data.message;
        console.log(res.data.message)
    }).catch((err) => {
        console.log("轮播图获取异常")
    });
  },

}
</script>

<style scoped lang="scss">
.mint-swipe{
  height: 2rem;
  img{
    width:100%;
  }
}  
</style>
