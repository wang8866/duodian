<template>
  <div>
    <search-for
      v-model="searchKey"
      clear
      :tipList="tips"
      @search="search"
      placeholder="搜索校园超市商品"
    >
    <template v-slot:tip="slotprops">
      <li class="tips-item" v-html="hightLight(slotprops.item.name, searchKey)">{{slotprops.item.name}}</li>
    </template>
    </search-for>
    <div class="search-default" v-show="products.length <= 0">
      <history-search :val="searchKey"/>
      <hot-search :list="hotList"/>
    </div>
    <product-list :list="products" />
  </div>
</template>

<script>
import HotSearch from './components/HotSearch.vue'
import HistorySearch from './components/HistorySearch.vue'

export default {
  components: { HotSearch, HistorySearch },
  name: 'search-index',
  data () {
    return {
      searchKey: '',
      tips: [],
      isTips: true,
      hotList: ['华为手环', '打印机色带', '跑步机', '天燃气灶双灶', '风信子种球', '斯诺克球杆', '鳄鱼皮钱包', '珊瑚绒床垫', '演唱会望远镜', '不粘锅煎锅'],
      products: []
      // fechProductParams: {
      //   page: 1,
      //   page_size: 10,
      //   category_id: 1
      // }
    }
  },
  // scrollBottom () {
  //   this.fechProductParams.page += 1
  // },
  watch: {
    searchKey (value) {
      if (!value) {
        this.tips = []
        return
      }
      if (this.isTips) {
        this.fetchTips()
      }
    },
    $route (newvalue) {
      if (newvalue.query.keyword) {
        this.searchKey = newvalue.query.keyword
        // this.fechProductParams.page = 1
        this.tips = []
        this.isTips = false
        this.fetchTips()
        // this.fechProductList()
      } else {
        this.searchKey = ''
        this.products = []
      }
      console.log('改变')
    }
    // fechProductParams: {
    //   handler: 'fechProductList',
    //   deep: true
    // }
  },
  methods: {
    hightLight (text, key) {
      return text.replace(key, `<b>${key}</b>`)
    },
    async fetchTips () {
      const res = await this.$api.product.search()
      const data = res.data.filter(item =>
        item.name.includes(this.searchKey)
      )
      this.tips = data
      this.products = data
      console.log(data)
    },
    search (val) {
      this.$router.push({
        path: '/search',
        query: {
          keyword: val
        }
      })
      console.log(val)
    },
    // async fechProductList () {
    //   const res = await this.$api.product.list(this.fechProductParams)
    //   if (this.fechProductParams.page === 1) {
    //     this.products = res.data
    //   } else {
    //     this.products = this.products.concat(res.data)
    //   }
    //   this.isTips = true
    // },
    scoll () {
      const windowHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      // console.log(windowHeight, pageHeight, scrollTop)
      if (pageHeight - scrollTop < windowHeight + 10) {
        console.log('到底啦')
        this.$options.scrollBottom.call(this)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .tips-item {
    font-size: 28px;
    color: #111;
    padding-left: 76px;
    border-bottom: 1px solid $color-border-line;
    line-height: 90px;
    ::v-deep b {
      color: $red;
      font-weight: bold;
      font-size: 30px;
    }
  }
  .search-default {
    padding: 0 30px;
    box-sizing: border-box;
  }
</style>
