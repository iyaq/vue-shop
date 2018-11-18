<template>
    <div class="goodItem" @click="viewDetail(goodid)">
        <img :src="img" alt="" class="good_img">
        <div class="good_desc">{{desc}}</div>
        <div class="good_price">
            ￥{{price}}&nbsp;&nbsp;<span>￥{{discount}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "good-item",
        props:{
            goodid:String,
                img:String,
                desc:{
                    type:String,
                    default:"请输入商品描述"
                },
                price:{
                    type:null,
                    default:"商品价格"
                },
                discount:{
                    type:null,
                    default:"不打折昂"
                }
        },
        methods:{
            viewDetail(id){
                this.$emit('viewDetail',id)
            }
        }
    }
</script>

<style scoped lang="less">
    .goodItem{
        width: 100%;
        text-align: left;
        img{
            display: block;
            width: 100%;
        }
        >div{
            padding-left: 10px;
            font-weight: 600;
        }
        .good_desc{
            margin-top: 10px;
            font-size: 26px;
            line-height: 30px;
            white-space:nowrap;
            overflow:hidden;
            text-overflow:ellipsis;

        }
        .good_price{
            font-size: 30px;
            line-height: 34px;
            color: darkred;
            margin-top: 10px;
            span{
                font-size: 16px;
                color: #333333;
                text-decoration: line-through;
            }
        }
    }
</style>