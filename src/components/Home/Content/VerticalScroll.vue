<template>
    <div>
       <div class="plugIn">
            <div class="headine">商城头条</div>
            <div class="scroll">
                <el-carousel :interval="5000" arrow="always" height="40px" direction="vertical" indicator-position="none" >
                    <el-carousel-item v-for="(item,index) in hot" :key="index" id="a">
                    <p>{{ item.text }}</p>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="more">
                等多
            </div>
       </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            hot:[
                {
                    text:'快来说说你的新年愿望'
                },
                {
                    text:' iPhone新外观曝光！真的没刘海，四边还等宽'
                },
                { 
                    text:'苹果突然宣布，华为三星猝不及防，网友：终于等到了'
                },
                {
                    text:'鸿蒙“跳票”，但掏空安卓，余承东：P40使用安卓10.0和HMS服务'
                },
                {
                    
                    text:'卖掉iPhone X入手华为Mate 30 Pro，憋了一肚子心里话一吐为快'
                },
                {
                    text:'魅族17摊牌了！真机上手照曝光：还有Plus瀑布屏版本'
                },
                {
                    text:'拼了！iPhone 9/12/12 Pro齐曝光：足足六款'
                },
                {
                    text:'雷军放大招！12GB+512GB手机上架官网，良心定价让网友开始沸腾'
                },
            ]
        }
    },
    mounted(){

    }
}
</script>

<style  scoped>
.headine
{
    font-size: 17px;
    font-weight: 700;
    width: 20%;
}
.scroll
{
    width: 70%;
    background-color: gainsboro;
}
.more
{
    width: 10%;
}
.plugIn
{
    display: inline-flex;
    width: 100%;
    height: 40px;
    align-content: center;
    text-align: center;
    margin-top: 10px;
    line-height: 40px;
}
#a
{
    background-color: white;
}
</style>