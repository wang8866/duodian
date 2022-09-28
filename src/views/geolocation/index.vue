<template>
  <div id="geolocation">正在定位</div>
</template>

<script>
import map from '@/utils/map'

export default {
  name: 'geolocation-index',
  mounted () {
    map.geolocation().then(res => {
      console.log(res)
      this.$store.commit('user/SET_ADDERSS', {
        ...res.addressComponent,
        formattedAddress: res.formattedAddress
      })
      this.$router.replace('/home')
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
