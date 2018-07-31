<template>
    <li>
        <slot></slot>
    </li>
</template>
<script>
   export default{
       name:"myLi",
   } 

</script>
<style scoped lang="scss">
  li{
    float: left;
    text-align: center;
    line-height: 1rem;
    height: 1rem;
    width: 33.3%;
    font-size: .12rem;
  }
</style>

