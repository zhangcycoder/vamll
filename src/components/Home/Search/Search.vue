<template>
    <div>
        <TopSearch :reveal="show"/>
        <SearchHistory v-show="isShow" :removeNode="hiddle"/>
    </div>
</template>


<script>
import TopSearch from './TopSearch'
import SearchHistory from './SearchHistory'
import {clearSearchHistory} from '../../../../localStorage/index'
export default {
    data(){
        return{
            isShow:false
        }
    },
    components:{
        TopSearch,
        SearchHistory
    },
    methods:{
        hiddle(){
            this.isShow=false;
            clearSearchHistory()
        },
        show(){
            this.isShow=true
        }
    }
}
</script>



<style scoped>
    
</style>