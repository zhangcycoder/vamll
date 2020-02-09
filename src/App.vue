<template>
  <div id="app">
    <div class="content">
      <router-view name="content" />
    </div>
    <div v-if="tapBarShow" class="tapbar">
      <router-view name="tapBar"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tapBarShow: true
    };
  },
  mounted() {
    if (this.$route.path == "/search") {
      this.tapBarShow = false;
    }
  },
  updated() {
    if (this.$route.path == "/search") {
      this.tapBarShow = false;
    } else {
      this.tapBarShow = true;
    }
  }
};
</script>
<style>

</style>
