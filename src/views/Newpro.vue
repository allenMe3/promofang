<template>
    <div id="app">
        <!-- 标题 -->
        <header>
            <div class="headleft" @click="back"></div>
            <div class="headmid">问题管理</div>
            <svg t="1591777175025" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1421" width="20" height="20" @click="search"><path d="M830.486464 796.124515 672.790943 638.42797c44.959904-52.799318 72.109099-121.232412 72.109099-196.016087 0-167.084182-135.448007-302.533214-302.53219-302.533214s-302.533214 135.449031-302.533214 302.533214 135.449031 302.53219 302.533214 302.53219c74.782651 0 143.215745-27.149196 196.017111-72.109099L796.101988 830.531518c9.499249 9.499249 24.885227 9.499249 34.384476 0S839.986737 805.623764 830.486464 796.124515zM442.366829 698.401131c-141.380814 0-255.989248-114.631985-255.989248-255.989248 0-141.403341 114.608434-255.989248 255.989248-255.989248 141.37979 0 255.989248 114.585907 255.989248 255.989248C698.356077 583.769146 583.747643 698.401131 442.366829 698.401131z" p-id="1422" fill="#fff"></path></svg>
        </header>
        <div>
            <!-- 选择问题类型  -->
            <van-cell is-link title="问题类型 *" @click="show = true" />
            <van-action-sheet
              v-model="show"
              :actions="actions"
              cancel-text="取消"
              close-on-click-action
              @select="onselect"
            />
            <div class="duban">
              <div class="left font">督办类型</div>
              <div class="right font">{{pro}}</div>
            </div>
            <!-- 选择时间 -->
            <van-cell :value="dataTime" is-link title="计划开始时间 *" @click="showDataTime"/>
            <van-action-sheet v-model="showTime" title="选择时间" confirm-button-text="保存">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="confirm"
                @cancel="cancel"
              />
            </van-action-sheet>
            <van-cell :value="dataTime1" is-link title="计划结束时间 *" @click="showDataTime1"/>
            <van-action-sheet v-model="showTime1" title="选择时间" confirm-button-text="保存">
              <van-datetime-picker
                v-model="currentDate"
                type="date"
                @confirm="confirm1"
                @cancel="cancel1"
              />
            </van-action-sheet>
            <!-- 问题内容 -->
            <van-field
              v-model="message"
              rows="3"
              autosize
              label="问题内容 *"
              type="textarea"
              maxlength="200"
              placeholder="请输入"
              show-word-limit
            />
            <!-- 处理意见 -->
            <van-field
              v-model="msg"
              rows="3"
              autosize
              label="处理意见"
              type="textarea"
              maxlength="500"
              placeholder="请输入"
              show-word-limit
            />
            <!-- 说明附件 -->
            <div class="shuoming">说明附件</div>
              <van-uploader :after-read="afterRead" v-model="fileList" multiple class="up"/>
            
            <div class="shuoming">流转人 *</div>
            <van-uploader :after-read="afterRead" v-model="fileList1" multiple class="up"/>
        </div>
        <div style="height:50px"></div>
        <div class="block_floot" style="background-color: #E9F6FF;color: #3D6B9E;">保存</div>
        <div class="block_floot" style="background: #2770B8;margin-left:50%;color: #fff;" @click="gosu">保存并提交</div>
    </div>
</template>

<script>
import Vue from 'vue';
import { ActionSheet, Toast, Field, Uploader, Cell, CellGroup } from 'vant';

Vue.use(ActionSheet, Toast, Field, Uploader, Cell, CellGroup);
export default {
    data(){
        return{
            show: false,
            actions: [{ name: '问题督办' }, { name: '督办' }],
            pro:'',
            message: '',
            msg:'',
            fileList: [],
            fileList1: [],
            showTime:false,
            dataTime: '请选择时间',
            currentDate: new Date(),
            showTime1:false,
            dataTime1: '请选择时间',
            currentDate1: new Date(),
        }
    },
    methods:{
        // 返回上级
        back(){
            this.$router.push("/prolist")
        },
        // 搜索
        search(){
      
        },
        onselect(item){
          console.log(item.name);
          this.show = false;
          this.pro = item.name
        },
        afterRead(file) {
          // 此时可以自行将文件上传至服务器
          console.log(file);
        },
        // 时间选择
        formatDate(d) {
          return d.getFullYear() + '-' + this.p((d.getMonth() + 1)) + '-' + this.p(d.getDate())
        },
        p(s) {
          return s < 10 ? '0' + s : s
        },
        confirm(d) {
          this.dataTime = this.formatDate(d)
          this.showTime = false
        },
        cancel() {
          this.showTime = false
        },
        showDataTime() {
          this.showTime = true
        },
        formatDate1(dd) {
          return dd.getFullYear() + '-' + this.p1((dd.getMonth() + 1)) + '-' + this.p1(dd.getDate()) 
        },
        p1(ss) {
          return ss < 10 ? '0' + ss : ss
        },
        confirm1(dd) {
          this.dataTime1 = this.formatDate1(dd)
          this.showTime1 = false
        },
        cancel1() {
          this.showTime1 = false
        },
        showDataTime1() {
          this.showTime1 = true
        },
        gosu(){
          if(this.pro==''||this.message==''||this.fileList1==[]||this.dataTime=='请选择时间'||this.dataTime=='请选择时间'){
            this.$toast('请填写完整信息')
          }else{
            this.$router.push("/subsucces")
          }
          
        }
    }
}
</script>

<style scoped>
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
  header svg{
    width: 20px;
    height: 20px;
    float: right;
    margin-top: -7%;
    margin-right: 5%;
    color: white;
  }
  .content {
    padding: 16px 16px 160px;
  }
  .shuoming{
    margin-top: 10px;
    font-size: 14px;
    margin-left: 16px;
  }
  .up{
    margin-top: 10px;
    margin-left: 16px;
  }
  .duban{
    width: 100%;
    height: 48px;
    background: rgba(238,241,242,0.45);
  }
  .font{
    opacity: 0.72;
    font-family: PingFangSC-Regular;
    color: #939393;
    line-height: 48px;
  }
  .left{
    float: left;
    font-size: 16px;
    margin-left: 16px;
  }
  .right{
    float: right;
    font-size: 14px;
    margin-right: 16px;
  }
  .block_floot{
    width: 50%;
    height: 48px;
    line-height: 48px;
    position: fixed;
    bottom: 0;
    text-align: center;
    font-size: 14px;
  }
</style>