<template>
  <div class="day">
    <img :src="img" alt="">
  </div>
</template>

<script>
export default {
  name: 'MustBuy',
  props: {
    img: String
  }
}
</script>

<style lang="scss" scoped>
  .day {
    @include wh (100%, auto);
    padding-top: 40px;
    background: #fff;
    img {
      @include wh (100%, 100%);
    }
  }
</style>
