<template>
<div>
    
    <ul>
        <li>你好</li>
        <!-- <li><h2>{{items[0].name}}</h2></li> -->
        <li v-for="(val, key, index)  in content">
            <div class="left">
                <i v-if="val.thumbnail == 'http://zyy.linzicloud.cn/uploads/images/'">
                <img src="/static/img/img_null.jpg">
                </i>
                <i v-else>
                <img :src="val.thumbnail">
                </i>
            </div>
            <div class="right">
                <p><span class="blue">{{val.project_status}}</span>{{val.name}}</p>
                <p><span>发起团体:</span><span class="blue">{{val.groupProfile.name}}</span></p>
                <p><span class="blue">招募日期:</span><span class="blue">{{val.recruiting_date}}</span></p>
                <p><span class="blue">计划招募:{{val.recruiting_planning}}</span><span class="blue">已招募：{{val.recruited}}</span></p>
                
            </div>
            
        </li>
    </ul>
</div>
        
</template>
<script>

export default {
    name:"HomeFujin",
    data:function (){
        return {content:{}}
    },
    methods:{
        getdata(){
            this.$axios.get("/api/projects?include=groupProfile")
            .then(res=>{
                res = JSON.parse(res.request.response);
                this.content = res.data;
            })
        }
    },
    mounted:function(){
            this.getdata();
    }     


}

</script>

<style>
.navbar-image{
    width: 16px;
    padding-right: 10px;
    vertical-align: middle;
}
li{
    border-bottom: 1px solid #666666;
    padding:15px 15px;
    position: relative;
    
}
.left{
    position: absolute;
    width: 60px;
}
.left img{
    width: 100%;
}
.right{
    position: relative;
    margin-left: 65px;
}

</style>


