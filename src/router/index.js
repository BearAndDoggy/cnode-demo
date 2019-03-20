import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import User_info from '../components/User_info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'content',
      path: '/topic/:id',
      components: {
        main: Article
      }
    },
    {
      name: 'user_info',
      path: '/user/:name',
      components: {
        main: User_info
      }
    }
  ]
})
