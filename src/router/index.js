import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Volunteer from '@/components/Volunteer'
import Team from '@/components/Team'
import Mine from '@/components/Mine'
import HomeJinqi from '@/components/HomeJinqi'
import HomeFujin from '@/components/HomeFujin'
import HomeWenming from '@/components/HomeWenming'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
            path: "HomeJinqi",
            name: "HomeJinqi",
            component: HomeJinqi
        },
        {
          path: "HomeFujin",
          name: "HomeFujin",
          component: HomeFujin
        },
        {
        path: "HomeWenming",
        name: "HomeWenming",
        component: HomeWenming
        },
        // 当进入到home时，下面的组件显示
        {
            path: "",
            component: HomeJinqi
        }
    ]
    },
    {
      path: '/Volunteer',
      name: 'Volunteer',
      component: Volunteer
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/', 
      redirect: '/Home' 
    }

  ]
})


