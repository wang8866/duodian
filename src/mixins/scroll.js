export default {
  mounted () {
    // this.flag = true
    window.addEventListener('scroll', this.scoll, false)
    // this.flag = false
  },
  destroyed () {
    window.removeEventListener('scroll', this.scoll, false)
  },
  methods: {
    scoll () {
      // this.flag = true
      const windowHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      // console.log(windowHeight, pageHeight, scrollTop)
      if (pageHeight - scrollTop < windowHeight + 10) {
        console.log('到底啦')
        this.$options.scrollBottom.call(this)
        // this.flag = false
      }
    }
  }
}
