<template>
  <div class="my-order">
    <header>
      <p>我的订单</p>
      <p>
        查看全部
        <i class="iconfont icon-jiantouyou"></i>
      </p>
    </header>
    <footer>
      <div class="box" v-for="(item, index) in list" :key="index">
        <img :src="item.icon" alt="">
        <p>{{item.text}}</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'my-order',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.my-order {
  @include wh (auto, 299px);
  width: calc(100% - 60px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #FFF;
  box-shadow: 0px 33px 20px -20px rgba(0,0,0,0.11), 0px 0px 17px -3px rgba(0,0,0,0.06);
  border-radius: 12px;
  border: 1px solid #F0F0F0;
  padding: 0 30px;
  box-sizing: border-box;
  margin: 0 auto;
  position: absolute;
  top: 216px;
  left: 0;
  right: 0;
  header {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 0;
    box-sizing: border-box;
    p {
      &:nth-child(1) {
        color: #111;
        font-size: $font-size-s;
        font-weight: bold;
      }
      &:nth-child(2) {
        color: $color-grey ;
        font-size: $font-size-xs;
        i {
          margin-left: 9px;
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    padding: 0 0 40px;
    box-sizing: border-box;
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      &:last-child {
        img {
          @include wh (64px, 50px);
        }
      }
      img {
        @include wh (64px, 50px);
      }
      p {
        font-size: $font-size-xs;
        color: #111;
        margin-top: 12px;
      }
    }
  }
}
</style>
