<template>
  <div>
    <input type="text" :value="val" @input="change">
    <div>{{val}}</div>
    <input type="text" v-debounce="val">
  </div>
</template>

<script>
import utlis from '@/utils/utlis'
export default {
  name: 'test-index',
  data () {
    return {
      val: 123
    }
  },
  methods: {
    change: utlis.debounce(function (e) {
      console.log(e, this)
      this.val = e.target.value
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
