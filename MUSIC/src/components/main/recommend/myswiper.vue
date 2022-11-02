<template>
    <el-carousel :interval="2000" type="card" height="69px">
        <el-carousel-item v-for="(value,index) in Arrimg" :key="index">
            <img class="header-img" :src="value.imageUrl" alt="">
        </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        name:"myswiper",
        props:["Arrimg"],
    }
</script>

<style scoped>
    .header-img{
        width:100%;
        margin-left: 0px ;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .el-carousel__indicators{
    bottom: 26px;
        text-align: center;
        position: static;
        transform: none;
        height: 30px;
        width: 180px;
        margin: 0 auto !important;
    }
    .el-carousel__indicators--outside button {
        width: 10px;
    }
</style>