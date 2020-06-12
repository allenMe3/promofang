<template>
  <div id="app">
    <!-- 标题 -->
  <header>
    <div class="headleft" @click="back"></div>
    <div class="headmid">问题管理</div>
    <svg t="1591777175025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1421" width="20" height="20" @click="search"><path d="M830.486464 796.124515 672.790943 638.42797c44.959904-52.799318 72.109099-121.232412 72.109099-196.016087 0-167.084182-135.448007-302.533214-302.53219-302.533214s-302.533214 135.449031-302.533214 302.533214 135.449031 302.53219 302.533214 302.53219c74.782651 0 143.215745-27.149196 196.017111-72.109099L796.101988 830.531518c9.499249 9.499249 24.885227 9.499249 34.384476 0S839.986737 805.623764 830.486464 796.124515zM442.366829 698.401131c-141.380814 0-255.989248-114.631985-255.989248-255.989248 0-141.403341 114.608434-255.989248 255.989248-255.989248 141.37979 0 255.989248 114.585907 255.989248 255.989248C698.356077 583.769146 583.747643 698.401131 442.366829 698.401131z" p-id="1422" fill="#fff"></path></svg>
  </header>
  <!-- 超期问题 -->
  <van-grid :column-num="1" :gutter="0" :border="false">
  <van-grid-item v-for="(ren, index) in ren" :key="index">
    <div class="nav">
      <div class="nav_head">
        <div class="nav_headleft">{{ren.name}}的问题</div>
        <div class="nav_headright">超期未处理</div>
      </div>
      <div class="nav_body">
        <div class="nav_bodytext">计划开始时间：{{ren.time}}</div>
        <div class="nav_bodytext">计划结束时间：{{ren.timeout}}</div>
        <div class="nav_bodytext">督办内容：{{ren.content}}</div>
        <div class="nav_bodytext">负责人：{{ren.funame}}</div>
      </div>
    </div>
  </van-grid-item>
</van-grid>
  </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem, Overlay } from 'vant';

Vue.use(Grid, GridItem, Overlay);
export default {
  data(){
    return{
      // 问题数据
      ren:[{'id':1,'name':'陈红','content':'请求上级支援','time':'2020/1/15','timeout':'2020/1/15','funame':'张三'},
      {'id':2,'name':'李四','content':'请求上级支援','time':'2020/1/13','timeout':'2020/1/13','funame':'张三'},
      {'id':3,'name':'王二','content':'请求上级支援','time':'2020/1/12','timeout':'2020/1/12','funame':'张三'}],
    }
  },
  methods:{
    back(){
      this.$router.push("/")
    },
    search(){
      
    }
  }
}
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
    margin:auto;
    line-height: 40px;
  }
  header svg{
    width: 20px;
    height: 20px;
    float: right;
    margin-top: -7%;
    margin-right: 5%;
    color: white;
  }
  .nav{
    width: 90%;
    height: 10rem;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.09);
    border-radius: 8px;
  }
  .nav_head{
    width: 100%;
    height: 40px;
    background: #EEF1F2;
    border-radius: 4px 4px 0 0;
    margin-bottom: 2%;
  }
  .nav_headleft{
    float: left;
    margin-left: 8%;
    line-height: 40px;
    font-family: PingFangSC-Medium;
    font-weight: bold;
    font-size: 18px;
    color: #173F5D;
  }
  .nav_headright{
    float: right;
    line-height: 40px;
    margin-right: 8%;
    font-family: PingFangSC-Medium;
    font-weight: bold;
    font-size: 14px;
    color: #EA3333;
  }
  .nav_bodytext{
    margin-left: 8%;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #6D7278;
    letter-spacing: 0.17px;
    text-align: justify;
    line-height: 24px;
  }
 
</style>