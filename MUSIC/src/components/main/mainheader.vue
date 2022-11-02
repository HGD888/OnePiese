<template>
  <div>
    <div v-if="this.$store.state.singerswitch">
      <div class="name-header">{{ headername }}</div>
      <div class="name-header-list">
        <li
          :class="{ 'li-list-color': liColor(value) }"
          v-for="value of headerlist"
          :key="value.path"
          @click="listli(value.path)"
        >
          {{ value.name }}
        </li>
      </div>
    </div>

    <div id="op" class="main-tail">
      <div class="main-tail-one">
        <img
          @click="Playpage"
          id="main-tail-one-img"
          :src="$store.state.tailgqimg"
          alt=""
          :class="{ 'main-tail-one-IMG': $store.state.imgrotate }"
        />
      </div>

      <div class="main-tail-two">
        <span class="main-tail-two-left">
          {{ $store.state.tailgqname }}
        </span>
        <span class="main-tail-two-right">
          &nbsp;- {{ $store.state.tailgsname }}
        </span>
      </div>

      <div class="main-tail-three">
        <span
          v-if="$store.state.XZrotate"
          @click="rotate"
          id="main-tail-three-left"
          class="iconfont icon-bofang2"
        ></span>
        <span
          v-if="$store.state.XZsuspend"
          @click="suspend"
          id="main-tail-three-center"
          class="iconfont icon-bofang"
        ></span>
        <span
          id="main-tail-three-right"
          class="iconfont icon-24gf-playlistMusic"
        ></span>
      </div>

      <audio loop ref="audio" :src="$store.state.tailgqUrl"></audio>
    </div>
  </div>
</template>

<script>
import "/HTML/项目/MUSIC/src/assets/tb/iconfont.css";
export default {
  name: "mainheader",
  props: ["headername"],
  data() {
    return {
      headerlist: [
        { path: "/recommend", name: "推荐" },
        { path: "/singer", name: "歌手" },
        { path: "/rank", name: "主页" },
      ],
      pink: true,
    };
  },
  methods: {
    // Playpage
    Playpage() {
      this.pink = false;
      if (this.$route.path === "/singer/singerplaypage") {
        this.$router.back();
      } else {
        this.$router.push({ name: "Playpage" });
      }
    },
    // tail
    suspend() {
      this.$store.commit("IMGrotate", true);
      this.$store.commit("XZRotate", true);
      this.$store.commit("XZSuspend", false);
      this.$refs.audio.play();

      // 传入总时间
      this.$store.commit("durations", this.$refs.audio.duration.toFixed(2) * 1);

      let time=setInterval(() => {
        //传入现在时间
        this.$store.commit('crrentTimes',this.$refs.audio.currentTime.toFixed(2) * 1)
      }, 1000);
      this.$store.commit('crrents',time)

      this.$bus.$on("open", () => {
        this.$refs.audio.play()
          let time=setInterval(() => {
          //传入现在时间
            this.$store.commit('crrentTimes',this.$refs.audio.currentTime.toFixed(2) * 1)
          }, 1000);
          this.$store.commit('crrents',time)
      });
    },
    rotate() {
      this.$store.commit("IMGrotate", false);
      this.$store.commit("XZRotate", false);
      this.$store.commit("XZSuspend", true);
      this.$refs.audio.pause();

      clearInterval(this.$store.state.crrent);
      this.$bus.$on("close", () => {
        this.$refs.audio.pause();
          clearInterval(this.$store.state.crrent);
      });
    },
    listli(path) {
      // this.element.classlist.remove("li-color")
      // this.element.classlist.add("li-color")
      this.$router.replace(path);
      console.log(this.$route);
    },
    liColor(value) {
      if (this.$route.path === value.path) {
        return true;
      }
      if (this.$route.path === "/" && value.path === "/recommend") {
        return true;
      }
      return false;
    },
  },
  mounted() {
    this.pink = true;
    this.$bus.$on("opacitys", () => {
      var a = document.getElementById("op");
      a.style.opacity = 1;
    });
  },
};
</script>

<style>
.main-tail {
  width: 100%;
  height: 50px;
  background-color: pink;
  bottom: 0;
  margin-bottom: -0.249px;
  z-index: 1000;
  position: fixed;
}
.main-tail-one,
.main-tail-two,
.main-tail-three {
  float: left;
  height: 50px;
}
.main-tail-one {
  width: 80px;
  text-align: center;
}
.main-tail-two {
  width: 210px;
  line-height: 50px;
  color: white;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.main-tail-three {
  width: 85px;
  line-height: 50px;
  position: relative;
}
#main-tail-one-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.main-tail-two-left {
  color: white;
  font-size: 16px;
}
.main-tail-two-right {
  color: white;
  opacity: 0.5;
  font-size: 10px;
  margin-top: 3px;
}
#main-tail-three-left,
#main-tail-three-right,
#main-tail-three-center {
  color: white;
}

#main-tail-three-left {
  right: 10px;
  left: 0;
  font-size: 23px;
  opacity: 0.7;
  position: absolute;
}
#main-tail-three-center {
  right: 10px;
  left: 0;
  font-size: 23px;
  opacity: 0.7;
  position: absolute;
}
#main-tail-three-right {
  right: 25px;
  font-size: 20px;
  opacity: 0.8;
  position: absolute;
}
.main-tail-one-IMG {
  animation: identifier 10s linear infinite normal;
}
@keyframes identifier {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.name-header {
  color: pink;
  margin: 0 auto;
  width: 75px;
  height: 23px;
  font-size: 20px;
  font-weight: 600;
  padding-top: 20px;
}
.name-header-list {
  width: 100%;
  height: 50px;
  font-weight: 600;
  display: flex;
  justify-content: space-around;
  line-height: 50px;
  color: rgb(180, 180, 180);
}
li {
  float: left;
}
.li-list-color {
  color: pink;
}
</style>