<template>
    <div class="addressEdit">
        <div class="topNav">
            <i class="icon iconfont icon-xiangzuo1" @click="goBack()"></i>
            <div class="title">地址编辑</div>
        </div>
        <van-address-edit
                :area-list="areaList"
                show-postal
                show-delete
                show-set-default
                show-search-result
                :search-result="searchResult"
                @save="onSave"
                @delete="onDelete"
                @change-detail="onChangeDetail"
        />
    </div>
</template>

<script>
    import areaList from "@/assets/js/area"
    import { mapMutations } from 'vuex'
    export default {
        name: "address-edit",
        data() {
            return {
                areaList,
                searchResult: []
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            onSave(e) {
                let data ={};
                data.name=e.name;
                data.tel = e.tel;
                data.address = e.province+e.city+e.county+e.addressDetail+"";
                data.addressDetail = e.addressDetail;
                data.areaCodel = e.areaCode;
                data.postalCode = e.postalCode;
                data.isDefault = e.isDefault;
                console.log(data);
                // let addressData = JSON.parse(localStorage.getItem("address"))||[];
                // addressData.push(data);
                this.saveAddress(data);
                // localStorage.setItem("address",JSON.stringify(addressData));
            },
            onDelete() {
                Toast('delete');
            },
            onChangeDetail(val) {
                if (val) {
                    this.searchResult = [{
                        name: '黄龙万科中心',
                        address: '杭州市西湖区'
                    }];
                } else {
                    this.searchResult = [];
                }
            },
            ...mapMutations(["saveAddress"])
        }
    }
</script>

<style scoped lang="less">
    .addressEdit{
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