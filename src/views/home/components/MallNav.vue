<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick">
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
  </swiper>
</template>

<script>
export default {
  name: 'MallNav',
  props: {
    nav: Array
  },
  data () {
    return {
      notNextTick: true,
      swiperOption: {
        // loop: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
