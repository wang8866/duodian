<template>
  <header class="header-bar">
    <router-link
      to="/address"
      href="javascript:;"
    >
      <i class="iconfont icon-dizhiguanli"></i>
      <output>送至：{{address.formattedAddress}}</output>
      <i class="iconfont icon-jiantouyou"></i>
    </router-link>
    <router-link
      to="/search"
      href="javascript:;"
    >
      <i class="iconfont icon-sousuo"></i>
    </router-link>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HeaderBar',
  computed: {
    ...mapState('user', ['address'])
  }
}
</script>

<style lang="scss" scoped>
  .header-bar {
    @include wh (100%, 98px);
    @include flex (row, center, space-between);
    padding: 0 16px;
    box-sizing: border-box;
    background: #fff;
    a {
      color: $color-grey;
      font-size: $font-size-xs;
      &:nth-child(2) {
        flex-shrink: 0;
      }
      output {
        margin: 0 14px 0 7px;
        @include ellipsis(1);
        max-width: 300px;
        display: inline-block;
      }
      i {
        font-size: $font-size-s;
      }
    }
  }
</style>
