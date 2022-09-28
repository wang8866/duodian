<template>
  <div class="hot-search">
    <header>
      <h3>热门搜索</h3>
      <ul class="cont">
        <li v-for="(item, index) in list" :key="index">
          {{item}}
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HotSearch',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
  .hot-search {
    margin-top: 45px;
    header {
      h3 {
        font-size: 30px;
        color: #232326;
        line-height: 30px;
        padding-bottom: 20px;
      }
      .cont {
        display: flex;
        flex-wrap: wrap;
        li {
          font-size: 24px;
          color: #686868;
          padding: 10px 20px;
          background: #f0f2f5;
          margin: 10px;
        }
      }
    }
  }
</style>
