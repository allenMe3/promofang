<template>
  <div id="app">
    <!-- 标题 -->
    <header>
        <div class="headleft" @click="back"></div>
        <div class="headmid">问题管理</div>
        <svg t="1591777175025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1421" width="20" height="20" @click="search"><path d="M830.486464 796.124515 672.790943 638.42797c44.959904-52.799318 72.109099-121.232412 72.109099-196.016087 0-167.084182-135.448007-302.533214-302.53219-302.533214s-302.533214 135.449031-302.533214 302.533214 135.449031 302.53219 302.533214 302.53219c74.782651 0 143.215745-27.149196 196.017111-72.109099L796.101988 830.531518c9.499249 9.499249 24.885227 9.499249 34.384476 0S839.986737 805.623764 830.486464 796.124515zM442.366829 698.401131c-141.380814 0-255.989248-114.631985-255.989248-255.989248 0-141.403341 114.608434-255.989248 255.989248-255.989248 141.37979 0 255.989248 114.585907 255.989248 255.989248C698.356077 583.769146 583.747643 698.401131 442.366829 698.401131z" p-id="1422" fill="#fff"></path></svg>
    </header>
    <div class="search" v-show="isshow">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
      <div class="search_history">历史搜索</div>
      <svg width="16px" class="shanchu" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" @click="shanchu">
          <desc>Created with Sketch.</desc>
          <g id="问题管理-农电app" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="03-1-搜索" transform="translate(-341.000000, -86.000000)" fill="#092545" fill-rule="nonzero">
                <g id="shanchu" transform="translate(341.000000, 86.000000)">
                    <path d="M12.4875,13.7966373 C12.4875,14.347478 12.05,14.7958367 11.513,14.7958367 L4.4875,14.7958367 C3.94936488,14.7949902 3.513326,14.3481289 3.5125,13.7966373 L3.5125,3.1897518 L12.4875,3.1897518 L12.4875,13.7966373 L12.4875,13.7966373 Z M5.4625,1.39631705 C5.4625,1.28102482 5.55,1.19135308 5.6625,1.19135308 L10.35,1.19135308 C10.4625,1.19135308 10.5495,1.28102482 10.5495,1.39631705 L10.5495,1.99839872 L5.4625,1.99839872 L5.4625,1.39631705 Z M15.4125,1.99839872 L11.7125,1.99839872 L11.7125,1.39631705 C11.7125,0.627702162 11.1,0 10.35,0 L5.6625,0 C4.9106965,0.00169085428 4.3016499,0.625853901 4.3,1.39631705 L4.3,1.99839872 L0.5875,1.99839872 C0.2625,1.99839872 0,2.26741393 0,2.60048038 C0,2.93354684 0.2625,3.20256205 0.5875,3.20256205 L2.3375,3.20256205 L2.3375,13.7966373 C2.3375,15.0135209 3.30008779,16 4.4875,16 L11.5125,16 C12.6999122,16 13.6625,15.0135209 13.6625,13.7966373 L13.6625,3.1897518 L15.4125,3.1897518 C15.7375,3.1897518 16,2.92073659 16,2.58767014 C16,2.25460368 15.7375,1.99839872 15.4125,1.99839872 Z M8,12.9895917 C8.325,12.9895917 8.5875,12.7205765 8.5875,12.38751 L8.5875,5.98238591 C8.5875,5.64931946 8.3255,5.38030424 8,5.38030424 C7.675,5.38030424 7.4125,5.64931946 7.4125,5.98238591 L7.4125,12.38751 C7.4125,12.7205765 7.675,12.9895917 8,12.9895917 L8,12.9895917 Z M5.2625,12.9895917 C5.5875,12.9895917 5.85,12.7205765 5.85,12.38751 L5.85,5.98238591 C5.85,5.64931946 5.5875,5.38030424 5.2625,5.38030424 C4.9375,5.38030424 4.675,5.64931946 4.675,5.98238591 L4.675,12.38751 C4.6875,12.7205765 4.95,12.9895917 5.2625,12.9895917 L5.2625,12.9895917 Z M10.7375,12.9895917 C11.0625,12.9895917 11.3255,12.7205765 11.3255,12.38751 L11.3255,5.98238591 C11.3255,5.64931946 11.063,5.38030424 10.7375,5.38030424 C10.413,5.38030424 10.15,5.64931946 10.15,5.98238591 L10.15,12.38751 C10.15,12.7205765 10.4125,12.9895917 10.7375,12.9895917 L10.7375,12.9895917 Z" id="形状"></path>
                </g>
            </g>
          </g>
      </svg>
      <div class="his">
        <div v-for="(historyval,index) in historyval" :key="index" class="history">{{historyval}}</div>
      </div>
    </div>
    <!-- tab标签页 -->
    <van-tabs v-model="active" animated>
        <van-tab title="个人发起">
          <!-- 问题列表 -->
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
        </van-tab>
        <van-tab title="代办问题" :dot="dot" click="clickk">
          <!-- 问题列表 -->
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
        </van-tab>
    </van-tabs>
    <footer @click="gonew">
        + 问题新建
    </footer>
    </div>
</template>

<script>
import Vue from 'vue';
import { Grid, GridItem, Overlay, Tab, Tabs, Toast, Search } from 'vant';

Vue.use(Grid, GridItem, Overlay, Tab, Tabs, Toast, Search );
export default {
  data(){
    return{
      // 问题数据
        ren:[{'name':'陈红','content':'请求上级支援','time':'2020/1/15','timeout':'2020/1/15','funame':'张三'},
        {'name':'李四','content':'请求上级支援','time':'2020/1/13','timeout':'2020/1/13','funame':'张三'}
        //   {'name':'王二','content':'请求上级支援','time':'2020/1/12','timeout':'2020/1/12','funame':'张三'}
        ],
        active: 2,
        dot:true,
        isshow:false,
        value: '',
        historyval:JSON.parse(localStorage.getItem("search"))
    }
  },
  methods:{
    // 返回上级
    back(){
      this.$router.push("/")
    },
    // 搜索
    search(){
      this.isshow = true
    },
    onSearch(val) {
      // window.localStorage.setItem('search',val)
      var searchval = JSON.parse(localStorage.getItem("search") || "[]");
      searchval.push(val);
      localStorage.setItem("search", JSON.stringify(searchval));
      this.historyval = JSON.parse(localStorage.getItem("search"))
      this.isshow = false
    },
    shanchu(){
      localStorage.setItem("search", '');
    },
    onCancel() {
      this.isshow = false
    },
    clickk(){
        this.dot = false
        console.log(this.dot);
    },
    // 跳转问题新建
    gonew(){
        this.$router.push("/newpro")
    }
  }
}
</script>

<style scoped>
  *{
    text-align: center;
  }
  .search{
    width: 100%;
    height: 100%;
    opacity: 0.94;
    background-color: #F9F9F9;
    position: absolute;
    top: 0;
    z-index: 100;

  }
  .search_history{
    float: left;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #4A4A4A;
    margin-left: 5%;
    margin-top: 2%;
  }
  .his{
    width: 100%;
    position: absolute;
    top: 11%;
    left: -2%;
  }
  .history{
    float: left;
    margin-left: 10%;
    margin-top: 5%;
    padding: 0 3%;
    height: 28px;
    line-height: 28px;
    background: #E5E5E5;
    border-radius: 12px;
    border-radius: 12px;
  }
  .shanchu{
    float: right;
    margin-right: 5%;
    margin-top: 2%;
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
    z-index: 100;
  }
  .headmid{
    font-family: PingFangSC-Regular;
    width: 30%;
    font-size: 18px;
    color: #FFFFFF;
    position: relative;
    left: 30%;
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
  footer{
    background-image: url('../assets/1.png');
    width: 100%;
    height: 48px;
    position: absolute;
    bottom: 0;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 48px;
  }
    
</style>