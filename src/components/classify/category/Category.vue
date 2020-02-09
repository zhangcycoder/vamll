<template>
  <div>
    <div>
      <!-- <NavigationBar type="default" title="发线频道" :isLogo="isLogo" /> -->
      <div class="category_container">
        <div class="category_container_title">
          <div
            v-for="(items,index) in $store.state.category.left"
            :key="index"
            @click="handleDetails(items)"
          >{{items}}</div>
        </div>
        <div class="category_container_detail_wrapper" >
          <div class="category_container_detail">
            <div class="refresh" v-show="resrefsh">刷新中...</div>
            <div
              v-for="(items,index) in $store.state.category.right.category_classify"
              :key="index"
              class="category_details_AD"
            >
              <img :src="items.image" alt />
            </div>
            <div class="category_details_swiper">
              <div class="category_details_wrapper">
                <div v-for="(img,index) in $store.state.category.right.banner" :key="index">
                  <img :src="img.image" alt />
                </div>
              </div>
            </div>
            <div class="category_container_commodity">
              <div class="category_container_commodity_title">{{$store.state.category.right.title}}</div>
              <div class="category_container_commodity_list">
                <div
                  v-for="(items,index) in $store.state.category.right.category_list"
                  :key="index"
                  class="category_container_single"
                  @click="toShopcart(items)"
                >
                  <img :src="items.item_icon" alt />
                  {{items.item_name}}
                </div>
              </div>
            </div>
            <div class="refreshs" v-show="bottom">
              加载中...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
// import NavigationBar from "../../common/NavigationCar";
import { getCategory } from "../../../network/networkClient";
export default {
  data() {
    return {
      isLogo: true,
      resrefsh: false,
      bottom:false
    };
  },
  name: "category",
  components: {
    // NavigationBar
  },
  mounted: function() {
    getCategory("category.json")
      .then(res => {
        this.$store.commit("commitData", res);
      })
      .catch(() => {});

    new Bscroll(".category_details_swiper", {
      scrollX: true,
      scrollY: false
    });
  this.scroll = new Bscroll(".category_container_detail_wrapper", {
      scrollX: false,
      scrollY: true,
      click:true,
      probeType: 3
    });
    this.scroll.on("scroll", (e)=> {
      if (e.y > 50) {
        this.resrefsh=true
      }else{
        setInterval(()=>{
             this.resrefsh = false; 
        },3000)
      }

    });
    this.scroll.on("touchEnd",(e)=>{
      
      if(this.scroll.maxScrollY>e.y+60){
        this.bottom=true
                let temp = this.$store.state.category.right.category_list
                window.console.log(temp)
                temp.forEach(element => {
                   this.$store.state.category.right.category_list.push(element)
                });
               
      }else{
        setInterval(()=>{
        this.bottom=false
        },4000)
      }
    })
  },
  methods: {
    handleDetails(value) {
      this.$store.commit("commitRight", value);
    },
    toShopcart(e){
      this.$store.commit('toShop',e)
    }
  }
};
</script>

<style scoped>
@import "./category.css";
</style>