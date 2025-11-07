import { defineConfig } from 'vitepress';
// 导入要继承的主题配置
import escookConfig from '@escook/vitepress-theme/config'

// 这是 VitePress 的主配置文件
export default defineConfig({
  // **核心改动：通过 extends 继承主题配置**
  extends: escookConfig, 
  base: '/MinecraftServerWiki/',
  // 网站基本信息（会覆盖继承主题中的同名配置）
  title: '幻想之境 RPG', // 网站标题
  description: '沉浸式的魔幻 RPG 体验，等你来战。', // 网站描述
  
  // 主题配置 (themeConfig)
  themeConfig: {
    // 继承主题的配置（例如 musicBall），你可以直接在这里添加或覆盖
    //@ts-ignore
    confetti: false,
    //@ts-ignore
    musicBall: {
      list: [
           { name: 'Young Love', src: '/sounds/summerplace.ogg' },
          { name: 'where no one goes', src: '/sounds/wherenoonegoes.ogg' },
          { name: '薄荷', src: '/sounds/薄荷.ogg' }
         ] ,
    
      autoplay: true
    },
    
    // 你自定义的侧边栏配置
    sidebar: [
      {
        text: '🔰 新手村：快速入门与指引',
        items: [
          { text: '📜 服务器规则', link: '/guide/rules' },
          { text: '🎮 如何加入游戏', link: '/guide/getting-started' },
          { text: '🧭 新手任务与区域', link: '/guide/newbie-area' },
        ],
      },
      {
        text: '⚔️ 冒险指南：核心玩法机制',
        collapsed: true, 
        items: [
          { text: '职业与天赋系统', link: '/gameplay/classes-overview' }, 
          { text: '装备与词条机制', link: '/gameplay/equipment-mechanics' },
          { text: '怪物与战斗系统', link: '/gameplay/combat-guide' },
          { text: '💰 货币与交易', link: '/gameplay/economy' },
          { text: '🛠️ 生活与生产职业', link: '/gameplay/professions-index' },
        ],
      },
      {
        text: '📖 知识殿堂：游戏百科图鉴',
        collapsed: true, 
        items: [
          { text: '🛡️ 装备图鉴', link: '/database/equipment-index' },
          { text: '👾 怪物图鉴', link: '/database/monster-index' },
          { text: '🗺️ 地图与副本', link: '/database/map-index' },
          { text: '🧪 物品与材料', link: '/database/item-index' },
        ],
      },
    ],

    // 导航栏（顶部链接）配置
    nav: [
      { text: '开始游戏', link: '/guide/getting-started' },
      { text: 'QQ群', link: 'https://...' }, // 记得换成你的链接
    ],

    // 其他配置...
  },
});