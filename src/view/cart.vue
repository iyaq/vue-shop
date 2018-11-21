<template>
    <div class="cart">
        <secondHeader>确认订单</secondHeader>
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
        <!--商品列表-->
        <div class="shopList">
            <h3 class="shoplist_title">我的商品</h3>
            <div class="shoplist_content">
                <div class="shoplist_item">
                    <van-card
                            num="2"
                            tag="标签"
                            price="2.00"
                            desc="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
                            title="红心项链红心项链红心项链红心项链红心项链红心项链红心项链红心项链红心项链红心项链红心项链红心项链"
                            thumb="https://gd3.alicdn.com/imgextra/i3/291631227/TB2R95Ue3nH8KJjSspcXXb3QFXa_!!291631227.jpg_400x400.jpg"
                            origin-price="10.00"
                    >
                        <div slot="footer">
                            <van-button size="mini">删除</van-button>
                        </div>
                    </van-card>
                </div>
            </div>
        </div>
        <!--商品总额-->
        <div class="acount">
            <h3 class="acount_title">商品总额</h3>
            <div class="acount_main">
                <p class="acount_main_desc">
                    <span class="acount_main_desc_light">订单总金额</span>
                    <span class="acount_main_desc_light">￥129</span>
                </p>
                <p class="acount_main_desc">
                    <span>商品金额</span>
                    <span>￥129</span>
                </p>
                <p class="acount_main_desc">
                    <span>运费</span>
                    <span>￥0</span>
                </p>
            </div>
        </div>
        <!--支付按钮-->
        <div class="pay">
            <p class="payBtn payBtn1">货到付款</p>
            <p class="payBtn payBtn2">在线支付</p>
        </div>
    </div>
</template>

<script>
    import secondHeader from '../components/secondHeader'
    export default {
        name: "cart",
        components:{
            secondHeader
        },
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
        .shopList{
            .shoplist_title{
                border-bottom: 1px solid #999;
                height: 50px;
                line-height: 50px;
                padding-left: 10px;
                margin: 0px;
                text-align: left;
                box-sizing: border-box;
            }
            .shoplist_content{
                .shoplist_item{
                    margin: 5px auto;
                    height: 150px;
                    line-height: 150px;
                    padding: 5px 10px;
                    box-sizing: border-box;
                    .van-card{
                        height: 100%;
                    }
                }
            }

        }
        .acount {
            .acount_title {
                border-bottom: 1px solid #999;
                height: 50px;
                line-height: 50px;
                padding-left: 10px;
                margin: 0px;
                text-align: left;
                box-sizing: border-box;
            }
            .acount_main{
                padding: 10px;
                .acount_main_desc{
                    &:nth-child(1){
                        color: darkred;
                    }
                    width: 100%;
                    height: 50px;
                    line-height: 50px;
                    span{
                        display: inline-block;
                        &:first-child{
                            float: left;
                        }
                        &:nth-child(2){
                            float: right;
                        }
                    }
                }
            }
        }
        .pay{
            position: fixed;
            bottom: 10px;
            width: 100%;
            .payBtn{
                width: 43%;
                height: 50px;
                line-height: 50px;
                float: left;
                text-align: center;
                border-radius: 5px;
                margin: 0px 3%;
            }
            .payBtn1{
                border: 1px solid #666;
                color: #999;
            }
            .payBtn2{
                float: right;
                background: darkred;
                color: white;
            }
        }
    }
</style>