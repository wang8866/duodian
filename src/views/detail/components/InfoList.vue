<template>
  <div class="info">
    <header class="info-header">
      <span
        >￥<b>{{ detailIndfo.price | formatPrice }}</b></span
      >
      <s>￥{{ detailIndfo.price | formatPrice }}</s>
      <p>累计销售{{ 1.5 }}万份</p>
    </header>
    <footer class="info-footer">
      <div class="cont">
        <p>{{ detailIndfo.name }}</p>
        <p>
          <i class="iconfont icon-zhuanchu"></i>
          <span>分享好友</span>
        </p>
      </div>
      <div class="surplus">剩余{{ detailIndfo.id }}份</div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'InfoList',
  props: {
    detailIndfo: [Array, Object]
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  }
}
</script>

<style lang="scss" scoped>
 .info {
  margin-bottom: 25px;
  background: #fff;
  .info-header {
    background:$red;
    font-size: 26px;
    color: #fff;
    padding: 20px 30px;
    box-sizing: border-box;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    span {
      font-weight: bold;
      b {
        font-size: 46px;
      }
    }
    s {
      font-size: 22px;
      color: #fff;
      margin-left: 13px;
    }
    p {
      font-size: 22px;
      margin-top: 6px;
    }
  }
  .info-footer {
    padding: 55px 30px 21px;
    .cont {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 36px;
      p {
        &:nth-child(1) {
          width: 510px;
          line-height: 46px
        }
        &:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #FE3113;
          i {
            font-size: 60px;
          }
          span {
            font-size: 20px;
            margin-top: 10px;
          }
        }
      }
    }
    .surplus {
      color: #999;
      font-size: 24px;
      margin-top: 26px;
    }
  }
}
</style>
