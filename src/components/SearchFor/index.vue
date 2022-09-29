<template>
  <div class="search-for">
    <label for="" class="search-wrap">
      <i class="iconfont icon-sousuo"></i>
      <input
        type="text"
        v-debounce="val"
        v-bind="$attrs"
        @keydown.enter="search(val)"
      />
      <a
        @click="val=''"
        href="javascript:;"
      >
      取消</a>
    </label>
    <div class="search-tip-wrap" v-show="showTip" ref="tip">
      <div class="search-tip-contnet">
        <div
          v-for="(item, index) in tipList"
          :key="index"
          @click="search(item)"
         >
         <template v-if="!$scopedSlots.tip">
          {{item.name}}
         </template>
          <slot name="tip" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-for',
  props: {
    value: String,
    clear: Boolean,
    tipList: Array
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    val () {
      this.$emit('input', this.val)
    },
    value () {
      this.val = this.value
    }
  },
  computed: {
    showTip () {
      return this.tipList.length >= 1
    }
  },
  methods: {
    search (value) {
      // this.val = value
      this.$emit('search', value)
      this.$refs.tip.style.display = 'none'
      this.$refs.tip.style.zIndex = 0
      console.log(this.$refs.tip)
    }
  },
  mounted () {
    console.log(this.$scopedSlots)
  }
}
</script>

<style lang="scss" scoped>
  .search-for {
    .search-wrap {
      @include wh (100%, 88px);
      @include flex (row,center,space-between);
      padding: 0 30px;
      box-sizing: border-box;
      position: relative;
      background: #fff;
      z-index: 5;
      i {
        position: absolute;
        left: 46px;
        font-size: 34px;
        color: #999;
      }
      input {
        @include wh (80%, 56px);
        outline: none;
        border: 0;
        padding: 0 32px 0 54px;
        box-sizing: border-box;
        border: 1px solid #c8cccd;
        border-radius: 0;
      }
      a {
        font-size: 28px;
        color: #111;
        border-radius: 8px;
        background-color: #c8cccd;
        color: #fff;
        width: 128px;
        line-height: 62px;
        height: 62px;
        text-align: center;
      }
    }
    .search-tip-wrap {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eee;
      z-index: 2;
      .search-tip-contnet {
        @include wh (100%, 100%);
        background: #fff;
        padding-top: 88px;
        overflow: auto;
      }
    }
  }
</style>
