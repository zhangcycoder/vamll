<template>
    <div class="handeleText" >
       <div class="single" :class="{active:value.isShow}">
            {{this.value.name}}
       </div>
    </div>
</template>


<script>
export default {
    props:{
        value:Object
    },



}
</script>


<style scoped>
.handeleText
{
    margin: 0 10px;
    
    
}

.active
{
    border-bottom: 2px solid red;
    padding-bottom: 4px;
    color: red;
    font-weight: 700
}
</style>