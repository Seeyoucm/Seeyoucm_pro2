import Vue from 'vue'
import Router from 'vue-router'
// 引入各个组件
import Home from '@/components/Home/Home'
import Member from '@/components/Member/Member'
import Search from '@/components/Search/Search'
import Shopping from '@/components/Shopping/Shopping'
import NewsList from '@/components/News/NewsList'
import NewsDetail from '@/components/News/NewsDetail'
import PhotoList from '@/components/Photo/PhotoList'


// 全局注册组建router-view router-link，挂载Vue.prototype.$router || $route

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 打开页面自动重定向到首页
      path: '/',
      redirect:{name : "home"}//命令路由的跳转，建议
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    },
    // 新闻列表
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    },
    // 新闻详情
    {
      path: '/news/detail',
      name: 'news.detail',
      component: NewsDetail
    },
    // 图文列表
    {
      path: '/photo/list/:categoryId',
      name: 'photo.list',
      component: PhotoList
    },
  ]
})
