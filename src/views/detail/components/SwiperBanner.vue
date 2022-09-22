<template>
  <swiper
    :options="swiperOption"
    :not-next-tick="notNextTick"
  >
    <!-- slides -->
    <swiper-slide
    v-for="(item, index) in list"
    :key="index"
    >
    <img :src="item" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'SwiperBanner',
  props: {
    list: Array
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        loop: true,
        autoplay: 3000,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  img {
    @include wh (100%, auto);
  }
  ::v-deep .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
  }
  ::v-deep .swiper-pagination-bullet-active {
    background: $color-primary;
  }
}
</style>
