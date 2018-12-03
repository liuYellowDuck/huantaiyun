<template>
    <div>
        <div id="tophead">
        <mt-header title="首页"></mt-header>
        
        
        <HomeLunbo></HomeLunbo>
        <mt-navbar v-model="selected">

            <mt-tab-item id="HomeJinqi"><router-link :to="{name:'HomeJinqi'}"><img class="navbar-image" src="/static/img/new_normal.png">近期活动</router-link></mt-tab-item>
            <mt-tab-item id="HomeFujin"><router-link :to="{name:'HomeFujin'}"><img class="navbar-image" src="/static/img/nearby_normal.png">附近活动</router-link></mt-tab-item>
            <mt-tab-item id="HomeWenming"><router-link :to="{name:'HomeWenming'}"><img class="navbar-image" src="/static/img/civilizat_normal.png">文明实践</router-link></mt-tab-item>
        
        </mt-navbar>

        </div>
        
        <!-- <div id="content_list"  :style="{ 'margin-top': topheight + 'px' }"> -->
        <div id="content_list"  :style="{ 'height': listheight + 'px' }">
        <router-view></router-view>
        </div>


    </div>
</template>

<script>
import HomeLunbo from '@/components/HomeLunbo.vue'
export default {
    name : 'Home',
    components:{
        HomeLunbo
        
    },
    data(){
        return{
            msg:'HOME',
            selected:'HomeJinqi',
            listheight:0
        }
    },
    methods:{
        getheight(){
            this.listheight = document.body.clientHeight  - Math.ceil(document.body.clientWidth * 200/414 +91) - 55;
        }
       
    },    
    mounted:function(){
        this.getheight();

        console.log(this.listheight);
    }
        
}

            

    
</script>
<style>
.mint-swipe{
    margin-bottom: 0 !important;
}
#content_list{
    overflow: scroll;
}

#tophead{
    /* position: fixed;
    width: 100%;
    top: 0; */
}

</style>







