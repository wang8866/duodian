<template>
  <nav>
    <a
      href="javascript:;"
      v-for="(item, index) in tabs"
      :key="index"
      :class="{
        active: activeIndex === index
        }"
      @click="change(index)"
    >
    {{item.text}}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tabs: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change (index) {
      this.activeIndex = index
      this.$emit('change', index, this.tabs[index])
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    @include wh (100%, 92px);
    @include flex (row, center, space-between);
    font-size: $font-size-s;
    padding: 0 30px;
    box-sizing: border-box;
    background: #fff;
    overflow: auto;
    @include border-1px(bottom, $color-border-line);
    a {
      color: #4A4A4A;
      flex-shrink: 0;
      &.active {
        color: $red;
        font-size: $font-size-m;
        font-weight: bold;
      }
    }
  }
</style>
