<template>
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
  >
    <div class="popup-menu" v-show="visible" @click="close">
      <transition
        enter-active-class="animate__animated animate__slideInUp"
        leave-active-class="animate__animated animate__slideOutDown"
      >
        <div class="popup-box" v-show="visible" @click.stop>
          <header>
            <h2>
              {{title}}
            </h2>
            <a @click="close" href="javascript:;">取消</a>
          </header>
          <div class="list">
            <slot name="title"></slot>
          </div>
          <div class="contnet">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'popup-menu',
  props: {
    title: String,
    visible: Boolean
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .popup-menu {
    @include wh (100%, 100%);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.2);
    z-index: 100;
    .popup-box {
      @include wh (100%, auto);
      position: absolute;
      bottom: 0;
      background: #f6f6f6;
      header {
        width: 100%;
        min-height: 88px;
        @include flex (row, center, space-between);
        border-bottom: solid 0.01rem #f0f0f0;
        font-size: 28px;
        color: grey;
        padding: 0 20px;
        box-sizing: border-box;
        a {
          font-size: 32px;
          color: #ff712b;
        }
      }
      .contnet {
        max-height: 70vh;
        overflow: auto;
      }
    }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
