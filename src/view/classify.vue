<template>
    <div class="classify">
        <secondHeader>分类</secondHeader>
        <div class="main" :style="{height:mainHeight}">
            <div class="leftNav wrapper" :style="{height:mainHeight}" ref="wrapper">
                <div class="item content" v-for="(item,index) in classify" :class="currentIndex ==item.id?'item_on':''" @click="menuClick(item.id)">{{item.name}}</div>
            </div>

            <div class="rightMain wrapper" v-for="item,index in menuDetail" v-if="currentIndex == item.id" ref="wrapper">
                <div class="topImg">
                    <img :src="item.topImg" alt="">
                </div>
                <div class="container content" >
                    <div class="container_item" v-for="it in item.details">
                        <div class="title">{{it.title}}</div>
                        <div class="content">
                            <div class="content_item" v-for="tmp in it.icon" @click="itemClick(tmp.name)">
                                <i class="icon icon-font" :class="tmp.iconImg"></i>
                                <div class="txt">
                                    {{tmp.name}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import BScroll from "better-scroll"
    import axios from "axios"
    import secondHeader from '../components/secondHeader'
    export default {
        name: "classify",
        components:{BScroll,secondHeader},
        data(){
            return {
                mainHeight:{},
                classify:[],
                menuDetail:[],
                currentIndex:1
            }
        },
        created(){
            this.mainHeight = window.innerHeight - 45 + "px";
        },
        mounted(){
            this.getClassify();
            this.currentIndex = this.$route.query.id;
            this.$nextTick(()=>{
                this.scroll = new BScroll(this.$refs.wrapper,{
                    bounce:false,
                    click:true,
                })
            })
        },
        watch:{

        },
        computed:{

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
            getClassify(){
                axios.get("/api/classify.json")
                    .then(response => {
                        this.classify = response.data.navTitle;
                        this.menuDetail = response.data.menuDetail;
                    })
            },
            menuClick(id){
                this.currentIndex = id;
            },
            itemClick(title){
                this.$router.push({
                    path:"/goodList",
                    query:{
                        title:title
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import "../assets/css/variables.less";
    .classify{
        .topNav{
            background: darkred;
            color: white;
            height: 50px;
            line-height: 50px;
            padding: 0 20px;
            box-sizing: border-box;
            .icon{
                display: inline-block;
                vertical-align: middle;
            }
            .icon-xiangzuo1{
                float: left;
            }
            .icon-shouye{
                float: right;
            }
            div{
                display: inline-block;
            }
        }
        .main{
            width: 100%;
            .leftNav{
                background: #ccc;
                width: 80px;
                float: left;
                .item{
                    position: relative;
                    box-sizing: border-box;
                    width: 100%;
                    line-height: 70px;
                    text-align: center;
                }
                .item_on::before{
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width:5px;
                    height: 70px;
                    font-size: 0;
                    background: darkblue;
                }
                .item_on{
                    background: #fff;
                }
            }
            .rightMain{
                width: calc(100% - 80px);
                display: inline-block;
                box-sizing: border-box;
                padding: 20px;
                .topImg{
                    width: 100%;
                    img{
                        display: block;
                        width: 100%;

                    }
                }
                .container{
                    .container_item{
                        margin-top: 30px;
                        .title{
                            font-size: 28px;
                            font-weight: 600;
                            text-align: left;

                        }
                        .content{
                            width: 100%;
                            .content_item{
                                width: 33.3%;
                                float: left;
                                margin: 20px 0;
                            }
                        }
                    }

                }

            }
        }
    }
</style>