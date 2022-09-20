<template>
  <div class="user-infor">
    <div class="introduce">
      <h3>我的昵称</h3>
      <p>开启美好的一天…</p>
    </div>
    <i>🎹</i>
  </div>
</template>

<script>
export default {
  name: 'UserInfor'
}
</script>

<style lang="scss" scoped>
  .user-infor {
    @include wh (100%, 264px);
    @include flex (row, normal,space-between);
    background: $red;
    padding: 0 30px;
    padding-top: 58px;
    box-sizing: border-box;
    .introduce {
      h3 {
        font-size: $font-size-xl;
        color: #fff;
        font-weight: bold;
      }
      p {
        font-size: $font-size-xs;
        color: #fff;
        margin-top: 14px;
      }
    }
    i {
      font-size: 70px;
      color: #fff;
    }
  }
</style>
