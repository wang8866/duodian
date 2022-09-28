<template>
  <div>购物车
    <!-- <p>{{$root.userInfo}}</p> -->

    <!-- <p>{{a}} {{b}} {{c}} {{d}}</p>
    <p>{{$store.getters.getab}}</p> -->
    <!-- <button @click="seta">改变a</button> -->
    {{info.account}}
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'car-index',
  computed: {
    // ...mapState(['a', 'b', 'c', 'd'])
    ...mapState('user', ['info'])
  },
  methods: {
    seta () {
      this.$store.dispatch('seta', 6000)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
