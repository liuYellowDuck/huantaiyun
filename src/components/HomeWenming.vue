<template>
<div>
        
<h2>文明实践</h2>
    <mt-tabbar v-model="currentId">
        <mt-tab-item id="home">
            <!-- <img slot="icon" :src="[currentId == 'home' ? require('') : require('')]"> -->
            <img slot="icon" :src="currentId == 'home'">
            首页
        </mt-tab-item>
        <mt-tab-item id="discover">
            <!-- <img slot="icon" :src="[currentId == 'discover' ? require('') : require('')]"> -->
            <img slot="icon" :src="currentId == 'discover'">
            发现
        </mt-tab-item>
        <mt-tab-item id="order">
            <!-- <img slot="icon" :src="[currentId == 'order' ? require('') : require('')]"> -->
            <img slot="icon" :src="currentId == 'order'">
            订单
        </mt-tab-item>
        <mt-tab-item id="profile">
            <!-- <img slot="icon" :src="[currentId == 'profile' ? require('') : require('')]"> -->
            <img slot="icon" :src="currentId == 'profile'">
            我的
        </mt-tab-item>
    </mt-tabbar>

</div>
        
</template>
<script>
export default {
    name:"HomeWenming",
    data() {
        return {
            currentId: "home"
        }
    },
    watch: {
        // 实现路由跳转
        currentId: function(val, oldVal) {
            this.$router.push("/" + val);
        }
    }

}
</script>

<style>
.navbar-image{
    width: 16px;
    padding-right: 10px;
    vertical-align: middle;
}
</style>


