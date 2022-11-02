<template>
  <div class="playpage">
    <div class="playpage-healder">
      <div class="playpage-healder-right">
        <span class="playpage-healder-right-top">{{ this.$store.state.tailgqname }}</span
        ><br />
        <span class="playpage-healder-right-bottom">{{ this.$store.state.tailgsname }}</span>
      </div>
    </div>

    <div class="playpage-health">
      <div @click="openlyric" class="playpage-health-plate">
        <div id="bgimg" class="playpage-health-circular"></div>
      </div>
    </div>

    <div class="playpage-progress">
      <van-progress pivot-text="" inactive :percentage="(this.$store.state.crrentTime/this.$store.state.duration)*100" />
    </div>

    <div class="playpage-switch">
      <div><span @click="left" class="iconfont icon-disabled"></span></div>
      <div>
        <span
          v-if="$store.state.XZrotate"
          @click="rotate"
          class="iconfont icon-bofang2"
        ></span>
        <span
          v-if="$store.state.XZsuspend"
          @click="suspend"
          class="iconfont icon-bofang"
        ></span>
      </div>
      <div><span @click="right" class="iconfont icon-disabled1"></span></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "/HTML/项目/MUSIC/src/assets/tb/iconfont.css";
import "/HTML/项目/MUSIC/src/assets/h/iconfont.css";
import "/HTML/项目/MUSIC/src/assets/SD/iconfont.css";
export default {
  name: "singerplaypage",
  methods: {
    rotate() {
      this.$store.commit("IMGrotate", false);
      this.$store.commit("XZRotate", false);
      this.$store.commit("XZSuspend", true);
      this.$bus.$emit("close")

    },
    suspend() {
      this.$store.commit("IMGrotate", true);
      this.$store.commit("XZRotate", true);
      this.$store.commit("XZSuspend", false);
      this.$bus.$emit("open")
    },
    left(){
        
    },
    right(){

    },
    openlyric(){
        this.$router.push({name:'Lyric'})
    }
  },
  mounted() {
    var bgurl=document.getElementById('bgimg')
    bgurl.style.backgroundImage=`url(${this.$store.state.tailgqimg})`
  },
};
</script>

<style scoped>
.playpage {
  width: 100%;
  height: 100%;
  background-color:rgb(254, 169, 183);
  position: fixed;
  top: 0;
}

.playpage-healder {
  width: 100%;
  height: 50px;
  padding-top: 30px;

}
.playpage-healder-right {
  color: rgb(255, 250, 250);
  margin: auto;
  margin-top: 40px;
}

.playpage-healder-right {
  width: 300px;
  height: 50px;

  text-align: center;
  line-height: 24px;
}
.playpage-healder-right-top {
  font-size: 18px;
}
.playpage-healder-right-bottom {
  font-size: 11px;
  color: rgb(221, 107, 126);
}

.playpage-health {
  width: 100%;
  height: 600px;

}
.playpage-health-plate {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: pink;
  position: absolute;
  margin-top: 35%;
  margin-left: 10%;
}
.playpage-health-circular {
  width: 200px;
  height: 200px;
  background-size: 100%;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 17%;
}
.playpage-progress {
  width: 100%;
  height: 13px;

}

.playpage-switch {
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: center;

}
.playpage-switch div {
  width: 60px;
  height: 100%;
  border-radius: 50%;

  line-height: 60px;
  text-align: center;
  color: rgb(242, 104, 104);
}
.playpage-switch div span {
  font-size: 35px;
}
</style>