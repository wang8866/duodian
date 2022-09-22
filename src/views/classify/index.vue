<template>
  <div class="classify-page">
    <search-bar />
    <div class="content">
      <tab-bar
        class="left-menu"
        tab-name="categoryName"
        layout="column"
        :tabs="leftMenu"
        @change="leftNavChange"
      />
      <div class="right-content">
        <tab-bar
          class="right-menu"
          tab-name="categoryName"
          :tabs="rightMenu"
          @change="rightNavChange"
        />
        <product-list class="product-list" :list="products" />
      </div>
    </div>
  </div>
</template>

<script>
import scroll from '@/mixins/scroll'
import SearchBar from './components/SearchBar.vue'
// import SubMenu from './components/SubMenu.vue'
export default {
  components: { SearchBar },
  name: 'classify-index',
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      products: [],
      fetchProductParams: {
        page: 1,
        page_size: 20,
        category_id: 1
      }
    }
  },
  mixins: [scroll],
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    this.subMenuData()
  },
  methods: {
    async subMenuData () {
      const res = await this.$api.product.category()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryId: res.data[0].categoryId,
        categoryName: '全部分类'
      }].concat(res.data[0].children)
      console.log(res)
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.products = res.data
      } else {
        this.products = this.products.concat(res.data)
      }
    },
    leftNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
      this.rightMenu = [{
        categoryId: item.categoryId,
        categoryName: '全部分类'
      }].concat(item.children)
      window.scrollTo(0, 0)
    },
    rightNavChange (index, item) {
      this.fetchProductParams.category_id = item.categoryId
      this.fetchProductParams.page = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-page {
  .content {
    @include flex(row);
    height: 100%;
    flex: 1;
    .left-menu {
      height: 100vh;
      overflow: auto;
      flex-shrink: 0;
      position: fixed;
      top: 98px;
      &::-webkit-scrollbar {
        display: none;
      }
      ::v-deep nav {
        padding: 0;
        @include border-1px(bottom, transparent);
        background: #f6f6f6;
        a {
          color: #999999;
          font-size: 24px;
          display: block;
          width: 100%;
          padding: 0;
          height: 100px;
          line-height: 100px;
          text-align: center;
          border-left: 8px solid transparent;
          box-sizing: border-box;
          &.active {
            background: #fff;
            font-size: 28px;
            font-weight: bold;
            color: #FE3113;
            border-left: 8px solid #FE3113;
          }
        }
      }
    }
    .right-content {
      margin-top: 98px;
      width: 100%;
      margin-left: 172px;
      flex: 1;
      position: relative;
      .right-menu {
        height: 95px;
        line-height: 95px;
        flex-shrink: 0;
        position: fixed;
        top: 98px;
        right: 0;
        left: 178px;
        z-index: 100;
        border-bottom: 1px solid #E9E9E9;
        ::v-deep nav {
          @include flex(row, flex-start, flex-start);
          @include border-1px(bottom, transparent);
          height: 95px;
          line-height: 95px;
          padding: 20px 0;
          overflow: scroll;
          &::-webkit-scrollbar {
          display: none;
        }
          a {
            color: #999;
            font-size: 24px;
            display: block;
            line-height: 55px;
            padding: 0 20px;
            border-radius: 55px;
            &.active {
              color: #fff;
              background: linear-gradient(251deg, #FE3113 0%, #FD7A00 100%);
            }
          }
        }
      }
      .product-list {
        overflow: auto;
        padding-top: 95px;
        ::v-deep dl {
          dt {
            @include wh(186px, 186px);
            img {
              @include wh(186px, 186px);
            }
          }
          dd {
            height: 186px;
            flex: 1;
            overflow: hidden;
            h3 {
              @include ellipsis(1);
              width: 100%;
              display: block;
              font-size: 28px;
            }
            p {
              font-size: 18px;
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
}
</style>
