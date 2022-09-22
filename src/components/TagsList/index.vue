<template>
  <div class="tags-list">
    <label v-for="(item,index) in list" :key="index">
      {{item}}
    </label>
  </div>
</template>

<script>
export default {
  name: 'tags-list',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  .tags-list {
    display: flex;
    label {
      font-size: 12px;
      background: linear-gradient(251deg, #FE3113 0%, #FD7A00 100%);
      color: #fff;
      border-radius: 40px;
      padding: 8px;
      box-sizing: border-box;
      &:nth-child(2) {
        margin-left: 8px;
      }
    }
  }
</style>
