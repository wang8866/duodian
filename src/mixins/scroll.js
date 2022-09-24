export default {
  mounted () {
    window.addEventListener('scroll', this.scoll, false)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scoll, false)
  },
  // activated () {
  //   console.log('进入')
  //   window.removeEventListener('scroll', this.scoll, false)
  // },
  // deactivated () {
  //   window.removeEventListener('scroll', this.scoll, false)
  // },
  methods: {
    scoll () {
      const windowHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      // console.log(windowHeight, pageHeight, scrollTop)
      if (pageHeight - scrollTop < windowHeight + 10) {
        console.log('到底啦')
        this.$options.scrollBottom.call(this)
      }
    }
  }
}
