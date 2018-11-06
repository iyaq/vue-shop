<template>
    <div class="home">
        <my-header></my-header>
        <Carousel :swiperData = 'swiperData'></Carousel>
        <div class="class_top">
            <div >
                <i class="icon iconfont">&#xe7b7;</i>
                <span>酒类</span>
            </div>
            <div >
                <i class="icon iconfont">&#xe7b2;</i>
                <span>香烟</span>
            </div>
            <div >
                <i class="icon iconfont">&#xe7b6;</i>
                <span>饮料</span>
            </div>
            <div >
                <i class="icon iconfont">&#xe7ba;</i>
                <span>零食</span>
            </div>
            <div >
                <i class="icon iconfont">&#xe7b1;</i>
                <span>日用</span>
            </div>
        </div>
        <div class="recommend">
            <div class="title">今日推荐</div>
            <div class="content" v-for="item in recommonData">
                <div class="item">
                    <img v-lazy="item.imgurl" alt="">
                    <div class="item_text">
                        <span>{{item.type}}{{item.discount}}</span>
                        <span>剩{{item.remainday}}天</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="class_bottom"></div>
    </div>
</template>

<script>
    import MyHeader from '@/components/myHeader'
    import Carousel from '@/components/carousel'
    import axios from "axios"
    export default {
        name: "home",
        components:{MyHeader,Carousel},
        data(){
            return {
                swiperData:[],
                recommonData:[],
            }
        },
        mounted(){
          this.getIndexData();
        },
        methods:{
            getIndexData(){
                axios.get("/api/index.json")
                    .then(response => {
                        this.swiperData = response.data.swiper;
                        this.recommonData = response.data.recommonData;
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    .home{
        .class_top,
        .class_bottom{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            >div{
                flex: 1;
                margin: 20px;
                i{
                    border: 1px solid darkblue;
                    border-radius: 50%;
                    display: block;
                    width: 60%;
                    height: 65%;
                    font-size: 40px;
                    margin: 5px auto 10px;
                    padding: 10px;
                    box-sizing: border-box;
                    text-align: center;
                }
                span{
                    display: block;
                    text-align: center;
                }
                &:hover i{
                    background: darkblue;
                    color: white;
                    transition: all 500ms linear;
                }
            }
        }
        .recommend{
            .title{
                text-align: center;
                font-size: 28px;
                height: 50px;
                line-height: 50px;
                border-top: 1px solid darkred;
                border-bottom: 1px solid darkred;
                font-weight: 600;
            }
            .content{
                .item{
                    margin: 5px;
                    img{
                        width: 100%;
                        height: 180px;
                        display: block;
                    }
                    img[lazy="loading"]{
                        display: block;
                        width: 50px;
                        height: 50px;
                        margin: 0 auto;
                    }
                    .item_text{
                        box-sizing: border-box;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        font-size: 20px;
                        padding: 10px;
                    }
                }

            }
        }
    }
</style>