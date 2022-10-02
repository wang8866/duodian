import LoadingImage from './index.vue'

export default (Vue) => {
  const LoadingClass = Vue.extend(LoadingImage) // 生成组件类
  const LoadingComponent = new LoadingClass() // 生成组件实例
  const div = document.createElement('div')
  document.body.appendChild(div)
  LoadingComponent.$mount(div) // 渲染组件

  Vue.prototype.$loading = {
    show () {
      LoadingComponent.show = true
      console.log('显示loading')
    },
    hide () {
      LoadingComponent.show = false
      console.log('隐藏loading')
    }
  }
}
