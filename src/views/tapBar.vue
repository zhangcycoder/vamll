<template>
    <div>
        <ul class="tapBar">
        <li v-for="(items,index) in item" v-on:click="addClassFun(index)" :class='{a:index==is}' :key="index">
          <div class="box">
            <img class="img1" :src=items.img1 alt="">
            <img class="img2" :src=items.img2 alt="">
          </div>
          {{items.title}}
        </li>
      </ul>
    </div>
</template>


<script>
export default {
    data() {
        return {
          is:0,
            item:[
                {
                    img1:require('../assets/首页.png'),
                    img2:require('../assets/首页2.png'),
                    title:'首页'
                },
                {
                    img1:require('../assets/分类2.png'),
                    img2:require('../assets/分类1.png'),
                    title:'分类'
                },
                {
                    img1:require('../assets/惊喜 (1).png'),
                    img2:require('../assets/惊喜 (3).png'),
                    title:'分享'
                },
                {
                    img1:require('../assets/购物车1.png'),
                    img2:require('../assets/购物车2.png'),
                    title:'购物车'
                },
                {
                    img1:require('../assets/登录1.png'),
                    img2:require('../assets/登录2.png'),
                    title:'未登录'
                },
            ]
        }
    },
    methods:{
      addClassFun: function(index) {  
        this.is=index
          if(index==0&&this.$route.path!=='/'){
            this.$router.push('/')
          }
          else if(index==1&&this.$route.path!=='/classify'){
            this.$router.push('/classify')
          }
          else if(index==2&&this.$route.path!=='/Accident'){
            this.$router.push('/Accident')
          }
          else if(index==3&&this.$route.path!=='/Cart'){
            this.$router.push('/Cart')
          }
          else if(index==4&&this.$route.path!=='/Myinfo'){
            this.$router.push('/Myinfo')
          }
      },
    }
}
</script>


<style scoped>
.a
{
color: orange;
}
.a .img1
{
  display: none;
  text-align: center;
}
.a  .img2
{
  display: block;
  display: inline-flex;
  justify-content: center;
}
.img2{
  display: none;
  text-align: center;
  width: 20px;
  height: 20px;
}
.tapBar
{
  width: 100%;
  background-color: gainsboro;
  padding: 0px;

  display: inline-flex;
  justify-content: space-between;

}
.tapBar img
{
  width: 20px;
  height: 20px;
}
.tapBar li
{
  list-style: none;
  width: 18%;
  text-align: center;
  height: 44px;
} 
</style>