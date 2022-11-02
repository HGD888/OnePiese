<template>
  <div
    class="population"
    :style="{
      backgroundImage: 'url(' + ALLintroduce.img1v1Url + ')',
      backgroundSize: '100%',
    }"
  >
    <div class="header" @click="fanhui">
      ⮜ {{ $store.state.singerall.name }}
    </div>

    <div class="health">
      <div @click="sxrotate" class="health-one">
        <span id="health-one-span" class="iconfont icon-24gf-playCircle"></span>
      </div>
      <div class="health-two">播放全部</div>
      <div class="health-three">(共{{ ALLperson.length }}首)</div>
      <div class="health-four">
        <li
          @click="pushimg(value)"
          class="health-four-li"
          v-for="(value, index) of ALLperson"
          :key="index"
        >
          <div class="health-four-div">
            <div class="health-four-div-left">
              {{ (index += 1) }}
            </div>
            <div class="health-four-div-right">
              <div class="health-four-div-one">
                {{ value.gqname }}
              </div>
              <div class="health-four-div-two">
                {{ value.ar[0].name }} - {{ value.gqname }}
              </div>
            </div>
          </div>
        </li>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import "/HTML/项目/MUSIC/src/assets/tb/iconfont.css";
import axios from "axios";
export default {
  name: "singerobtain",
  data() {
    return {
      ALLperson: [],
      ALLintroduce: {},
      zjpicUrl: "",
      gqname: "",
      name: "",
      rotate: false,
      on: false,
      off: true,
      gqUrl: "",
    };
  },
  methods: {
    Clickmusic() {
      this.$router.replace("singerplaypage");
    },
    fanhui() {
      this.$store.commit("control");
      this.$router.push("/singer");
    },
    pushimg(arr) {
      this.$store.commit("tailgqId",arr.gqid)
      this.$store.commit("tailgqIMG", arr.zjpicUrl);
      this.$store.commit("tailgqNAME", arr.gqname);
      this.$store.commit("tailgsNAME", arr.ar[0].name);
      this.$store.commit("IMGrotate", false);
      this.$store.commit("XZRotate", false);
      this.$store.commit("XZSuspend", true);
      axios.get(`http://localhost:3000/song/url/vl?id=${arr.gqid}&level=hires`).then(
        (ok) => {
          this.$store.commit("tailgqURL", ok.data.data[0].url);
        },
        (err) => {
          console.log("请求错误");
        }
      );
    },
    sxrotate() {
      this.$store.commit("tailgqIMG", this.ALLperson[0]);
      this.$store.commit("tailgqNAME", this.ALLperson[0]);
      this.$store.commit("tailgsNAME", this.ALLperson[0]);
      axios
        .get(`http://localhost:3000/song/url/vl?id=${this.ALLperson[0].gqid}&level=hires`)
        .then(
          (ok) => {
            this.$store.commit("tailgqURL", ok.data.data[0].url);
          },
          (err) => {
            console.log("请求错误");
          }
        );
    },
  },
  mounted() {
    axios.get(`http://localhost:3000/artists/?id=${this.$store.state.singerall.id}`
      )
      .then(
        (ok) => {
          this.ALLperson = ok.data.hotSongs.map((item) => ({
            gqname: item.name,
            zjname: item.al.name,
            zjpicUrl: item.al.picUrl,
            ar: item.ar,
            gqid: item.id,
          }));

          this.zjpicUrl = this.ALLperson[0].zjpicUrl;
          this.gqname = this.ALLperson[0].gqname;
          this.name = this.ALLperson[0].ar[0].name;
          console.log(this.ALLperson, "hello");
          axios
            .get(`http://localhost:3000/song/url/vl?id=${this.ALLperson[0].gqid}&level=hires`)
            .then(
              (ok) => {
                this.gqUrl = ok.data.data[0].url;
              },
              (err) => {
                console.log("请求错误");
              }
            );
        },
        (err) => {
          console.log("请求错误");
        }
      );
    axios
      .get(
        `http://localhost:3000/artists/?id=${this.$store.state.singerall.id}`
      )
      .then(
        (ok) => {
          this.ALLintroduce = ok.data.artist;
          console.log(ok.data);
        },
        (err) => {
          console.log("请求错误");
        }
      );
  },
};
</script>

<style scoped>
.population {
  width: 100%;
  height: 100%;
  background-color: pink;
  position: fixed;
  top: 0;
}
.header {
  width: auto;
  height: 25px;
  color: pink;
  margin-left: 12px;
  padding-top: 20px;
  font-size: 17px;
}
.health-one {
  width: 30px;
  height: 30px;
  margin-top: 10px;
  margin-left: 30px;
}
.health-one,
.health-two,
.health-three {
  float: left;
  line-height: 30px;
}

#health-one-span {
  font-size: 24px !important;
  color: rgb(255, 255, 255);
  opacity: 0.8;
}

.health-two {
  width: 70px;
  height: 30px;
  margin-top: 10px;
  color: white;
}
.health-three {
  width: 70px;
  height: 30px;
  margin-top: 10px;
  font-size: 10px;
  color: rgb(211, 211, 211);
}

.health-four {
  width: 100%;
  height: 377px;
  margin-top: 50px;
  background-color: rgb(255, 149, 167);
  overflow: auto;
}
.health-four-div {
  width: 300px;
  height: 50px;
}
.health-four-div-left,
.health-four-div-right {
  float: left;
  height: 50px;
}
.health-four-div-left {
  width: 60px;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  color: white;
  opacity: 0.8;
}
.health-four-div-right {
  width: 240px;
}
.health-four-div-one,
.health-four-div-two {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.health-four-div-one {
  color: rgb(255, 255, 255);
  font-size: 17px;
}
.health-four-div-two {
  font-size: 12px;
  color: rgb(255, 255, 255);
  border-bottom: 0.5px solid;
  opacity: 0.5;
}

.health {
  width: 100%;
  height: 400px;
  margin-top: 300px;
  background-color: rgb(255, 74, 74);
  border-radius: 30px 30px 0 0;
}
</style>