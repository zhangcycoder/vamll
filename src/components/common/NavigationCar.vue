<template>
    <div class="navigation_bar_container">
        <div>
             <div v-if="type==='default'">
                 <div class="default_bar_title">
                     <div class="default_bar_logo">
                         <img v-show="isLogo" src="../../assets/common/logo.png" alt="" class="logos">
                         <img v-show="!isLogo" src="../../assets/common/左箭头 (1).png" alt="" 
                         @click="lastStep"
                         >
                     </div>
                     <div class="default_bar_search">
                         <div  @click="Onclick"
                                @keydown.13="setSearch(value)"
                         >
                             <el-input
                            placeholder="请输入内容"
                            v-model="value"
                            >
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            </el-input>
                         </div>
                     </div>
                     <div  class="default_bar_items">
                         <div class="default_var_icon" v-show="isLogo">
                             <span class="el-icon-chat-dot-round"  ></span>
                         </div>
                         <div class="default_var_button">
                             登录
                         </div>
                     </div>
                 </div>
            </div>
            <div v-else-if="type=='special'">
                <h2 class="navigation_var_title">
                    {{title}}
                </h2>
            </div>
        </div>
    </div>
</template>

<script>
import {setSearchKey,getSearchKey} from '../../../localStorage'

// const 
export default {
    data(){
        return{
            value:"",
            // list:[]
        }
    },
    props:{
        type:String,
        title:String,
        Onclick:Function,
        lastStep:Function,
        isLogo:Boolean
    },
    methods:{
        setSearch(value){
            let list = getSearchKey()
            if(list){
                list.push(value)
                setSearchKey(list)
            }else{
                list=[];
                list.push(value)
                setSearchKey(list)
            }
        }
    }
}
</script>



<style  scoped>
.navigation_bar_container
{
    width: 100%;
    height: 64px;
}
.navigation_var_title
{
    text-align: center;
    line-height: 64px;
    font-size: 26px;
    font-weight: 600;
}
.default_bar_title
{
    width: 100%;
    height: 64px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
.default_bar_logo
{
    width: 25%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.logos
{
    width: 80%;  
}
.default_bar_search
{
     width: 50%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
/* .default_bar_search input
{
    width: 90%;
    height: 30px;
    border: 1px solid black;
} */
.default_bar_items
{
    width: 25%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.default_var_icon
{
    width: 50%;
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 24px;
}
.default_var_button
{
    width: 50%;
    height: 64px;
    text-align: center;
    line-height: 64px;
    font-size: 16px;
}
</style>