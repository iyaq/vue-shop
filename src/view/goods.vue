<template>
    <div>
        <h1>商品详情页</h1>
        <h3>我是第二个按钮传递过来的参数：{{$route.params.goodid}}</h3>
        <h3>我是第三个按钮传递过来的参数：{{$route.query.goodid}}</h3>
        <button @click="goback">返回</button>
    </div>
</template>

<script>
    export default {
        name: "goods",
        methods:{
            goback(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

</style>