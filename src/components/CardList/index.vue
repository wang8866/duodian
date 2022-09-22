<template>
  <div class="card-wrap">
    <header>
      <h3 class="title">{{title}}</h3>
    </header>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card-list',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .card-wrap {
    background: #fff;
    header {
      @include wh (100%, 79px);
      line-height: 79px;
      .title {
        font-size: 26px;
        color: #333;
      }
    }
  }
</style>
