<template>
  <swiper
    :options="swiperOption"
    ref="mySwiper"
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
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
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
