const debounce = (fn, delay = 300) => {
  return function () {
    clearTimeout(fn.timeout)
    fn.timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

const throttle = (fn, delay = 300) => {
  fn.endTime = +new Date()
  return function () {
    fn.startTime = +new Date()
    if (fn.startTime > fn.endTime + delay) {
      fn.apply(this, arguments)
      fn.endTime = +new Date()
    }
  }
}

export default {
  debounce,
  throttle
}
