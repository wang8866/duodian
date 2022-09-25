<template>
<!-- 轮播图 -->
  <div class="banner">
    <swiper :options="swiperOption" ref="mySwiper" v-if="list.length > 0">
      <!-- slides -->
      <swiper-slide
        v-for="(item, index) in list"
        :key="index"
      >
      <img :src="item.images" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'swiper-banner',
  data () {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang='scss' scoped>
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
