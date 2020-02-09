<template>
    <div class="cart_ui">
        <!-- {{this.$store.state.category.shopCat}} -->
        <div class="shopSingle" v-for="(items,index) in $store.state.category.shopCat" :key="index">
            <div class="shopSingle_img">
                <img :src="items.item_icon" alt="">
            </div>
            <div class="shopSingle_price">
                价格为：{{items.price*items.count}}
            </div>
            <div class="a">
                <div class="shopSingle_count">
                <button @click="sub(items)">减一个</button>
                <div class="count">{{items.count}}</div>
                <button @click="add(items)">加一个</button>
            </div>
            </div>
        </div>
        <div class="countAll">总价是：{{$store.getters.countAll}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // count:this.$store.state.category.shopCat
        }
    },
    methods:{
        sub(items){
            this.$store.commit('sub',items)
            window.console.log(items)
        },
        add(items){
            this.$store.commit('add',items)
        }
    }
}
</script>


<style  >
.shopSingle
{
    width: 100%;
}
.shopSingle_img
{
    text-align: center;

}
.shopSingle_img img
{
    width: 100%;
}
.a
{
    margin: 0 auto;
    width: 50%;;
}
.shopSingle_price
{
    text-align: center;
    font-size: 23px;
    font-weight: 700;
}
.shopSingle_count
{
    display: inline-flex;
    width: 100%;
    height: 35px;
    justify-content: space-around;
    align-content: center;
}
.count
{
    line-height: 35px;
}
.countAll
{
    margin-bottom: 50px;
}
</style>