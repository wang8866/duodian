<template>
  <div class="map-page">
    <div class="map" id="map"></div>
    <div class="address">
      <li class="tips-item" v-for="(item, index) in pois" :key="index" @click="change(item)">
        <h2>{{item.name}}</h2>
        <p>{{item.address}}</p>
      </li>
    </div>
  </div>
</template>

<script>
import storage from '@/utils/storage.js'
import AMapUI from 'AMapUI'
import AMap from 'AMap'

export default {
  name: 'map-index',
  data () {
    return {
      pois: []
    }
  },
  methods: {
    change (item) {
      this.$root.$emit('changeLoation', item)
      const formData = storage.getItem('addressFormData')
      formData.location = item
      storage.setItem('addressFormData', formData)
      this.$router.back()
    }
  },
  mounted () {
    AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
      var map = new AMap.Map('map', {
        zoom: 16,
        enableHighAccuracy: true,
        offset: [10, 20],
        position: 'RB',
        scrollWheel: false
      })
      var positionPicker = new PositionPicker({
        mode: 'dragMap',
        map: map
      })
      positionPicker.on('success', (positionResult) => {
        this.pois = positionResult.regeocode.pois
        console.log(positionResult, '成功')
      })
      positionPicker.on('fail', (positionResult) => {
        console.log(positionResult, '失败')
      })
      positionPicker.start()
      map.panBy(0, 1)
      map.addControl(new AMap.ToolBar({
        liteStyle: true
      }))
    })
  }
}
</script>

<style lang="scss" scoped>
  .map {
    @include wh (100vw, 50vh);
    background: #eee
  }
  .address {
    @include wh (100vw, 50vh);
    overflow: auto;
    .tips-item {
      font-size: 28px;
      border-bottom: solid 1px #f0f0f0;
      padding: 20px 160px 20px 20px;
      box-sizing: border-box;
    h2 {
      color: #333;
      padding: 10px 0;
    }
    p {
      color: grey;
      padding: 0 0 10px;
    }
  }
  }
</style>
