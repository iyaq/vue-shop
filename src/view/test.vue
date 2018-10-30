<template>
    <div class="test">
        <!--动态路由-->
        {{$route.params.testid}}
        <!--嵌套路由-->
        <router-link to="/test/page1">页面1</router-link>
        <router-link to="/test/page2">页面2</router-link>
        <router-view></router-view>
        <!--编程式路由-->
        <button @click="gotogoods">跳转到商品详情页面</button>
        <button @click="gotogoods1">跳转到商品详情页面传参1</button>
        <button @click="gotogoods2">跳转到商品详情页面传参2</button>
        <!--命名路由-->
        <router-link :to="{name:'goods'}">命名路由跳转</router-link>
        <!--命名视图-->
        <!--1、路由的index.js文件路由全部删掉，这样写：
        export default new Router({
          routes: [
            {
                path: '/',
                name: '/',
                component: {
                    default:'Test',
                    page1:'Page1',
                    page2:'Page2'
                },
            }
            ]
            2、进入根路由'/'所在的页面，也就是app.vue，我们第一个router-view不命名就使用默认的，其它两个router-view添加name属性命名
            <router-view />
            <router-view name="page1" />
            <router-view name="page2" />
        -->
        <!--iconfont的使用-->
        <i class="icon iconfont icon-online-shop"></i>
        <i class="icon iconfont">&#xe6c6;</i>
        <i class="icon iconfont icon-bukaixin"></i>
    </div>
</template>

<script>

    export default {
        name: "test",
        methods:{
            gotogoods(){
                this.$router.push('/goods');
            },
            gotogoods1(){
                this.$router.push("/goods?goodid=123");
            },
            gotogoods2(){
                this.$router.push(
                    {
                        path:'/goods',
                        query:{
                            'goodid':677,
                        }
                    }
                );
            }
        }
    }
</script>

<style scoped lang="less">
    @import '~styles/variables.less';

    .test{
        width: 100%;
        height: 300px;
        margin: 0% auto;
        background: @bgColor;
    }
</style>