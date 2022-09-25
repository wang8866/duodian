<template>
  <div class="box">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide
      v-for="(item, index) in Math.ceil(nav.length / 10)"
      :key="index"
    >
      <div class="mall-nav">
        <a
          href="javascript:;"
          v-for="(subitem, subindex) in nav.slice(index * 10, index * 10 + 10)"
          :key="subindex"
        >
          <img :src="subitem.icon" alt="" />
          <span>{{ subitem.text }}</span>
        </a>
      </div>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'MallNav',
  props: {
    nav: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.box .swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: 10px;
  left: 0;
  width: 100%;
}
.box {
  .swiper-container {
    height: 400px;
    ::v-deep .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
    }
    ::v-deep .swiper-pagination-bullet-active {
      background: $color-primary;
    }
  }
}
.mall-nav {
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-row-gap: 40px;
  padding: 20px 0;
  background: #fff;
  a {
    display: grid;
    justify-items: center;
    grid-row-gap: 20px;
    img {
      @include wh(96px, 96px);
    }
    span {
      font-size: $font-size-s;
      color: $grey;
    }
  }
}
</style>
