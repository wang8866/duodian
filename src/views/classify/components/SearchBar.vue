<template>
  <div class="search-bar">
    <i class="iconfont icon-sousuo"></i>
    <input type="text" placeholder="搜索校园超市商品">
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style lang="scss" scoped>
  .search-bar {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 17px 30px;
    background: #fff;
    box-sizing: border-box;
    i {
      width: 10%;
      line-height: 64px;
      background: #F6F6F6;
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
      text-align: center;
      color: #565656;
    }
    input {
      width: calc(100% - 10%);
      border: 0;
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
      outline: none;
      background: #F6F6F6;
      &::placeholder{
        color: #D1D1D1;
      }
    }
  }
</style>
