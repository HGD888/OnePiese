<template>
    <div >
        <div @mousewheel="scorll" ref="scrl" class="Health" style="overflow:auto">
            <li @click="obtain(value)" class="Health-li" v-for="value of PushHealth" :key="value.id">
                <div class="health-img">
                    <img :src="value.img1v1Url" alt="">
                </div>
                <div class="health-name">
                    <span>{{value.name}}</span>
                </div>
            </li>
        </div>
         <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"singerhealth",
        props:["PushHealth","All"],
        methods: {
            scorll(){
                if(this.$refs.scrl.scrollTop>=432)
                {
                    this.$store.commit("four",1)
                    this.$emit("All",this.$store.state.ALL)
                }
            },

            // 控制歌手歌单里面的播放
            obtain(id,name){
                this.$store.commit("ChangeID",id,name)
                this.$store.commit("control")
                this.$router.push("/singer/singerobtain")
            }
        }
    }
</script>

<style scoped>
    .Health{
        border-top:1px solid rgb(182, 182, 182);
        width: 100%;
        height: 498px;

    }
    .Health-li{
        width: 100%;
    }
    .health-img{
        width: 30%;
        height: 93px;
        line-height: 93px;
    }
    img{
        margin-top: 10px;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-left: 15px;
    }
    .health-name{
        width: 70%;
        height: 93px;
        line-height: 93px;
    }
    span{
        font-size: 20px;
        color: white;
    }
    div{
        float: left;
    }

</style>