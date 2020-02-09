<template>
    <div>
        <div ref="wrapper" class="box">
            <div class="homeHader">
                <div v-for="(k,i) in headerScroll" :key="i" >
                <HomeItem :value='k'/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";
import HomeItem from './HeaderItem'
export default {
    data(){
        return{
            headerScroll:[
                {
                    name:"推荐",
                    isShow:true
                },
                {
                    name:'华为5G',
                    isShow:false
                },
                {
                    name:"荣耀新品",
                    isShow:false
                },
                {
                    name:'meta30系列',
                    isShow:false
                },
                {
                    name:"数码惠",
                    isShow:false
                },
                {
                    name:'拼团',
                    isShow:false
                }]
        }
    },
    components:{
        HomeItem
    },
    mounted(){
         if (!this.$refs.wrapper) {
            return;
        }
         new BScroll(this.$refs.wrapper, {
        scrollX: true,
        scrollY:false,
        bounce: true
      });
    }
}
</script>

<style scoped>
    .box
    {
        width: 100%;
        height: 40px;
        overflow: hidden;
    }
    .homeHader
    {
        width: 130%;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        background-color: wheat;
    }
</style>