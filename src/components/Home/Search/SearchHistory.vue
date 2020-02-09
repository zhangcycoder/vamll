<template>
    <div>
        <div class="serach_var_title">
            <div>
                历史搜索
            </div>
            <div @click="removeNode">
                清除
            </div>
        </div>
        <div class="search_bar_container">
            <div v-for="(item,index) in items" :key="index" class="searchitems">
                {{item}}
            </div>
        </div>
    </div>
</template>

<script>
import {getSearchKey} from '../../../../localStorage/index'
export default {
    props:{
        removeNode:Function
    },
    data(){
        return{
        items:[]

        }
    },
    mounted(){
       this.items = getSearchKey()
    },
    methods:{
        
    }
}
</script>


<style  scoped>
/* .search_bar_container
{
    width: 100%;
    justify-content: left;
    align-items: center;
    display: inline-flex;
    flex-wrap: wrap;
} */
.searchitems
{
    padding: 5px;
    margin: 5px;
}
.serach_var_title
{
    display: inline-flex;
    justify-content: space-between;
    width: 100%;;
    align-items: center;
}
</style>