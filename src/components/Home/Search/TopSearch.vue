<template>
    <div class="top_search_container">
         <div class="top_search_header">
            <div class="top_search_header_title">
                热门搜索
            </div>
        </div>
        <div class="topsearch_content" >
           <div class="topsearch_wrapper " :class="{itemsHot:items.isHot}" v-for="(items,index) in item" :key="index" @click="setSearchItem(items.name)">
                {{items.name}}
            </div>
           
        </div>
    </div>
</template>

<script>
import {getTopSearch} from '../../../network/networkClient'
import {setSearchKey,getSearchKey} from '../../../../localStorage/index'
export default {
    props:{
        reveal:Function
    },
    data(){
        return{
            item:[]
        }
    },
    mounted(){
        getTopSearch('topSearch.json').then((res)=>{
            this.item=res

        }).catch((err)=>{
            window.console.log(err)
        })
    },
    methods:{
            setSearchItem(value){
                this.reveal()
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

<style scoped>
  .top_search_container
  {
      width:100%;
  }  
.top_search_header
{
    width:100%;
    height:40px;
    display:inlin-flex;
}
.top_search_header_title
{
    width: 100%;
}
.topsearch_content
{
    display:inline-flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
.topsearch_content>div
{
    background-color: #eee;
    padding: 4px;
    border-radius: 5px;
    margin: 10px;
}
.topsearch_content .itemsHot
{
    background: red;
    color: white;
}
</style>