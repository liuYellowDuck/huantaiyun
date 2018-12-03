<template>
<div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1"><img class="navbar-image" src="/static/img/new_normal.png">近期活动</mt-tab-item>
            <mt-tab-item id="2"><img class="navbar-image" src="/static/img/nearby_normal.png">附近活动</mt-tab-item>
            <mt-tab-item id="3"><img class="navbar-image" src="/static/img/civilizat_normal.png">文明实践</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
        </mt-tab-container-item>
        </mt-tab-container>    
</div>
        
</template>
<script>
export default {
    name:"HomeNav",
    data:{
        return:{
            selected:"1"
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


