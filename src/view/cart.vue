<template>
    <div class="cart">
        <div class="topNav">
            <i class="icon iconfont icon-xiangzuo1" @click="goBack()"></i>
            <div class="title">确认订单</div>
            <i class="icon iconfont icon-shouye" @click="goHome()"></i>
        </div>
        <!--收货地址-->
        <div class="address">
            <div class="address_left">
                <i class="icon iconfont icon-zuobiao"></i>
                <span>请填写收货地址</span>
            </div>
            <div class="address_right">
                <i class="icon iconfont icon-xiangyou1" @click="setAddress"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cart",
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            goHome(){
                this.$router.push({
                    path:'/'
                })
            },
            setAddress(){
                this.$router.push({
                    path:'/address'
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .cart{
        .topNav{
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
        .address{
            background: darkblue;
            color: white;
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
            box-sizing: border-box;
            .icon {
                display: inline-block;
                vertical-align: middle;
            }
            .icon-xiangyou1 {
                float: right;
            }
            .icon-zuobiao {
                float: left;
            }
            span{
                float: left;
                display: inline-block;
                margin-left: 10px;
            }
        }
    }
</style>