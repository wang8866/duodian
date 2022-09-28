<template>
  <div class="history-search">
    <header>
      <h3>
        <span>历史搜索</span>
        <i class="iconfont icon-guanbi1"></i>
      </h3>
      <ul class="cont">
       <li v-for="(item, index) in val" :key="index">{{item}}
       </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HistorySearch',
  props: {
    val: String
  }
}
</script>

<style lang="scss" scoped>
  .history-search {
    margin-top: 20px;
    header {
      h3 {
        font-size: 30px;
        color: #232326;
        line-height: 30px;
        @include flex (row, center,space-between);
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
