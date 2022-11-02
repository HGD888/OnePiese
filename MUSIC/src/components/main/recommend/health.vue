<template>
    <div>
        <div class="header">
            <span class="string">热门推荐</span>
        </div>
         <div class="infinite-list-wrapper" style="overflow:auto">
            <div @mousewheel="scrol" ref="scrl" class="Health">
                <li class="health" v-for="value of Album" :key="value.id">
                    <div class="IMG">
                        <img class="img" :src="value.picUrl" alt="">
                    </div>
                    <div class="STRING">
                        <span>{{value.name}}</span>
                    </div>
                </li>
            </div>
        </div>
    </div>
</template>

<script scoped>
    export default {
        name:"health",
        props:["Album","newHealth"],
        data() {
            return {
                loading:"false",
            }
        },
        methods: {
            scrol(){
                if(this.$refs.scrl.scrollTop>100)
                {
                    this.$emit("newHealth")
                }
            }
        }
    }
</script>

<style scoped>
    .Health{
        height:502px ;
        overflow: auto;
    }
    .health{
        width: 100%;
        margin-top: 8px;
        height: 60px;
        margin-left: 6px;
    }
    .header{
        margin-left: 5px;
        margin-top: 10px;
        border-bottom: 1px solid rgb(148, 148, 148);
    }
    .string{
        font-weight: 700;
        font-size: 16px;
        color:rgb(197, 197, 197);
    }
    .img{
        width: 60px;
    }
    .IMG{
        float: left;
        width:22%;
    }
    .STRING{
        float: left;
        width: 50% ;
        color:gray;
        margin-top: 3%;
    }

</style>