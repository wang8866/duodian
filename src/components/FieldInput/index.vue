<template>
  <input type="text" v-model="formatval" class="field-input" :placeholder="placeholder">
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
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String
  },
  data () {
    return {
      val: ''
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
  .field-input {
    display: block;
    border: 0;
    outline: none;
    font-size: 28px;
  }
</style>
