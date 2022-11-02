<template>
  <div>
    <div @click="last" class="gc">
      <p ref="GC" v-for="(item, index) in arr" :key="index">{{ item.lrc }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    last() {
      clearInterval(this.$store.state.crrenT)
      this.$router.back();
    },
  },
  computed:{
    Time(){
        return this.$store.state.crrentTime
    }
  },
  watch:{
    Time:{
        immediate:true,
        handler(newValue,oldValue){
         console.log(newValue,oldValue)
        for(let i of this.$store.state.singer){
            if(i[0]>=oldValue && i[0]<newValue)
                {
                    console.log("变颜色")
                    console.log(Math.ceil(oldValue))
                     this.$refs.GC[Math.floor(oldValue)].style.color='white'
                }
        }
    }
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/lyric?id=${this.$store.state.tailgqid}`).then((res) => {
      this.arr = res.data.lrc.lyric.split(/[(\r\n)\r\n]+/).map((item, i) => {
        let min = item.slice(1, 10);
        let lrc = item.slice(11, item.length);
        let timedata = min.split(":");
        let time =parseFloat(timedata[0] * 60 + parseFloat(timedata[1])).toFixed(2) * 1;

        return { time, lrc };
      });
      let arrr = new Array();
      for (let i of this.arr) {
        arrr.push(Object.values(i));
      }
      this.$store.commit("singers", arrr);
    })

  },
};
</script>

<style scoped>
.gc {
  top: 120px;
  width: 100%;
  height: 500px;
  position: absolute;
  background-color: aqua;
  overflow: auto;
}
p {
  text-align: center;
  color: rgb(255, 59, 59);
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
</style>