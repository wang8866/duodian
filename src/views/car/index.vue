<template>
  <div class="car-page">
    <car-list />
    <car-toole />
  </div>
</template>

<script>
import CarList from './components/CarList.vue'
import CarToole from './components/CarToole.vue'
export default {
  name: 'car-index',
  components: {
    CarList,
    CarToole
  }
}
</script>

<style lang="scss" scoped>
</style>
