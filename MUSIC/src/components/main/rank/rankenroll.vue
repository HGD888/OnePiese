<template>
  <div class="header">
    <div id="button">
      <span class="iconfont icon-tuichudenglu" @click="src"></span>
    </div>
    <div
      @click="pushimg(value)"
      id="helth"
      v-for="(value, index) of ALLperson"
      :key="index"
    >
      <div>{{ value.song.name }}</div>
      <div>———{{ value.song.ar[0].name }}</div>
    </div>
  </div>
</template>

<script>
import "/HTML//项目/MUSIC/src/assets/iconfont/iconfont.css";
import "/HTML/项目/MUSIC/src/assets/tb/iconfont.css";
import axios from "axios";
export default {
  name: "ranks",
  data() {
    return {
      ALLperson: [],
    };
  },
  methods: {
    src() {
      this.$store.commit("contrast");
      this.$router.push("/rank");
      this.$store.state.record.back = true;
      console.log(this.$store.state.rank.data);
    },
    pushimg(value) {
      console.log(value);
      this.$store.commit("IMGrotate", false);
      this.$store.commit("XZRotate", false);
      this.$store.commit("XZSuspend", true);
      this.$store.commit("tailgqIMG", value.song.al.picUrl);
      this.$store.commit("tailgqNAME", value.song.name);
      this.$store.commit("tailgsNAME", value.song.ar[0].name);
      axios
        .get(
          `http://localhost:3000/song/url/vl?id=${value.song.id}&level=hires`
        )
        .then(
          (ok) => {
            console.log("hello", ok.data.data[0].url);
            this.$store.commit("tailgqURL", ok.data.data[0].url);
          },
          (err) => {
            console.log("请求错误");
          }
        );
    },
  },
  mounted() {
    axios
      .get(
        `http://localhost:3000/user/record?uid=${this.$store.state.rank.uid}&type=0`
      )
      .then((res) => {
        this.ALLperson = res.data.allData;
        console.log(res.data.allData[0].song.ar[0].name);
      });
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 100%;
  background-color: pink;
  position: absolute;
  top: 0;
  overflow: auto;
}
#button {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  position: fixed;
}
#helth {
  margin: auto;
  width: 350px;
  height: 50px;
  background-color: pink;
  border-bottom: 1px solid gray;
}
#helth div:first-child {
  width: 200px;
  height: 100%;
  float: left;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: white;
  line-height: 50px;
}
#helth div:last-child {
  width: 150px;
  height: 100%;
  float: right;
  color: gray;
  font-size: 10px;
  line-height: 50px;
}
</style>