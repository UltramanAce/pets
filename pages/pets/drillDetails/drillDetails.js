//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    detailsData: {
      title: '主标题主标题主标标题主标题主标题主标标题主标题主标题主标标题',
      img: '/images/cat.jpg',
      details: `
      描述描述描述描述描述描述描述描述描述描述描
      述描述描述描述述描述描述描述述描述描述描述述描
      述描述描述述描述描述述描述描述述描述描述述描述
      描述述描述描述述描述描述述描述描述述描述描述述
      述描述描述述描述描述述描述描述述描述描述描述描
      述描述描述述描述描述述描述描述述描述描述述描述
      述描述描述述描述描述述描述描述述描述描述描述描
      述描述描述述描述描述述描述描述述描述描述述描述
      述描述描述述描述描述述描述描述描述述....
      `,
      sub: '由小瓶子于2019.12.12发布'
    },
    images1: [
      {
       img: '/images/cat.jpg', // 图片路径
       title: '难易度', // 标题
       iconNum: 5
     }
    ],
    menuList: [
      {
        name: '已学会'
      },
      {
        name: '发经验'
      }
    ],
  },
  onLoad: function () {

  },
  // tab切换
  clickMenu: function(e) {
    console.log('-----------')
    console.log(e.detail.current)
  },
})
