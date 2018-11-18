<template>
    <div class="goodDetail">
        <my-header></my-header>
        <!--顶部轮播图-->
        <Carousel :swiperData = 'good.goodImg' @swiperImgClick = "swiperImgClick"></Carousel>
        <!--价格信息-->
        <div class="product_meta">
            <p><span>￥{{good.price}}</span><span>￥{{good.discount}}</span><span>已售{{good.soldout}}件</span></p>
            <p>{{good.desc}}</p>
        </div>
        <!--尺码-->
        <div class="product_size">
            <div>
                <h3>尺码</h3>
                <div class="box">
                    <el-radio-group v-model="sizevalue" size="mini">
                        <el-radio-button v-for="value,key in good.sizeandnum" :disabled="value<=0" :label="key" ></el-radio-button>
                    </el-radio-group>
                </div>
            </div>
        </div>
        <!--商务文案-->
        <div class="product_text">
            <ul>
                <li>
                    <i class="icon iconfont icon-yuanxingxuanzhong"></i><span>正品保障</span>
                    <i class="icon iconfont icon-yuanxingxuanzhong"></i><span>商品免邮</span>
                    <i class="icon iconfont icon-yuanxingxuanzhong"></i><span>极速退款</span>
                </li>
            </ul>
        </div>
        <!--详情图片-->
        <div class="product_detail">
{{good.desc}}
        </div>
        <!--底部购物栏-->
        <div class="shopcart">
            <i class="icon iconfont icon-gouwuche"></i>
            <div @click="gotocart">加入购物车</div>
        </div>
    </div>
</template>

<script>
    import Carousel from '@/components/carousel'
    import MyHeader from "../components/myHeader"
    import axios from "axios"
    import {ImagePreview} from "vant"
    export default {
        name: "good-detail",
        components:{Carousel,MyHeader},
        data(){
            return{
                good:{},
                swiperData:[],
                sizevalue:''
            }
        },
        mounted(){
            this.getGoodDetail();
        },
        methods:{
            getGoodDetail(){
                //获取商品列表数据
                axios.get("/api/goodDetail.json").then(res=>{
                    if(res.data.code == 200) {
                        console.log(res.data);
                        this.good = res.data.goodDetail;
                        this.swiperData = res.data.goodDetail.goodImg;
                    }
                })
            },
            swiperImgClick(){
                ImagePreview(this.swiperData);
            },
            gotocart(){
                this.$router.push({
                    path:"/cart",
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .goodDetail{
        .carousel {
            .swiper-wrapper {
                height: 400px;
            }
        }
        >div{
            padding: 0px 20px;
            box-sizing: border-box;
        }
        .product_meta{
            height: 70px;
            >p{
                text-align: left;
                &:first-child{
                    line-height: 30px;
                    span{
                        display: inline-block;
                        font-size: 500px;

                        &:first-child{
                            color: darkred;
                            font-size: 26px;
                            margin-right: 10px;
                        }
                        &:nth-child(2){
                            font-size: 14px;
                            color: #666;
                            text-decoration: line-through;
                        }
                        &:nth-child(3){
                            float: right;
                            font-size: 24px;
                            color: #666;
                        }
                    }
                }
                &:nth-child(2){
                    font-size: 18px;
                    padding-bottom: 10px;
                    margin: 10px 0px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp:2;
                    -webkit-box-orient: vertical;
                    border-bottom: 1px solid #efefef;
                }
            }
        }
        .product_size{

            text-align: left;
            >div{
                border-bottom: 1px solid #efefef;
                height: 50px;
                line-height: 50px;
                h3{
                    font-size: 26px;
                    font-weight: 500;
                    width: fit-content;
                    display: inline-block;
                    margin-right: 20px;
                }
                .box{
                    width: fit-content;
                    display: inline-block;
                    .el-radio-button{
                        margin-right: 20px;
                    }
                }
            }

        }
        .product_text{
            ul{
                border-bottom: 1px solid #efefef;
                width: 100%;
                height: 50px;
                line-height: 50px;
                text-align: left;
                li{
                    display: inline-block;
                    width: content-box;
                    margin-right: 20px;
                }
            }
        }
        .shopcart{
            width: 100%;
            position: fixed;
            bottom: 0px;
            height: 70px;
            line-height: 70px;
            padding: 5px;
            box-sizing: border-box;
            i{
                display: inline-block;
                width: 20%;
                height: 100%;
                border: 1px solid #666;
                text-align: center;
                font-size: 32px;
                font-weight: 600;
                border-radius: 2px;
            }
            div{
                display: inline-block;
                width: 65%;
                float: right;
                background: darkred;
                color: white;
                text-align: center;
                height: 100%;
            }
        }
    }
</style>