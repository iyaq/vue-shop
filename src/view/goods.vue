<template>
    <div>
        <h1>商品详情页</h1>
        <h3>我是第二个按钮传递过来的参数：{{$route.params.goodid}}</h3>
        <h3>我是第三个按钮传递过来的参数：{{$route.query.goodid}}</h3>
        <button @click="goback">返回</button>
        <div class="content">
            <select name="" id="" v-model="selected">
                <option value="" disabled>请选择</option>
                <option value="杭州" >杭州</option>
                <option value="广州" >广州</option>
                <option value="长沙" >长沙</option>
            </select>
            <button  @click="isubmit(selected)">提交</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: "goods",
        data(){
          return{
              selected:''
          }
        },
        created(){

        },
        methods:{
            goback(){
                this.$router.go(-1);
            },
            isubmit(city){
                this.changeCity(city)
            },
            ...mapActions(["changeCity"])
        }
    }
</script>

<style scoped>

</style>