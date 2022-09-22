<template>
  <div class="page">
    <router-view />
    <nav class="foot-nav">
      <router-link
        v-for="(item, index) in tabs"
        :key="index"
        :to="item.path"
        active-class="active"
      >
        <img :src="item.icon" alt="" class="icon" />
        <img :src="item.select_icon" alt="" class="select_icon" />
        <span>{{ item.text }}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'tab-main',
  data () {
    return {
      tabs: [
        {
          path: '/home',
          text: '首页',
          icon: require('@/assets/images/home.png'),
          select_icon: require('@/assets/images/home-select.png')
        },
        {
          path: '/classify',
          text: '分类',
          icon: require('@/assets/images/classify.png'),
          select_icon: require('@/assets/images/classify-select.png')
        },
        {
          path: '/car',
          text: '购物车',
          icon: require('@/assets/images/car.png'),
          select_icon: require('@/assets/images/car-select.png')
        },
        {
          path: '/mine',
          text: '我的',
          icon: require('@/assets/images/mine.png'),
          select_icon: require('@/assets/images/mine-select.png')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  // background: #f6f6f6;
  margin-bottom: 100px;
  .foot-nav {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    @include flex(row, center, center);
    background: #fff;
    z-index: 1;
    a {
      flex: 1;
      @include flex(column, center, center);
      padding: 14px 0 6px;
      span {
        font-size: $font-size-xs;
        color: $grey;
      }
      img {
        @include wh(52px, 52px);
      }
      .select_icon {
        display: none;
      }
      &.active {
        span {
          color: $red;
        }
        .icon {
          display: none;
        }
        .select_icon {
          display: block;
        }
      }
    }
  }
}
</style>
