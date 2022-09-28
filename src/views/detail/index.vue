<template>
  <div class="detail-page">
    <swiper-banner :list="detailIndfo.images" />
    <info-list :detailIndfo="detailIndfo"/>
    <card-list class="card" title="购买记录">
      <div class="buy-list"  v-for="(item, index) in 3" :key="index">
        <dl>
          <dt>&#128512;</dt>
          <dd>
            <p>lu***</p>
            <p>2018.11.11</p>
          </dd>
        </dl>
        <div class="num">购买<span>{{6}}</span>件</div>
      </div>
    </card-list>
    <card-list class="card" title="商品评价">
      <div class="evaluate-wrap">
        <div class="evaluate" v-for="(item, index) in 5" :key="index">
        <div class="top">
          <dl>
            <dt>👶</dt>
            <dd>
              <p>小**圆</p>
              <p>2019.6.18</p>
            </dd>
          </dl>
          <div class="satisfied">
            <p>✰✰✰✰✰</p>
            <span>很满意</span>
          </div>
        </div>
        <div class="bottom">商品完好</div>
      </div>
      </div>
    </card-list>
    <card-list class="card" title="猜你喜欢">
      <div class="content">
        <product-list :list="products" />
      </div>
    </card-list>
    <card-list class="card card-detail" title="商品详情">
      <div class="detail" v-html="detailIndfo.detail"></div>
    </card-list>
    <footer-detail :images="images"/>
  </div>
</template>

<script>
import SwiperBanner from './components/SwiperBanner.vue'
import InfoList from './components/InfoList.vue'
import FooterDetail from './components/FooterDetail.vue'
export default {
  name: 'detail-index',
  components: {
    SwiperBanner,
    InfoList,
    FooterDetail
  },
  data () {
    return {
      detailIndfo: [],
      images: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/images/home.png'),
          select_icon: require('@/assets/images/home-select.png')
        },
        {
          path: '/car',
          text: '购物车',
          icon: require('@/assets/images/car.png'),
          select_icon: require('@/assets/images/car-select.png')
        }
      ],
      products: [],
      fechProductParams: {
        page: 1,
        page_size: 10,
        category_id: 1
      }
    }
  },
  watch: {
    fechProductParams: {
      handler: 'fechProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.fetchProductDetail()
  },
  methods: {
    async fetchProductDetail () {
      const id = this.$route.params.id
      const res = await this.$api.product.detail(id)
      this.detailIndfo = res.data
      console.log(res)
    },
    async fechProductList () {
      const res = await this.$api.product.list(this.fechProductParams)
      if (this.fechProductParams.page === 1) {
        this.products = res.data
      } else {
        this.products = this.products.concat(res.data)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-page {
  background: #F8F8F8;
}
::v-deep .detail {
  img {
    display: block;
    @include wh(100%, auto);
  }
}
.card {
  border-radius: 24px;
  margin-top: 24px;
  padding: 0 36px;
  padding-bottom: 30px;
  box-sizing: border-box;
  ::v-deep .content {
    .product-list {
      display: flex;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      dl {
        @include wh (240px, auto);
        display: flex;
        flex-direction: column;
        padding: 30px 0;
        margin: 0 30px;
        &::after {
          background: transparent;
        }
        dd {
          margin-left: 0;
          header {
            h3 {
              font-size: 26px;
            }
            p {
              display: none;
            }
            .tags-list {
              display: none;
            }
          }
          footer {
            p {
              display: flex;
              flex-direction: column;
            }
            .car {
              @include wh(45px, 45px);
              display: flex;
              justify-content: space-between;
              img {
                @include wh(24px, 24px);
                margin: 0 auto;
              }
            }
          }
        }
      }
    }
  }
  ::v-deep .buy-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 60px;
    &:nth-child(1) {
      padding-top: 50px;
    }
    dl {
      display: flex;
      align-items: center;
      dt{
        font-size: 60px;
      }
      dd {
        margin-left: 12px;
        p {
          color: #111;
          font-size: 28px;
          line-height: 34px;
          &:nth-child(2) {
            color: #999;
            font-size: 26px;
          }
        }
      }
    }
    .num {
      font-size: 26px;
      color: #111;
      span {
        color: $red;
        font-weight: bold;
      }
    }
  }
  ::v-deep .evaluate-wrap {
    display: flex;
    overflow: auto;
     &::-webkit-scrollbar {
      display: none;
    }
    .evaluate {
      background: #F8F8F8;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 12px;
      width: 80%;
      margin-right: 30px;
      flex-shrink: 0;
      &:last-child {
        margin-right: 0;
      }
      .top {
        display: flex;
        justify-content: space-between;
        dl {
          display: flex;
          align-items: center;
          dt{
            font-size: 60px;
          }
          dd {
            margin-left: 12px;
            p {
              color: #111;
              font-size: 28px;
              line-height: 34px;
              &:nth-child(2) {
                color: #999;
                font-size: 26px;
              }
            }
          }
        }
        .satisfied {
          display: flex;
          flex-direction: column;
          justify-content: center;
          p {
            font-size: 40px;
            color: gold;
          }
          span {
            color: #999;
            font-size: 26px;
            text-align: right;
            margin-top: 20px;
          }
        }
      }
      .bottom {
        font-size: 26px;
        color: #111;
        margin-top: 30px;
      }
    }
  }
}
.card-detail {
  padding: 0;
  margin-bottom: 98px;
  ::v-deep header {
    padding: 0 36px;
    box-sizing: border-box;
  }
}
</style>
