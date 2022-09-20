<template>
  <div>
    <user-infor />
    <my-order :list= "order"/>
    <my-list :list= "list" />
  </div>
</template>

<script>
import UserInfor from './components/UserInfor.vue'
import MyOrder from './components/MyOrder.vue'
import MyList from './components/MyList.vue'
export default {
  name: 'mine-index',
  components: {
    UserInfor,
    MyOrder,
    MyList
  },
  data () {
    return {
      order: [
        {
          icon: require('@/assets/images/payment.png'),
          text: '待付款'
        },
        {
          icon: require('@/assets/images/delivery.png'),
          text: '待配送'
        },
        {
          icon: require('@/assets/images/goods.png'),
          text: '已发货'
        },
        {
          icon: require('@/assets/images/payment.png'),
          text: '退款/售后'
        }
      ],
      list: [
        {
          icon: require('@/assets/images/coupon.png'),
          text: '我的优惠券'
        },
        {
          icon: require('@/assets/images/qualifications.png'),
          text: '资质规则'
        },
        {
          icon: require('@/assets/images/service.png'),
          text: '联系客服'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
