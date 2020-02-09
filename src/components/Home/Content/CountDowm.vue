<template>
    <div class="box">
        <div class="box_left">限时购⚡</div>
        <div class="box_time">{{start}}</div>
        <div class="box_end">后结束</div>
    </div>
</template>


<script>
import {timer, getDateDiff} from '../../../util/dateManager'
export default {
   data() {
       return {
           start:'',
           b:'',
           c:''
       }
   },
   created(){
      timer('2020/1/16,13:00:00',1000,(res)=>{
            this.start=res
      })
      this.b=getDateDiff('2020-1-16,13:00:00')
   }
}

</script>


<style scoped>
.box{
    width: 100%;
    height: 40px;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
}
.box>div
{
    width: 33%;
}
.box_left
{
    text-align: right;
    font-weight: 700;
    color: red;
}
.box_end
{
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    color: gray;
}
</style>