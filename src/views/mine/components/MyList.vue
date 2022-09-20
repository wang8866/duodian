<template>
  <div class="my-list">
    <div class="left">
      <div
      class="box"
      v-for="(item, index) in list"
      :key="index"
      >
        <img :src="item.icon" alt="">
        <span>{{item.text}}</span>
      </div>
    </div>
    <div class="right">
      <p>8张未使用</p>
      <p>400-123-123</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.my-list {
  @include wh(auto, 342px);
  width: calc(100% - 60px);
  margin: 295px auto 0;
  background: #fff;
  box-shadow: 0px 0px 17px -3px rgba(0,0,0,0.06);
  border-radius: 12px;
  border: 1px solid #F0F0F0;
  padding: 40px 34px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .box {
      display: flex;
      align-items: center;
      img {
        @include wh(66px, 62px);
      }
      span {
        font-size: $font-size-s;
        color: #111;
        margin-left: 14px;
        font-weight: bold;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 0;
    p {
      font-size: $font-size-xs;
      color: $color-grey;
      &:nth-child(1) {
        text-align: right;
        color: $red;
      }
    }
  }
}

</style>
