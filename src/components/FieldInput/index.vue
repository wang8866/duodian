<template>
  <div class="field-wrap">
    <input type="text" v-model="formatval" class="field-input" v-bind="$attrs">
    <slot name="last"></slot>
  </div>
</template>

<script>
const format = {
  phone: {
    get (val) {
      return val.replace(/(\d{3})(\d{0,4})(\d{0,4})(\d{0,})/, '$1 $2 $3').replace(/\s+$/, '')
    },
    set (val) {
      return val.replace(/\s+/g, '')
    }
  },
  money: {
    get (val) {
      let money = val
      const reg = /(\d{1,})(\d{4})/
      while (reg.test(money)) {
        money = money.replace(reg, '$1,$2')
      }
      return money
    },
    set (val) {
      return val.replace(/,+/g, '')
    }
  },
  idcard: {
    get (val) {
      return val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3').replace(/\s+$/, '')
    },
    set (val) {
      return val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3').replace(/\s+$/, '')
    }
  },
  text: {
    get (val) {
      return val
    },
    set (val) {
      return val
    }
  }
}
export default {
  name: 'FieldInput',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    value (value) {
      this.val = value
    },
    val (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    formatval: {
      get () {
        return format[this.type].get(this.val)
      },
      set (value) {
        this.val = format[this.type].set(value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.field-wrap {
  height: 88px;
  flex: 1;
  display: flex;
  .field-input {
    display: block;
    border: 0;
    outline: none;
    width: 100%;
    font-size: 28px;
  }
}
</style>
