<template>
    <div class="header">
        <i class="icon iconfont icon-xiangzuo1" @click="goBack()"></i>
        <div class="title">{{$route.query.title}}</div>
        <i class="icon iconfont icon-shouye" @click="goHome()"></i>
    </div>
</template>

<script>
    export default {
        name: "header",
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            goHome(){
                this.$router.push({
                    path:'/'
                })
            },
        }
    }
</script>

<style scoped lang="less">
    .header {
        background: darkred;
        color: white;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
        box-sizing: border-box;
        .icon {
            display: inline-block;
            vertical-align: middle;
        }
        .icon-xiangzuo1 {
            float: left;
        }
        .icon-shouye {
            float: right;
        }
        div {
            display: inline-block;
        }
    }
</style>