<template>
<div>
    <div class="page-swipe">
            <mt-swipe :auto="4000">
                
                <mt-swipe-item v-for="(val, key,index)  in images">
                    <img :src="val.thumbnail">
                </mt-swipe-item>
                
            </mt-swipe>
    </div>
    
</div>
    
</template>
<script>
    export default {
        name : 'HomeLunbo',
        data(){
            return{
                msg:'HOME',
                images:{}
            }
        },
        methods:{
            getdata(){
                this.$axios.get("/api/banner")
                .then(res=>{
                    res = JSON.parse(res.request.response);
                    this.images = res.data;
                })
            },
        },
        mounted:function(){
            this.getdata();
        }

        
    }
</script>
<style>
    .mint-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
      }

      .mint-swipe-item {
        line-height: 200px;
      }
      img{
          width: 100%;
      }



     
</style>
