<template>
  <div class="field-item">
    <label v-if="label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'field-item',
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
  .field-item {
    @include wh (100%, 88px);
    @include flex(row);
    @include border-1px(bottom, #f0f0f0);
    line-height: 88px;
    padding: 0 20px;
    box-sizing: border-box;
    label {
      font-size: 28px;
      color: grey;
      flex-shrink: 0;
      width: 180px;
    }
  }
</style>
