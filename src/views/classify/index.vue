<template>
  <div class="classify-page">
    <search-bar/>
    <div class="content">
      <sub-menu :list="menu"/>
    </div>
  </div>
</template>

<script>
// import scroll from '@/mixins/scroll'
import SearchBar from './components/SearchBar.vue'
import SubMenu from './components/SubMenu.vue'
export default {
  components: { SearchBar, SubMenu },
  name: 'classify-index',
  data () {
    return {
      flag: '',
      menu: []
    }
  },
  // mixins: [scroll],
  // scrollBottom () {
  //   console.log(this)
  // },
  created () {
    this.subMenuData()
  },
  methods: {
    subMenuData () {
      this.$api.product.category().then(res => {
        this.menu = res.data.data
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-page {
  height: auto;
  background: #fff;
}
</style>
