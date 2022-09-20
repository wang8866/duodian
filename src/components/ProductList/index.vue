<template>
  <div class="product-list">
    <dl
      v-for="(item,index) in list"
      :key="index"
    >
      <dt>
        <img :src="item.img" alt="">
      </dt>
      <dd>
        <header>
          <h3>{{item.name}}</h3>
          <p>累计{{1.5}}万份 / 已拼{{13}}份</p>
          <tags-list :list="['自营', '团购']" />
        </header>
        <footer>
          <p>
            <span>￥<b>{{item.price | formatPrice}}</b></span>
            <s>￥{{item.price | formatPrice}}</s>
          </p>
          <div class="car">
            <img :src="images" alt="">
          </div>
        </footer>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    list: Array
  },
  data () {
    return {
      images: require('@/assets/images/car-shop.png')
    }
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  }
}
</script>

<style lang="scss" scoped>
.product-list {
  dl {
    display: flex;
    padding: 30px;
    box-sizing: border-box;
    background: #fff;
    @include border-1px(bottom, $color-border-line);
    dt {
      @include wh (240px,240px);
      img {
        @include wh (100%,100%)
      }
    }
    dd {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      margin-left: 30px;
      header {
        h3 {
          @include ellipsis(2);
          font-size: $font-size-m;
          color: #111111;
          font-weight: bold;
          line-height: 42px;
      }
        p {
          color: $color-grey;
          font-size: $font-size-xs;
          padding: 12px 0 16px;
        }
      }
      footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: $font-size-xs;
          color: $red;
          span {
            font-weight: bold;
            b {
            font-size: $font-size-l;
            }
          }
          s {
            font-size: 20px;
            color: #C0C0C0;
            margin-left: 8px;
          }
        }
        .car {
          width: 63px;
          height: 63px;
          background: $red;
          box-shadow: 0px 1px 1px 0px rgba(255,64,54,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            @include wh (28px, 28px);
          }
        }
      }
    }
  }
}
</style>
