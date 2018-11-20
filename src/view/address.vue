<template>
    <div class="address">
        <div class="topNav">
            <i class="icon iconfont icon-xiangzuo1" @click="goBack()"></i>
            <div class="title">请选择收货地址</div>
        </div>
        <van-address-list
                v-model="chosenAddressId"
                :list="list"
                :disabled-list="disabledList"
                disabled-text="以下地址超出配送范围"
                @add="onAdd"
                @edit="onEdit"
                add-button-text="新增地址"
        />
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "address",
        data(){
            return{
                chosenAddressId: '1',
                list: [
                    {
                        id: '1',
                        name: '张三',
                        tel: '13000000000',
                        address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                    },
                    {
                        id: '2',
                        name: '李四',
                        tel: '1310000000',
                        address: '浙江省杭州市拱墅区莫干山路 50 号'
                    }
                ],
                disabledList: [
                            {
                                id: '3',
                                name: '王五',
                                tel: '1320000000',
                                address: '浙江省杭州市滨江区江南大道 15 号'
                            }
                        ]
            }
        },
        created(){
            // this.list = JSON.parse(localStorage.getItem("address"))
        },
        mounted(){
            let addresslist = this.getAddress;
            this.list = this.getAddress;
            addresslist.forEach((element,idx)=>{
                element.id = idx+"";
                if(element.isDefault){
                    this.chosenAddressId = element.id;
                }
            })
        },
        computed:{
          ...mapGetters(["getAddress"])
        },
        methods:{
            onAdd() {
                this.$router.push({
                    path:'/addressEdit'
                })
            },

            onEdit(item, index) {
                this.$router.push({
                    path:'/addressEdit'
                })
            },
                goBack(){
                    this.$router.go(-1);
                },
        }

    }
</script>

<style scoped lang="less">
    .address{
        .topNav {
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

            div {
                display: inline-block;
            }
        }
    }

</style>