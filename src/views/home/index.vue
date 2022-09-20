<template>
  <div>
    <header-bar/>
    <swiper-banner :list="banner"/>
    <mall-nav :nav="mall_nav" />
    <must-buy :img="images"/>
    <div ref="content">
      <tab-bar
      :tabs="hot_nav"
      @change="navchange"
      class="tabs"
      />
      <product-list :list="products" />
    </div>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderBar.vue'
import MallNav from './components/MallNav.vue'
import MustBuy from './components/MustBuy.vue'
import SwiperBanner from './components/SwiperBanner.vue'
import scroll from '@/mixins/scroll'
export default {
  components: { HeaderBar, SwiperBanner, MallNav, MustBuy },
  name: 'home-index',
  mixins: [scroll],
  data () {
    return {
      banner: [],
      mall_nav: [],
      hot_nav: [],
      products: [],
      images: require('@/assets/images/day.png'),
      fechProductParams: {
        page: 1,
        page_size: 10,
        classId: 1
      },
      flag: ''
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
    this.initHomeData()
  },
  scrollBottom () {
    this.fechProductParams.page += 1
  },
  methods: {
    initHomeData () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
        this.mall_nav = res.data.data.mall_nav
        this.hot_nav = res.data.data.hot_nav
        console.log(res)
      })
    },
    async fechProductList () {
      // this.flag = true
      const res = await this.$api.product.list(this.fechProductParams)
      if (this.fechProductParams.page === 1) {
        this.products = res.data.data
      } else {
        this.products = this.products.concat(res.data.data)
      }
      // this.flag = false
    },
    navchange (index, item) {
      console.log(index, item)
      this.fechProductParams.classId = item.id
      this.fechProductParams.page = 1
      const Top = this.$refs.content.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > Top) {
        window.scrollTo(0, Top)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
