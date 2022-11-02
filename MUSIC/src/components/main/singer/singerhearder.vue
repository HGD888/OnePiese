<template>
    <div class="Header">
        <div class="header-div">
            <li 
                :class="{'hello':index===Index}"
                @click="pushone(index)"
                class="header-li" 
                v-for="(value,index) of nameArr.one" 
                :key="index+'a'"
            >
                <span>{{value}}</span>
            </li>
        </div>
        <div class="header-div">
            <li
                :class="{'hello':index===Item}"
                @click="pushtwo(index,$event)"
                class="header-li"
                v-for="(value,index) of nameArr.two"
                :key="index+'b'"
            >
                <span>{{value}}</span>
            </li>
        </div>
        <div class="header-div-butoom">
            <li 
                :class="{'hello':index===Iam}"
                @click="pushthree(index,$event)"
                class="header-li-butoom" 
                v-for="(value,index) of nameArr.three" 
                :key="index+'c'"
            >
                <span>{{value}}</span>
            </li>
        </div>
    </div>
</template>

<script>
    export default {
        name:"singerheader",
        props:["All"],
        data() {
            return {
                Index:0,
                Item:0,
                Iam:0,
                nameArr:{
                    one:["全部","男歌手","女歌手","乐队"],
                    two:["全部","华语","欧美","日本","韩国","其他"],
                    three:["全部","A","B","C","D","E","F","G","H","I","J","K","L",
                    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
                }
            }
        },
        methods: {
            pushone(i){
                this.$store.commit("ONE",i)
                this.$store.commit("five",10)
                this.Index=i
                this.$store.commit('one',i)
                this.$emit("All",this.$store.state.ALL)
                
            },
            pushtwo(i,e){
                this.$store.commit("TWO",i)
                this.$store.commit("five",10)
                this.Item=i
                if(e.target.innerHTML==="全部")
                {
                    this.$store.commit("two",-1)
                }else if(e.target.innerHTML==="华语")
                {
                    this.$store.commit("two",7)
                }else if(e.target.innerHTML==="欧美")
                {
                    this.$store.commit("two",96)
                }else if(e.target.innerHTML==="日本")
                {
                    this.$store.commit("two",8)
                }else if(e.target.innerHTML==="韩国")
                {
                    this.$store.commit("two",16)
                }else if(e.target.innerHTML==="其他")
                {
                    this.$store.commit("two",0)
                }
                this.$emit("All",this.$store.state.ALL)
            },
            pushthree(i,e){
                this.$store.commit("THREE",i)
                this.$store.commit("five",10)
                this.Iam=i
                if(i===0)
                {
                    this.$store.commit("three","")
                }else{
                    this.$store.commit("three",e.target.innerHTML)
                }
                this.$emit("All",this.$store.state.ALL)
            }
        },
        mounted() {
                this.Index=this.$store.state.one
                this.Item=this.$store.state.two
                this.Iam=this.$store.state.three

        },
    }
</script>

<style scoped>
    .Header{
        width: 100%;
        height: 220px;
    }
    .header-div{
        width: 100%;
        height: 40px;
    }
    .header-li{
        width:60px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

    .header-div-butoom{
        width: 100%;
        height: 140px;
    }
    .header-li-butoom{
        width: 60px;
        height: 20px;
        margin-top: 6px;
        text-align: center;
    }
    span{
        color:rgb(228, 228, 228);
        opacity: 0.8;
    }

    .hello{
        color: white;
        opacity: 0.3;
        font-weight: 600;
    }

</style>