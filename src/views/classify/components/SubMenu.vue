<template>
  <div class="sub-menu">
    <a
      href="javascript:;"
      v-for="(item, index) in list"
      :key="index"
      :class="{active: ActiveIndex === index}"
      @click="change(index)"
    >
      {{item.categoryName}}
    </a>
  </div>
</template>

<script>
export default {
  name: 'SubMenu',
  data () {
    return {
      ActiveIndex: ''
    }
  },
  props: {
    list: Array
  },
  methods: {
    change (index) {
      this.ActiveIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.sub-menu {
  width: 26%;
  height: 100%;
  background: #fafafa;
  a {
    color: $color-grey;
    font-size: $font-size-xs;
    display: block;
    line-height: 70px;
    text-align: center;
    padding: 20px 0;
    &.active {
      color: $red;
      font-size: $font-size-s;
      font-weight: bold;
    }
  }
}

</style>
