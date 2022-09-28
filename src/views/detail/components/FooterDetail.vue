<template>
  <div class="footer-detail">
    <router-link
      class="box"
      v-for="(item, index) in images"
      :key="index"
      :to="item.path"
      active-class="active"
    >
      <img :src="item.icon" alt="" class="icon">
      <img :src="item.select_icon" alt="" class="select_icon" />
      <span>{{item.text}}</span>
    </router-link>
    <div class="button">
      <button class="join">加入购物车</button>
      <button class="buy">直接购买</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterDetail',
  props: {
    images: Array
  }
}
</script>

<style lang="scss" scoped>
  .footer-detail {
    position: fixed;
    bottom: 0;
    left: 0;
    @include wh (100%, 98px);
    background: #fff;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box {
      display: flex;
      flex-direction: column;
      &.active {
        span {
          color: $red;
        }
        .icon {
          display: none;
        }
        .select_icon {
          display: block;
        }
      }
      &:nth-child(1) {
        margin-left: 44px
      }
      img {
        @include wh (48px, 40px);
        margin: 0 auto;
      }
      .select_icon {
        display: none;
      }
      span {
        font-size: 22px;
        color: #999999;
        margin-top: 8px;
      }
    }
    .button {
      display: flex;
      button {
        font-size: 32px;
        color: #fff;
        height: 98px;
        border: 0;
        &.join {
          width: 210px;
          background-image: linear-gradient(135deg,#ffba0d,#ffc30d 69%,#ffcf0d);
        }
        &.buy {
          width: 280px;
          background-image: linear-gradient(135deg,#f2140c,#f2270c 70%,#f24d0c);
        }
      }
    }
  }
</style>
