<template>
  <div class="hot-search">
    <header>
      <h3>热门搜索</h3>
      <ul class="cont">
        <li>华为手环</li>
        <li>打印机色带</li>
        <li>跑步机</li>
        <li>天燃气灶双灶</li>
        <li>风信子种球</li>
        <li>斯诺克球杆</li>
        <li>鳄鱼皮钱包</li>
        <li>珊瑚绒床垫</li>
        <li>演唱会望远镜</li>
        <li>不粘锅煎锅</li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HotSearch'
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
