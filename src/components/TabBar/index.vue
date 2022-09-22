<template>
  <div
    class="tab-bar" :class="{
      [layout]: true
    }">
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
      {{item[tabName]}}
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  props: {
    tabs: Array,
    tabName: {
      type: String,
      default: 'text'
    },
    layout: {
      type: String,
      default: 'row'
    }
  },
  watch: {
    tabs () {
      this.activeIndex = 0
    }
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
.tab-bar {
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
  &.column {
    @include wh(172px, 100%);
    nav {
      @include wh(100%, auto);
      @include flex(column);
    }
  }
}
</style>
