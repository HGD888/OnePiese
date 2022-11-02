<template>
    <div class="HEALTH">
        <div class="health" v-for="value of Arrall" :key="value.id">
            <div class="ONE">
               <img :src="value.iconUrl" alt="">
            </div>
            <div class="TWO">
                <span class="boutom">{{value.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'sonsheetlist',
        props:['Arrall']
    }
</script>

<style scoped>
    .HEALTH{
        width: 100%;
        height: 80px;
        overflow: auto;
        white-space: nowrap;
    }
    .health{
        width: 80px;
        display: inline-block;
    }
    .ONE{
        width: 50px;
        height: 50px;
        background-color: yellowgreen;
        border-radius: 50%;
        line-height: 68px;
        margin: 0 auto;
    }
    .TWO{
        width: 80px;
        text-align: center;
    }
    img{
        width: 30px;
        margin-left:10px
    }
    .boutom{
        font-weight: 500;
        color: gray;
    }
</style>