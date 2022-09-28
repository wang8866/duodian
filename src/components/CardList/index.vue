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
        font-size: 30px;
        color: #262626;
        font-weight: bold;
        padding-left: 14px;
        position: relative;
        z-index: 1;
        &::before {
          background-image: linear-gradient(180deg,#f5503a,#fad1cb);
          content: "";
          height: 30px;
          left: 0;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
        }
      }
    }
  }
</style>
