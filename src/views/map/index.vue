<template>
  <div id="map"></div>
</template>

<script>
import map from '@/utils/map'

export default {
  name: 'map-index',
  mounted () {
    // const map = new AMap.Map('map', {
    //   zoom: 11, // 级别
    //   center: [116.397428, 39.90923], // 中心点坐标
    //   viewMode: '3D' // 使用3D视图
    // })
    // console.log(map)
    map.geolocation().then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>
  #map {
    @include wh (100vw, 100vh);
  }
</style>
