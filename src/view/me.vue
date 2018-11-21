<template>
    <div class="me">
        <secondHeader>我的</secondHeader>
        <!--头部昵称和背景-->
        <div class="userinfo">
            <img src="../../static/img/me.png" alt="">
            <h3>冷月凤清</h3>
        </div>
        <!--我的订单-->
        <div class="menu">
            <span>我的订单</span>
            <span>全部订单&nbsp;&nbsp;<van-icon name="arrow" /></span>
        </div>
        <!--购买商品状态-->
        <div class="state">
            <div>
                <div><van-icon name="pending-payment" /></div>
                <p>待付款</p>
            </div>
            <div>
                <div><van-icon name="pending-deliver" /></div>
                <p>待发货</p>
            </div>
            <div>
                <div><van-icon name="logistics" /></div>
                <p>待收货</p>
            </div>
            <div>
                <div><van-icon name="pending-evaluate" /></div>
                <p>待评价</p>
            </div>

        </div>
        <!--我的收藏-->
        <div class="menu">
            <span>我的收藏</span>
            <span><van-icon name="arrow" /></span>
        </div>
        <!--浏览历史-->
        <div class="menu">
            <span>浏览历史</span>
            <span><van-icon name="arrow" /></span>
        </div>
        <!--优惠券-->
        <div class="menu">
            <span>优惠券</span>
            <span><van-icon name="arrow" /></span>
        </div>
        <!--在线客服-->
        <div class="menu">
            <span>在线客服</span>
            <span><van-icon name="arrow" /></span>
        </div>
    </div>
</template>

<script>
    import secondHeader from '../components/secondHeader'
    export default {
        name: "me",
        components:{
            secondHeader
        }
    }
</script>

<style scoped lang="less">
    .me{
        height: 200px;
        .userinfo{
            background: url("../../static/img/bg.jpg") no-repeat;
            padding: 40px 0;
            img{
                display: block;
                border-radius: 50%;
                width: 100px;
                height: 100px;
                margin: 0 auto;
            }
            h3{
                text-align: center;
                margin-top: 20px;
                color: white;
                font-size: 22px;
            }
        }
        .menu{
            height: 60px;
            line-height: 60px;
            padding: 0px 10px;
            box-sizing: border-box;
            border-bottom: 1px solid #efefef;
            span{
                font-size: 24px;
                &:first-child{
                    float: left;
                    color: black;
                }
                &:nth-child(2){
                    float: right;
                    color: #666;
                }
            }
        }
        .state{
            width: 100%;
            padding: 10px 1%;
            box-sizing: border-box;
            border-bottom: 1px solid #efefef;
            padding-bottom: 20px;
            >div{
                width: 24%;
                display: inline-block;
                &:first-child{
                    div{
                        background-image: linear-gradient( 135deg, #90F7EC 10%, #32CCBC 100%);
                    }
                }
                &:nth-child(2){
                    div {
                        background-image: linear-gradient(135deg, #FFF6B7 10%, #F6416C 100%);
                    }
                }
                &:nth-child(3){
                    div {
                        background-image: linear-gradient(135deg, #81FBB8 10%, #28C76F 100%);
                    }
                }
                &:nth-child(4){
                    div {
                        background-image: linear-gradient(135deg, #E2B0FF 10%, #9F44D3 100%);
                    }
                }
                >div {
                    width: 60%;
                    height: 0; // 设置高为0，让padding撑起高
                    padding-bottom: 60%; /* 让div的高等于宽 */
                    border-radius: 50%;
                    color: white;
                    margin: 20px auto;
                    position: relative;
                    i{
                        font-size: 60px;
                        position: absolute;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%);
                        text-align: center;
                    }
                }
                p{
                    text-align: center;
                }
            }
        }
    }
</style>