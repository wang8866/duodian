<template>
  <div class="field-form">
    <slot></slot>
  </div>
</template>

<script>
const reg = {
  phone: /\d{11}/
}
export default {
  name: 'field-form',
  props: {
    model: Object,
    rules: Object
  },
  methods: {
    check (value, rule) {
      let message = ''
      rule.forEach(item => {
        if (message) return
        if (item.required && !value) {
          message = item.message
        } else if ((item.min || item.max) && (value.length > item.max || value.length < item.min)) {
          message = item.message
        } else if (item.type && reg[item.type] && !reg[item.type].test(value)) {
          message = item.message
        }
      })
      return message
    },
    validate () {
      return new Promise((resolve, reject) => {
        const fields = Object.keys(this.rules)
        let message = ''
        for (let i = 0; i < fields.length; i++) {
          const name = fields[i]
          const rule = this.rules[name]
          const value = this.model[name]
          message = this.check(value, rule)
          if (message.length >= 1) {
            reject(message)
            break
          }
        }
        if (message.length === 0) {
          resolve()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .field-form {
    background: #fff;
  }
</style>
