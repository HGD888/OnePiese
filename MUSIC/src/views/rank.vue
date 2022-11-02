<template>
  <div class="header">
    <div v-if="this.$store.state.record.back">
      <div id="bgimg"></div>
      <div id="name">{{ name }}</div>
      <div id="SignIn" v-if="this.$store.state.D">
        账号：<input
          v-model="Phone"
          placeholder="请输入手机号"
          type="number"
        /><br />
        密码：<input v-model="Password" type="password" />
        <div class="D" @click="src">登录</div>
        <div id="Register">注册</div>
      </div>
      <ul>
        <li @click="open">
          <span>播放记录</span><br />
          <span class="iconfont icon-youxiangdenglu"></span>
        </li>
        <li>
          <span>二维码登录</span><br />
          <span class="iconfont icon-erweima"></span>
        </li>
        <li>
          <span>游客登录</span><br />
          <span class="iconfont icon-youkexinxi"></span>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script scoped>
import "/HTML/项目/MUSIC/src/assets/iconfont/iconfont.css";
import axios from "axios";
export default {
  name: "rank",
  data() {
    return {
      Phone: "",
      Password: "",
      bgurl:"",
      name: "",
      hide: true,
    };
  },
  methods: {
    // 跳转登录页
    src() {
      this.$store.commit("contrast");

      axios({
        method: "post",
        url: "http://localhost:3000/login/cellphone",
        data: {
          phone: this.Phone,
          password: this.Password,
          timestamp: new Date().getSeconds(),
        },
      }).then((res) => {
        console.log(res.data);
        if (res.data.code === 200) {
          this.$store.commit("datas", res.data.profile.avatarUrl);
          this.$store.commit("names", res.data.profile.nickname);
          this.$store.commit("uids", res.data.profile.userId);
          this.bgurl = document.getElementById("bgimg");
          this.bgurl.style.backgroundImage = `url(${this.$store.state.rank.data})`;

          this.name = this.$store.state.rank.name;
          this.$store.state.D = false;

          console.log("登录成功");
          console.log(res.data.code);
        } else {
          console.log("密码错误");
          alert("账号或密码错误");
          console.log(res.data.code);
        }
      });
    },
    open() {
      if (this.$store.state.rank.data != "") {
        this.$store.commit("records", false);
        this.$router.push("rank/Rankenroll");
        this.$store.state.record.back = false;
      } else {
        alert("请登录后再查看！");
      }
    },
  },
  mounted() {
    this.bgurl = document.getElementById("bgimg");
    this.bgurl.style.backgroundImage = `url(${this.$store.state.rank.data})`;
    this.name=this.$store.state.rank.name
  },
};
</script>

<style lang="css" scoped>
.header {
}
#name {
  color: white;
  text-align: center;
}
#bgimg {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-size: 100%;
  margin: 60px auto;
}
#SignIn {
  width: 100%;
  height: 80px;
  margin-top: 50px;
  text-align: center;
  color: white;
}
input {
  color: black;
}
ul {
  justify-content: space-around;
  color: white;
  width: 100%;

  height: 200px;
  margin-top: 50px;
}
li {
  width: 33.33%;
  height: 100px;
  text-align: center;
}
span:last-child {
  width: 100px;
  height: 100px;
  font-size: 30px;
}
.D {
  margin-top: 20px;
}
#Register {
  color: rgb(77, 77, 172);
  margin-top: 10px;
}
</style>