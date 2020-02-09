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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
}
* {
  margin: 0;
  padding: 0;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.content {
  width: 100%;
  height: 680px;
}
.tapbar {
  width: 100%;
  left: 0;
  position: fixed;
  bottom: 0px;
}
</style>
