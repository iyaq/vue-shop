<template>
    <div class="goodlist">
        <my-header></my-header>
        <iFilter></iFilter>
        <div class="goods" >
            <div class="good_item" v-for="(item,index) in list" :key="index">
                <goodItem :img="item.goodImg" :desc="item.desc" :price="item.price" :discount="item.discount" @viewDetail="showDetail(item.goodId)"></goodItem>
            </div>

        </div>

    </div>
</template>

<script>
    import MyHeader from '@/components/myHeader'
    import iFilter from "../components/filter"
    import goodItem from "../components/goodItem"
    import axios from "axios"
    export default {
        name: "good-list",
        components:{
            MyHeader,iFilter,goodItem
        },
        data(){
            return{
                list:[]
            }
        }   ,
        mounted(){
            this.getGoodList();
        },
        methods:{
            getGoodList(){
                //获取商品列表数据
                axios.get("/api/goodsList.json").then(res=>{
                    if(res.data.code == 200) {
                        this.list = res.data.goodslist
                    }
                })
            },
            showDetail(id){
                this.$router.push({
                    path:"/goodDetail",
                    query:{
                        goodId:id
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .goodlist{
        .goods{
            width: 100%;
            .good_item{
                width: 48%;
                float: left;
                margin: 1%;
            }
        }
    }
</style>