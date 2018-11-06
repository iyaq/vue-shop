<template>
    <div class="carousel">
       <!-- <md-card>
            <md-card-media>-->
                <!-- swiper -->
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide v-for="(item,index) in swiperData" :key="index"><img :src="item" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            <!--</md-card-media>
        </md-card>-->
    </div>
</template>

<script>
    import "swiper/dist/css/swiper.css";
    import {swiper,swiperSlide} from "vue-awesome-swiper";
    export default {
        name: "carousel",
        components:{swiper,swiperSlide},
        props:{
            swiperData:{
                type:Array,
                default:[]
            }
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    },
                    autoplay:{
                        delay: 2500,
                        disableOnInteraction:false
                    }
                }
            }
        },
        computed:{
            swiper() {
                return this.$refs.mySwiper.swiper;
            }
        },
        mounted(){
            this.swiper.slideTo(3,1000,false);
        }
    }
</script>

<style scoped lang="less">
    .carousel{
        /deep/ .swiper-pagination-bullet-active{
            background: darkred;
        }
        .swiper-wrapper{
            width: 100%;
            height: 250px;

            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>