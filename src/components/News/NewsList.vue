<template>
    <div class="news-list page">
        <!-- 如果title的值是要改变的，则将其作为变量绑定:title -->
        <nav-bar title="新闻列表"></nav-bar>
        <div>
            <ul>
                <li v-for="news in newsList" :key="news.id" v-if="flag">
                    <div class="list-content">
                        <router-link :to="{name : 'news.detail',query:{id : news.id}}">
                            <div class="left">
                                <img :src="news.img_url" alt="">
                            </div>
                            
                            <div class="right">
                                <span class="title">{{news.title}}</span>
                                <div class="news-desc">
                                    <span>点击数:{{news.click}}</span>
                                    <span>发表时间:{{news.add_time | converTime('YYYY-MM-DD')}}</span>
                                </div>
                            </div>
                        </router-link>
                    </div>
                    
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
    export default{
        name:"NewsList",
        data(){
            return {
                newsList:[],//新闻列表
                flag:false,
            }
        },
        created() {
            this.$axios.get("getnewslist").then((res)=>{
                console.log(res.data.message);
                this.newsList = res.data.message;
                this.flag = true;

            }).catch((err)=>{
                Console.log("新闻列表异常",err)
            })
        },
    }
</script>
<style scoped lang="scss">
.page{
    padding-left: .15rem;
    padding-right: .15rem;
    background-color: #f9f9f9;
    width: 100%;
    position: absolute;
    min-height: 100%;
    .list-content{
        width: 100%;
        padding: 20px 0;
        border-bottom: dashed 1px #c9c9c9;
        cursor: pointer;
        a{
            text-decoration: none;
        }
        .left{
            float: left;
            width: .7rem;
            line-height: .1rem;
            float: left;
            overflow: hidden;
            img{
                width: 100%;
            }
        }
        .right{
            padding-left: 15px;
            display: inline-block;
            width: 75%;
            .title{
                color: #000;
                font-size: .13rem;
            }
            .news-desc{
                font-size: .11rem;
                color: #72c3f1;
                margin-top: .08rem;
                span{
                    display: inline-block;
                    margin: 0 .01rem 0 .05rem;
                }
            }
        }
    }
}


</style>

