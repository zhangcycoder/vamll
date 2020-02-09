<template>
  <div id="app">
    <div class="header">
      <h1 class="title">Refresh & Infinite</h1>
    </div>

    <scroller style="top: 44px"
      :on-refresh="shangla"
      :on-infinite="infinite">
      <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}" :key="index">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: []//默认显示数组
      }
    },
  mounted(){
    for(var i = 1; i<=20; i++){
      this.items.push(i+'默认显示')
      this.top=1
      this.bottom=20
    }
  },
    methods: {
      shangla (done) {//上拉松手时触发这个事件
        setTimeout(() => {
          var start = this.top - 1
          window.console.log(start)
          for (var i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' 上拉刷新出来')
          }
          this.top = this.top - 10
          window.console.log(this.top)
          done()//参数获取到y轴和活动时的y轴 判断出是在向下滑动还是向上滑动
        }, 1500)
      },

      infinite (done) {
        setTimeout(() => {
          var start = this.bottom + 1
          for (var i = start; i < start + 10; i++) {
            this.items.push(i + ' 下拉加载出来')//push后的跟在数组之后
          }
          this.bottom = this.bottom + 10
          done()
        }, 1500)
      }
    }
  }
</script>









<style>
  html, body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }
  .grey-bg {
    background-color: #eee;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
</style>