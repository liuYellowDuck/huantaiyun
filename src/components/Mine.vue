<template>
    <div>
        <h1>我的信息!</h1>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
    export default {
        name : 'Mine',
        data(){
            return{
                msg:'Mine'
            }
        }
    }
</script>