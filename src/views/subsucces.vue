<template>
  <div id="app">
    <header>
        <div class="headleft" @click="back"></div>
        <div class="headmid">问题管理</div>
  </header>
  <div class="ti">提交成功</div>
  <div class="ti1">{{count}}秒后返回问题列表页</div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            count:3,
            timer:null
        }
    },
    methods:{
        // 3秒后跳转到问题列表页面
        golist(){
            setTimeout(() => {
                this.$router.push("/prolist")
            },3000)
        },
        back(){
            this.$router.push("/newpro")
        },
        countjian(){
            this.timer = setInterval(() => {
                this.count = this.count-1
                console.log(this.count);
            },1000)
            setTimeout(() => {
                 clearInterval(this.timer);
                 this.timer = null
            },3000)
        }
    },
    mounted(){
        this.countjian()
        this.golist()
    }
}
</script>

<style scoped>
  *{
    text-align: center;
  }
  header{
    position: fixed;
    background-image: url('../assets/1.png');
    width: 100%;
    height: 48px;
    top: 0;
    z-index: 100;
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
  .ti{
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -32px;
  }
  .ti1{
      position: absolute;
      top: 55%;
      left: 50%;
      margin-left: -76.45px;
  }
</style>