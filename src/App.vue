<template>
  <div id="app3">
    <router-view></router-view>
    <!--3，将组件写入页面-->
    <Bottom></Bottom>
  </div>
</template>

<script>

import Bottom from './components/Bottom.vue'
export default {
  name: 'App',
  components:{
      Bottom
  }
}

</script>

<style>

  *{
    margin: 0;
    padding: 0;
    border: none;
    border: 0;
    
  }


  html, body {
    background-color: #fafafa;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    color: #666666;
    font-size: 14px;
    width: 100%;
    height: 100%;

  }


  div{
    position: relative;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .relative{
    position: relative
  }
.blue{
    color: #26a2ff;
}
.text-overflow{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.text-overflows{
  display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
}
.font12{
  font-size: 12px;
}
</style>
