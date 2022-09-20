<template>
  <header class="header-bar">
    <a href="javascript:;">
      <i class="iconfont icon-dizhiguanli"></i>
      <output>送至：北京八维研修学院</output>
      <i class="iconfont icon-jiantouyou"></i>
    </a>
    <a href="javascript:;">
      <i class="iconfont icon-sousuo"></i>
    </a>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar'
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
      output {
        margin: 0 14px 0 7px;
      }
      i {
        font-size: $font-size-s;
      }
    }
  }
</style>
