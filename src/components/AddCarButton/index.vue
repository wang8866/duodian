<template>
  <div>
    <button class="add-car-button" @click.stop="addCar">
      <slot></slot>
    </button>
    <popup-menu
      title="加入购物车"
      :visible.sync="visible"
    >
      <template v-slot:title>
        <div>
          <dl class="product-list">
            <dt>
              <img class="images" :src="product.img" alt="">
            </dt>
            <dd>
              <header>
                <h3>{{product.name}}</h3>
              </header>
              <footer>
                <p>
                  <span>￥<b>{{product.price | formatPrice}}</b></span>
                  <s>￥{{product.price | formatPrice}}</s>
                </p>
              </footer>
            </dd>
          </dl>
        </div>
      </template>
      <div class="contnet">
        <div class="sku">sku
          <number-list v-model="num" />
        </div>
        <button @click="add()">添加购物车</button>
      </div>
    </popup-menu>
  </div>
</template>
<script>
export default {
  name: 'AddCarButton',
  props: {
    product: Object
  },
  data () {
    return {
      visible: false,
      num: 1
    }
  },
  methods: {
    addCar () {
      this.visible = true
    },
    add () {
      this.$api.car.add({
        product_id: this.product.id,
        num: this.num
      }).then(() => {
        this.$store.dispatch('car/getCarList')
        this.visible = false
      })
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
  .add-car-button {
    @include wh (63px, 63px);
    @include flex(row, center, center);
    background: $red;
    box-shadow: 0px 1px 1px 0px rgba(255, 64, 54, 0.2);
    border-radius: 50%;
    border: 0;
  }
  ::v-deep .product-list {
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
      }
    }
  }
</style>
