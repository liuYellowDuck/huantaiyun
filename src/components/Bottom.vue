<template>

<mt-tabbar v-model="selected" fixed>
  <mt-tab-item id="home" href='#/'>
    <img slot="icon" src="/static/img/home_normal.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="volunteer" href='#/Volunteer'>
    <img slot="icon" src="/static/img/volunteer_normal.png">
    志愿者
  </mt-tab-item>
  <mt-tab-item id="team" href='#/Team'>
    <img slot="icon" src="/static/img/team_normal.png">
    志愿团队
  </mt-tab-item>
  <mt-tab-item id="mine" href='#/Mine'>
    <img slot="icon" src="/static/img/my_normal.png">
    我的
  </mt-tab-item>


  <!-- // <router-link tag="mt-tab-item" id="home" :to="{name:'Home'}">
  //   <img slot="icon" src="/static/img/home_normal.png">
  //   首页
  // </router-link>
  // <router-link tag="mt-tab-item" id="volunteer" :to="{name:'Volunteer'}">
  //   <img slot="icon" src="/static/img/volunteer_normal.png">
  //   志愿者
  // </router-link>
  // <router-link tag="mt-tab-item" id="team" :to="{name:'Team'}">
  //   <img slot="icon" src="/static/img/team_normal.png">
  //   志愿团队
  // </router-link>
  // <router-link tag="mt-tab-item" id="mini" :to="{name:'Mine'}">
  //   <img slot="icon" src="/static/img/my_normal.png">
  //   我的
  // </router-link> -->
  
  <!-- <router-view></router-view> -->
</mt-tabbar>

</template>





<script>
    export default {
        name: "Bottom",
         data() {
             return{
                 selected: 'home'
             }
           
        }
    }
</script>

<style scoped>

</style>