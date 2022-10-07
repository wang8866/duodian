<template>
  <div class="edit-address">
    <field-form :model="formDate" :rules="rules" ref="form">
      <field-item label="联系人">
        <field-input type="money" v-model="formDate.name" placeholder="请输入联系人" />
      </field-item>
      <field-item label="手机号">
        <field-input type="phone" v-model="formDate.phone" placeholder="请输入手机号" />
      </field-item>
      <field-item label="地址">
        <field-input />
      </field-item>
      <field-item label="详细地址" v-model="formDate.address" >
        <field-input placeholder="请输入详细地址" />
      </field-item>
    </field-form>
    <button @click="submit">完成</button>
  </div>
</template>

<script>
export default {
  name: 'edit-address',
  data () {
    return {
      formDate: {
        name: '',
        phone: '',
        address: '',
        mo: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入联系人姓名' },
          { min: 2, max: 10, message: '联系人姓名格式不正确' }
        ],
        phone: [
          { required: true, message: '请输入手机号' },
          { type: 'phone', message: '手机号码格式不正确' }
        ],
        address: [
          { required: true, message: '请输入详细地址' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate().then(() => {
        console.log('提交')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.edit-address {
  @include wh(100vw, 100vh);
  @include flex(column);;
  background-color: #f6f6f6;
  button {
    font-size: 32px;
    background-color: #fff;
    margin-top: 20px;
    height: 88px;
    text-align: center;
    line-height: 88px;
    border: 0;
    color: #ff712b;
  }
}

</style>
