<template>
  <div class="home">
    <NavigationBar type="default" title="发线频道" :Onclick="onClick" :isLogo="isLogo" :lastStep="lastStep"/>
    <router-view name="Search"></router-view>
    <router-view name="Content"></router-view>

  </div>
</template>

<script>
import NavigationBar from '../components/common/NavigationCar'
export default {
  data(){
    return{
      isLogo:true
  }
  },
  name: 'home',
  components: {
    NavigationBar,
  },
  methods:{
    onClick(){//点击logo触发函数
      if(this.isLogo){
        this.isLogo=!this.isLogo
      }
      if(this.$route.path=='/Content'){//判断当前是再哪个页面如果是在跟页面就push到search
        this.$router.push('/search')
      } 
      
    },
    lastStep(){//在search页面点击返回上一步
       this.isLogo=!this.isLogo
      // this.$router.go(-1)//这一步是回退到上一个页面
        if(this.$route.path=='/search'||this.$route.path=='/'){//如果是在search页面就pusu到跟页面
          this.$router.push('/Content')
        }
    },
    
  },
  mounted(){
    if(this.$route.path=='/search'){
      this.isLogo=!this.isLogo
    }
     if(this.$route.path=='/'){//判断当前是再哪个页面如果是在跟页面就push到search
        this.$router.push('/Content')
      } 
    }
    
}
</script>
