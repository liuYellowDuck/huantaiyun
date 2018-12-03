<template>

<van-tabbar v-model="active">

    <van-tabbar-item icon="home">首页</van-tabbar-item>
    <van-tabbar-item icon="volunteer">志愿者</van-tabbar-item>
    <van-tabbar-item icon="team_normal">志愿团队</van-tabbar-item>
    <van-tabbar-item icon="mine">我的</van-tabbar-item>

<van-icon class-prefix="team_normal" name="/static/team_normal.png" />

<img src="/static/team_normal.png">



</van-tabbar>
</template>

<script>
    export default {
        name: "BottomNav",
         data() {
            return {
            active: 0,
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: 'team_normal';
        src: url('/static/team_normal.png') format('truetype');
    }

    .my-icon {
    font-family: 'team_normal';
    }

    .my-icon-extra::before {
    content: '\e626';
    }
</style>