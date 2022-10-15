<template>
  <div class="edit-address">
    <field-form :model="formData" :rules="rules" ref="form">
      <field-item label="联系人">
        <field-input type="money" v-model="formData.name" placeholder="请输入联系人姓名" />
      </field-item>
      <field-item label="手机号">
        <field-input type="phone" v-model="formData.phone" placeholder="请输入手机号" />
      </field-item>
      <field-item label="地址">
        <field-input
          v-model="formData.location.name"
          placeholder="请选择联系人地址"
          readonly
          @click.native="$router.push('/map')"
        >
          <template v-slot:last>
            <i class="iconfont icon-jiantouyou"></i>
          </template>
        </field-input>
      </field-item>
      <field-item label="详细地址">
        <field-input v-model="formData.address" placeholder="请输入详细地址" />
      </field-item>
    </field-form>
    <button @click="submit">完成</button>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
export default {
  name: 'edit-address',
  data () {
    return {
      formData: {
        name: '',
        phone: '',
        address: '',
        location: ''
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
  created () {
    const formData = storage.getItem('addressFormData')
    if (formData) {
      this.formData = formData
    }
    this.$root.$on('changeLoation', (location) => {
      this.formData.location = location
    })
  },
  methods: {
    submit () {
      this.$refs.form.validate().then(() => {
        // console.log('提交')
        this.$api.address.create(this.formData).then(res => {
          // console.log(res)
          this.$message_word.success('添加成功')
          this.$router.back()
          this.$store.dispatch('user/getUserAddress')
        })
      }).catch((e) => {
        this.$message_word.error(e)
        console.log(e)
      })
    }
  },
  beforeRouteLeave (to, form, next) {
    if (to.path !== '/map') {
      this.formData = {
        name: '',
        phone: '',
        address: '',
        location: {}
      }
      storage.removeItem('addressFormData')
    } else {
      storage.setItem('addressFormData', this.formData)
    }
    next()
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
