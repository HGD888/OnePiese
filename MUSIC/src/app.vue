<template>
    <div>
        <div v-if="start" @click="src" class="start">进入OnePiece</div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
            name:"app",
            data() {
                return {
                    start:true
                }
            },
            methods: {
                src(){
                    this.start=false
                    this.$router.replace("/rank")
                    this.$bus.$emit("opacitys")
                }
            }
    }
</script>
<style>
    *{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    body{

        background-image: url('./assets/plmm.jpg');
        background-repeat:no-repeat;
        background-position:0px 0px;
        background-attachment:fixed;
        background-size: 125%;
    }
    .start{
        height: 50px;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        position: fixed;
        width: 200px;
        border-radius: 10px;
        color: rgb(222, 222, 222);
        margin: 100% 25%;
        border: 1px rgb(71, 71, 71) solid;
    }
</style>