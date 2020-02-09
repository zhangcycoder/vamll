<template>
  <div class="content">
    <HeaderScroll />
    <Swiper />
    <Wrapper />
    <Vertical />
    <Time />
  </div>
</template>

<script>
import HeaderScroll from "./headerScroll";
import Swiper from "./Swiper";
import Wrapper from "./wrapper";
import Vertical from "./VerticalScroll";
import Time from "./CountDowm";
export default {
  components: {
    HeaderScroll,
    Swiper,
    Wrapper,
    Vertical,
    Time
  }
};
</script>


<style  scoped>
.content {
  /* background-color: black */
}
</style>