<template>
  <div>
      我是搜索
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newV, oleV) {
      console.log(newV)
    }
  }
}
</script>

<style>
</style>
