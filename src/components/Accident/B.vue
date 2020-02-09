<template>
     <div class="accident">
        <div class="pulldown_refresh" v-show="isDown">刷新</div>
        <div class="scrolls">
        <div class="wrapper">
            <div v-for="(item) in list" class="item" :key="item">{{item}}</div>
        </div>
        </div>
        <div class="pullUp_refresh" v-show="isUp">加载</div>
    </div>
</template>

<script>
import Bscroll from "better-scroll";

export default {
      data() {
      return {
          list:[1,2,3,4,5,6,7,8,9,10,11,12],
          isDown:false,
          isUp:false,
          s:0,
          x:15

      }
  },
  mounted() {
    this.$nextTick(() => {
        let myScroll = new Bscroll(".scrolls", {
        scrollX: false,
        scrollY: true,
        pullDownRefresh: {
          threshold: 60,
          stop: 0
            },
         pullUpLoad:{
             threshold:20,
         }   
        });
        // myScroll.on('scroll',(pos)=>{
        //     if(pos.y>50){
        //     this.isDown=true
        //     }else{
        //         setTimeout(() => {
        //         this.isDown=false
        //         this.isUp=false
        //         }, 2000);
        //     }
            
        //     if(myScroll.maxScrollY>pos.y-30){
        //         this.isUp=true
        //     }
        // })

        myScroll.on('pullingDown',()=>{
            this.isDown=true
            setTimeout(() => {
                var start =this.s-1;
                for(var i=start; i>start-10;i--){
                    this.list.splice(0,0,i+'上拉出来的')
                }
                this.s-+10
            this.isDown=false
            myScroll.finishPullDown()
            }, 2000);
        })
        myScroll.on("pullingUp",()=>{
            this.isUp=true
            setTimeout(() => {
                var start = this.x+1
                for(var i=start; i<start+10; i++){
                    this.list.push(i+'加载的')
                }
                this.x+=10
                this.isUp=false
                myScroll.finishPullUp()
            }, 2000);
        })

    });

  }
}
</script>

<style  scoped>
.accident {
  width: 100%;
  height: 650px;
}
.scrolls {
  width: 100%;
  height: 100%;
  background-color: blue;
}
.wrapper {
  width: 100%;
  padding-bottom: 20px;
}
.item {
  width: 100%;
  background-color: wheat;
  margin: 10px 0;
  text-align: center;
  line-height: 80px;
}
.pulldown_refresh
{
    text-align: center;
    line-height: 80px;
    width: 100%;
    background-color: red;
}
.pullUp_refresh
{
    text-align: center;
    width: 100%;
    background-color: aquamarine;
}
</style>