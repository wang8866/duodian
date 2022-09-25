import utils from '@/utils/utlis'

let input = function (el, expression) {
  console.log(this, expression)
  this[expression] = el.value
}

input = utils.debounce(input)

const debounce = {
  inserted (el, binding, VNode) {
    el.value = binding.value
    console.log(VNode.context)
    input = input.bind(VNode.context, el, binding.expression)
    el.addEventListener('input', input, false)
    console.log(el, '指令')
  },
  update (el, binding) {
    el.value = binding.value
    console.log('组件的 VNode 更新')
  },
  // componentUpdated () {
  //   console.log('更新完成')
  // },
  unbind (el) {
    el.removeEventListener('input', input)
    console.log('解绑')
  }
}

export default debounce
