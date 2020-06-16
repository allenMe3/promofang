<template>
  <div class="home">
    <!-- 标题 -->
    <header>
        <div class="headleft"></div>
        <div class="headmid">问题管理</div>
    </header>
  <!-- 管理 -->
  <van-grid :column-num="1" :gutter="0" :border="false">
  <van-grid-item>
    <div class="nav" @click="golist">
      <div class="nav_child">
        <div class="nav_child1"></div>
        <div class="nav_child2">问题管理</div>
      </div>
      <div class="nav_second">
        <div class="nav_second1">超期</div>
        <div class="nav_second2">
          <div class="nav_second_child">{{timeout}}</div>
        </div>
        <div class="nav_second3">在办</div>
        <div class="nav_second4">
          <div class="nav_second_child1">{{now}}</div>
        </div>
        <div class="nav_second5">已办</div>
        <div class="nav_second6">
          <div class="nav_second_child2">{{succes}}</div>
        </div>
      </div>
    </div>
  </van-grid-item>
  <van-grid-item>
   <div class="nav">
      <div class="nav_childd">
        <div class="nav_child1"></div>
        <div class="nav_child2">督办管理</div>
      </div>
      <div class="nav_secondd">
        <div class="nav_second1">超期</div>
        <div class="nav_second2">
          <div class="nav_second_child">{{timeout}}</div>
        </div>
        <div class="nav_second3">在办</div>
        <div class="nav_second4">
          <div class="nav_second_child1">{{now}}</div>
        </div>
        <div class="nav_second5">已办</div>
        <div class="nav_second6">
          <div class="nav_second_child2">{{succes}}</div>
        </div>
      </div>
    </div>
  </van-grid-item>
</van-grid>
  <!-- 问题处理弹窗 -->
  <van-overlay :show="show" @click="show = false">
  <div class="wrapper">
    <div class="block">
      <div class="block_head">提示</div>
      <div class="block_body">你有{{timeout}}项问题超期未处理</div>
      <div class="block_floot" style="background-color: #E9F6FF;">稍后处理</div>
      <div class="block_floot" style="background: #2770B8;" @click="gopro">立即处理</div>
    </div>
  </div>
</van-overlay>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { Button, NavBar, Toast, Grid, GridItem, Overlay } from 'vant';

Vue.use(Button, NavBar, Toast, Grid, GridItem, Overlay);

export default {
  name: "Home",
  data(){
    return{
      timeout:3,
      now:5,
      succes:13,
      show: false
    }
  },
  components: {
  },
  methods:{
    // 跳转问题管理列表
    golist(){
      this.$router.push("/prolist")
    },
    // 跳转超期问题列表
    gopro(){
      this.$router.push("/prolistji")
    },
    // 弹窗
    showa(){
        let a = sessionStorage.getItem('a')
        if(a==1){
          this.show = true
          sessionStorage.setItem('a',2)
        }else if (a==2) {
          this.show = false
        }
    }
  },
  mounted(){
    sessionStorage.setItem('a',1)
    this.showa()
  }
  
};
</script>
<style scoped>
  *{
    text-align: center;
  }
    header{
    background-image: url('../assets/1.png');
    width: 100%;
    height: 48px;
    position: absolute;
    top: 0;
  }
  .headleft{
    float: left;
    border-top: 2px solid;
    border-right: 2px solid;
    width: 10px;
    height: 10px;
    border-color: #fff;
    transform: rotate(-135deg);
    margin-left: 7%;
    margin-top: 5%;
  }
  .headmid{
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #FFFFFF;
    position: relative;
    left: -3%;
    line-height: 40px;
  }
  .nav{
    width: 90%;
    height: 10rem;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.09);
    border-radius: 8px;
  }
  .nav_child{
    background-image: linear-gradient(180deg, #0D55BA 0%, 
    rgba(34,129,248,0.79) 50%);
    width: 100%;
    height: 70%;
    border-radius: 8px;
    color: #F3F9FF;
  }
  .nav_childd{
    background-image: linear-gradient(0deg, #F7B500 50%, #F77000 100%);
    width: 100%;
    height: 70%;
    border-radius: 8px;
    color: #F3F9FF;
  }
  .nav_child1{
    border: 1px solid black;
    width: 18%;
    height: 50%;
    position: relative;
    left: 15%;
    top: 20%;
  }
  .nav_child2{
    font-weight: bold;
    font-size: 2em;
    position: relative;
    left: 10%;
    top: -25%;
    text-shadow: 0 2px 4px rgba(0,0,0,0.22);
  }
  .nav_second{
    background-color: #F3F9FF;
    width: 100%;
    height: 2.8rem;
  }
  .nav_secondd{
    background: #FFFCF2;
    width: 100%;
    height: 2.8rem;
  }
  .nav_second1{
    position: relative;
    left: -38%;
    top: 25%;
    font-size: 0.9em;
  }
  .nav_second2{
    position: relative;
    left: -25%;
    top: -14%;
    font-size: 0.9em;
  }
  .nav_second3{
    position: relative;
    left: -13%;
    top: -57%;
    font-size: 0.9em;
  }
  .nav_second4{
    position: relative;
    left: 0%;
    top: -95%;
    font-size: 0.9em;
  }
  .nav_second5{
    position: relative;
    width: 30%;
    left: 48%;
    top: -135%;
    font-size: 0.9em;
  }
  .nav_second6{
    position: relative;
    width: 30%;
    left: 61%;
    top: -175%;
    font-size: 0.9em;
  }
  .nav_second_child{
    background-color: red;
    margin: auto;
    width: 10%;
    border-radius: 8px;
    color: #f9f9f9;
  }
  .nav_second_child1{
    background-color: orange;
    margin: auto;
    width: 10%;
    border-radius: 8px;
    color: #f9f9f9;
  }
  .nav_second_child2{
    background-color: greenyellow;
    margin: auto;
    width: 35%;
    border-radius: 8px;
    color: #f9f9f9;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .block {
    width: 258px;
    height: 166px;
    background-color: #fff;
    border-radius: 3px;
  }
  .block_head{
    width: 258px;
    height: 45px;
    background: #EEF1F2;
    border-radius: 3px;
    border-radius: 3px;
    font-weight: bold;
    text-align: center;
    line-height: 45px;
    font-size: 16;
  }
  .block_body{
    line-height: 73px;
  }
  .block_floot{
    float: left;
    width: 129px;
    height: 48px;
    line-height: 48px;
  }
</style>
