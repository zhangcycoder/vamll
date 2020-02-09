<template>
    <div>
        <div class="wapper_conationer">
           <div class="wrapper_vessel">
                <div v-for="(items, index) in imgList" :key="index">
                   <div>
                        <div class="imgs">
                            <img :src="items.image" alt="">
                        </div>
                        <div class="titles">{{items.title}}</div>
                   </div>
                </div>
           </div>
        </div>
    </div>
</template>


<script>
import Bscroll from 'better-scroll'
export default {
    data() {
        return {
            imgList:[
                {image:require('../../../assets/wrapper/01.png'),title:"会员领券"},
                {image:require('../../../assets/wrapper/02.png'),title:"以旧换新"},
                {image:require('../../../assets/wrapper/03.png'),title:"5G频道"},
                {image:require('../../../assets/wrapper/04.png'),title:"众测"},
                {image:require('../../../assets/wrapper/05.png'),title:"分享赚"}
            ]
        }
    },
    mounted(){
        new Bscroll('.wapper_conationer',{
            scrollX:true,
            scrollY:false
        })
    }

}
</script>


<style scoped>
.wapper_conationer
{
    width: 100%;
    height: 60px;
    overflow: hidden;
    margin-top: 8px;;
}
.wrapper_vessel
{
    height: 40px;
    width: 101%;;
    display: inline-flex;
    justify-content: left;
    align-items: center;
}
.wrapper_vessel>div
{
   width: 50px;
    height: 40px;
    margin: 0 15px;
    text-align: center;
}

.imgs img
{
    width: 40px;
    text-align: center;
    /* line-height: 40px; */
}
.titles
{
    font-size: 12px;
}
</style>