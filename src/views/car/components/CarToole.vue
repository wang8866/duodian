<template>
  <div class="toole">
    <label>
      <input type="checkbox" v-model="isActive" /> 全选
    </label>
    <div class="add">
      合计：<output>￥<b>654</b></output>
      <button>去结算(2)</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CarToole',
  computed: {
    ...mapState('car', ['list']),
    isActive: {
      get () {
        return this.list.reduce((prev, item) => {
          if (item.isActive === '0') return false
          return prev
        }, true)
      },
      set (value) {
        this.$api.car.updateAll({
          id: this.list.map(item => item.id),
          isActive: value ? '1' : '0'
        }).then(() => {
          this.$store.dispatch('car/getCarList')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.toole {
  @include wh(100%, 106px);
  @include flex(row, center, space-between);
  background: #fff;
  position: fixed;
  bottom: 120px;
  padding-left: 30px;
  box-sizing: border-box;
  label {
    @include flex (row, center, flex-start);
    font-size: 26px;
    color: #666;
  }
  .add {
    color: #111;
    font-size: 28px;
    font-weight: bold;
    output {
      color: $red;
      margin-right: 32px;
      b {
        font-size: 36px;
      }
    }
    button {
      background: $red;
      border: 0;
      color: #fff;
      padding: 32px 55px;
      box-sizing: border-box;
      font-size: 32px;
    }
  }
}
</style>
