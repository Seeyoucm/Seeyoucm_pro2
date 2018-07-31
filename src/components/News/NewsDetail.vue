<template>
    <div class="details">
        <nav-bar title="新闻详情"></nav-bar>
        <div class="news-title">
            <h3>{{detail.title}}</h3>
            <div class="desc">
                <span>{{detail.click}}次点击</span>
                <span>分类：民生经济</span>
                <span>添加时间：{{detail.add_time | converTime('YYYY-MM-DD')}}</span>
            </div>
            <div class="news-content" v-html="detail.content">新闻明细</div>
        </div>
    </div>
    
</template>
<script>
 export default{
     name:'NewsDetail',
     data(){
         return{
             detail:{},//新闻详情
         }
     },
     created() {
        //  获取路由查询字符串id
        let id = this.$route.query.id;
         this.$axios.get('getnew/' + id).then((res) => {
            //  console.log(res.data.message[0])
            //  注意：需要的是返回的一个对象，res.data.message此时为一个数组
             this.detail = res.data.message[0]
         }).catch((err) => {
             console.log("请求新闻详情失败" + err)
         });
     },
 }    
</script>
<style scoped lang="scss">
.details{
    padding:0 .1rem 0 .1rem;
    box-sizing: border-box; 
}
.news-title{
    h3{
    font: normal .2rem "微软雅黑",Microsoft Yahei,"黑体";

    }
    .desc{
        font-size: .11rem;
        color: #72c3f1;
        padding: .1rem 0;
    }
    .news-content{
        font: 14px/1.75em Arial,"宋体";
    }
}
</style>

