<template>
    <div class="photo-list">
        <nav-bar title="图文列表"></nav-bar>
        <!-- 引入返回导航 -->
        <div class="photo-header">
            <ul>
                <li v-for="info in infos" :key="info.id">
                    <a @click="loadImgs(info.id)">{{info.title}}</a>
                </li>
            </ul>
        </div>
        <!-- 下方的图片 -->
        <div class="list">
            <ul>
                <li v-for="img in imgs" :key="img.id">
                    <a href="">
                        <img v-lazy="img.img_url" alt="">
                        <span class="title">{{img.title}}</span>
                        <br>
                        <span class="zhaiyao">{{img.zhaiyao}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  export default{
      name :"PhotoList",
      data(){
          return {
              imgs:[],//图片数据
              infos:[],//分类信息
          }
      },
      created() {
          //获取路由参数categoryId
          let categoryId = this.$route.params.categoryId;
          this.loadImgs(categoryId);
          // 获取分类信息
          this.$axios.get('/getimgcategory').then((res) => {              
              this.infos = res.data.message;
                //向数组的第一个添加一个全部
                this.infos.unshift({
                    id : 0 ,title :'全部'
                })
            }).catch((err) => {
              console.log("请求分类信息失败" + err)
          });

      },
      methods:{
         loadImgs(categoryId){ 
             
          this.$axios.get('getimages/' + categoryId).then((res) => {
                this.imgs = res.data.message;
                // 判断请求回来的imgs.length == 0
                if( this. imgs.length == 0){
                    // iconfont icon-debug
                    this.$toast({
                        message : '没有图片了...',
                        iconClass : 'iconfont icon-debug'
                    })
                }
            }).catch((err) => {
              console.log("请求图片失败" + err)
          });
         },
      },
      beforeRouteUpdate (to, from, next) {
          // 路由复用，参数改变时触发，query||params
        //   console.log(to.params.categoryId);
          this.loadImgs(to.params.categoryId);
          next();
      }
  }   
</script>
<style scoped lang="scss">
.photo-list{
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    padding: 0 .1rem 0 .1rem;
    .list{
        li{
            padding-bottom: .1rem;
        img{
            width: 95%;
            height: 2rem;
        }
        a{
            text-decoration: none;
                span{
                font-size: .12rem;
                color: #9a9a9a;
                }
                .title{
                    color: #72c3f1;
                }
                .zhaiyao{
                    display: block;
                    font-size: .1rem;
                    margin-top: .05rem;
                    min-height: .5rem;
                    line-height: .15rem;
                }
            }
        }

        
    }
}
// 懒加载的样式
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>

