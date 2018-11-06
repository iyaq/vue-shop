<template>
    <div class="myHeader">
        <i class="icon iconfont">&#xe751;</i>
        <input type="text" class="searchBox">
        <i class="icon iconfont">&#xe75e;</i>
    </div>
</template>

<script>
    export default {
        name: "my-header",
        data(){
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    .myHeader{
        height: 50px;
        background: darkred;
        width: 100%;
        line-height: 50px;
        .iconfont{
            color: white;
            display: inline-block;
            float: left;
            margin: 0px 15px;
            &:nth-child(3){
                float: right;
            }
        }
        .searchBox{
            width: 70%;
            height: 30px;
            border-radius: 20px;
            float: left;
            margin-top: 10px;
            border: none;
        }
    }
</style>