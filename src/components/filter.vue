<template>
    <div class="filter">
        <div class="filter_item filter_normal">
            <span>综合排序</span>
        </div>
        <div class="filter_item filter_num">
            <i class="icon iconfont icon-zhengli"></i>
            <span>销量</span>
        </div>
        <div class="filter_item filter_price">
            <i class="icon iconfont icon-zhengli"></i>
            <span>价格</span>
        </div>
        <div class="filter_item filter_nulti">
            <i class="icon iconfont icon-shaixuan"></i>
            <span>筛选</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "filter"
    }
</script>

<style scoped lang="less">
    .filter{
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #999;
        line-height: 50px;
        >div{
            width: 24%;
            display: inline-block;
            text-align: center;
        }
    }
</style>