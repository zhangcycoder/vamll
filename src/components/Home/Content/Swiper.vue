<template>
    <div>
        <el-carousel indicator-position="left"  height="178px" >
            <el-carousel-item v-for="(item,index) in slider" :key="index" >
             <img :src="item.image" alt="" class="homeimg">
            </el-carousel-item>
        </el-carousel>
        <div class="vessel">
            <img src="../../../assets/common/zpbz.png" alt="">
        </div>
    </div>
</template>



<script>
// https://res.vmallres.com/pimages//squaredInfo/icon/8/9ad2bbf2f6e6c675fdada7969c8f7d6d.png
import {login} from '../../../network/index'
export default {
    data() {
        return {
            slider:[]
        }
    },
    created(){
      login('/homeSwiper.json').then((res)=>{
      window.console.log(res)
        this.slider=res
      }).catch(()=>{})
    }
}
</script>


<style >
.vessel
{
    height: 24px;
    overflow: hidden;;
}
.vessel img
{
    width: 100%;

}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .homeimg
  {
      width: 100%;
      height: 100%;;
  }
</style>