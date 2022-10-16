<template>
  <div class="num">
    <button @click="val -= 1">-</button>
    <output>{{val}}</output>
    <button @click="val += 1">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberList',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    value (newValue) {
      this.val = newValue
    },
    val (newValue) {
      this.$emit('input', newValue)
      this.$emit('change', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.num {
  display: flex;
  align-items: center;
  output {
    font-size: 28px;
    padding: 0 10px;
    color: #111;
    font-weight: bold;
  }
}
</style>
