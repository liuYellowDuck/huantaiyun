<template>
<div>

    <ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="60">
        <!-- <li><h2>{{items[0].name}}</h2></li> -->
        <li v-for="(val, key, index)  in list">
            
            <div class="left">
                <i v-if="val.thumbnail == 'http://zyy.linzicloud.cn/uploads/images/'">
                <img src="/static/img/img_null.jpg">
                </i>
                <i v-else>
                <img :src="val.thumbnail">
                </i>
            </div>
            <div class="right">
                <div class="hang"><p class="text-overflow"><span class="blue border-font">&nbsp;{{val.project_status}}&nbsp;</span>&nbsp;&nbsp;{{val.name}}</p></div>
                <div class="hang font12"><p><span>发起团体：&nbsp;</span><span class="blue duiqi">{{val.groupProfile.name}}</span></p></div>
                <div class="hang font12"><p><span class="">招募日期：&nbsp;</span><span class="blue duiqi">{{val.recruiting_date}}</span></p></div>
                <div class="hang font12"><p><span class="">计划招募({{val.recruiting_planning}})：&nbsp;</span><span class="blue">已招募：{{val.recruited}}</span></p></div>
                
            </div>
            
        </li>
        <li id="load_over">加载完毕</li>
    </ul>
    <div v-show="loading" class="page-infinite-loading">
            <div style="width:50px;position:relative;margin:0 auto;">
                <mt-spinner type="fading-circle"></mt-spinner>
            </div>
            <p style="text-align:center;line-height:30px;">加载中……</p>
    </div>
     
</div>
        
</template>
<script>

export default {
    name:"HomeJinqi",
    data:function (){
        return {
            list:{},
            meta:0,
            loading: false,
        }
    },
    methods:{
        getdata(){
            if(this.meta == 0){
                this.$axios.get("/api/projects?include=groupProfile")
                .then(res=>{
                    res = JSON.parse(res.request.response);
                    this.meta = res.meta;
                    this.list = res.data;
                })
            }else{
                    this.meta.pagination.next_page = this.meta.pagination.current_page + 1;
                    this.$axios.get("/api/projects?include=groupProfile&page="+this.meta.pagination.next_page)
                    .then(res=>{
                        res = JSON.parse(res.request.response);
                        this.meta = res.meta;
                        console.log("当前："+this.meta.pagination.current_page);
                        for (let i = 0; i <= this.meta.pagination.count-1; i++) {
                            this.list.push(res.data[i]);
                        }
                    })
                
            }
           
        },
        
        loadMore() {
            // console.log('开始了？');
            if(this.meta.pagination.current_page == this.meta.pagination.total_pages){
                this.loading = false;
                document.getElementById("load_over")

            }else{
                this.loading = true;
                setTimeout(() => {
                    this.getdata();
                    this.loading = false;
                }, 5000);
            }
           
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
    border-bottom: 1px solid #cccccc;
    padding: 20px 20px;
    position: relative;
    
}
.left{
    position: absolute;
    width: 60px;
}
.left img{
    width: 100%;
    border-radius: 50%;
}
.right{
    position: relative;
    margin-left: 70px;
    color: #333333;
}
.border-font{
    font-size: 12px;
    border: 1px solid #26a2ff;
}
.hang{
    padding-bottom: 8px;
}
.duiqi{
    position: relative;
    display: block;
    margin-left: 64px;
    margin-top: -16px;
}
.page-infinite-loading{
    padding-top: 10px;
    padding-bottom: 30px;
}
#load_over{
    text-align: center;
    height: 50px;
    list-style: none;
    display:none;
    
}
</style>


