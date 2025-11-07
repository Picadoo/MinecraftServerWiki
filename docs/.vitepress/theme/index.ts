// 导入 Vue 的 h 函数，用于创建 VNode
import { h } from 'vue' 
// 导入 VitePress 的 Theme 类型
import type { Theme } from 'vitepress' 
// 导入要扩展的第三方主题，为了避免和 Theme 冲突，我们使用 escookTheme 这个名字
import escookTheme from '@escook/vitepress-theme' 

// 导入配套的 CSS 样式（这一步不能省略！）
import '@escook/vitepress-theme/style.css'

// 导入你自定义的覆盖样式
import './style.css' 

// 默认导出扩展后的主题对象，只导出一次！
export default {
  // 继承主题的所有配置和组件
  extends: escookTheme, 
  
  // 覆盖 Layout 组件，允许你使用主题的插槽进行深度定制
  Layout: () => {
    return h(escookTheme.Layout, null, {
      // 在这里添加主题提供的插槽内容（如果需要的话）
    })
  },
  
  // 增强 Vue 应用实例（如果你需要注册全局组件或插件）
  enhanceApp({ app, router, siteData }) {
    // 扩展自定义功能...
  }
} satisfies Theme