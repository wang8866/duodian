<template>
<transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    appear
    @after-leave="afterLeave"
  >
    <div class="message" :class="[type]" v-show="show">
      {{msg}}
    </div>
</transition>
</template>

<script>
export default {
  name: 'MessageWord',
  data () {
    return {
      show: true
    }
  },
  props: {
    msg: String,
    type: {
      type: String,
      default: 'info'
    }
  },
  methods: {
    afterLeave () {
      this.$destroy()
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 2000)
  },
  destroyed () {
    document.body.removeChild(this.$el)
    console.log('销毁')
  }
}
</script>
<style lang="scss" scoped>
  .message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 25px;
    font-size: 24px;
    text-align: center;
    box-sizing: border-box;
    z-index: 10;
    &.error {
      background: rgba(255, 0, 0 , 0.8);
      color: #fff;
    }
    &.success {
      background: rgb(0, 128, 0, 0.8);
      color: #fff;
    }
    &.info {
      background: rgba(0,0,0,0.3);
      color: #fff;
    }
  }
</style>
