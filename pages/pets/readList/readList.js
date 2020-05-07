//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentIdx: 0,
    menuList: [
      {
        name: '最新'
      },
      {
        name: '最热'
      }
    ],
    panels1: [
       {
          url: '/pages/pets/readDetails/readDetails', // 导航地址
          title: '标题一', // 标题
          desc: '主详情', // 主详情
          img: '/images/cat.jpg', // 图片路径
      },
      {
        url: '/pages/pets/readDetails/readDetails',
        title: '标题一',
        desc: '主详情',
        img: '/images/cat.jpg',
      }
    ],
    panels2: [
       {
          url: '/pages/pets/readDetails/readDetails', // 导航地址
          title: '标题一', // 标题
          desc: '主详情', // 主详情
          img: '/images/cat.jpg', // 图片路径
      },
      {
        url: '/pages/pets/readDetails/readDetails',
        title: '标题一',
        desc: '主详情',
        img: '/images/cat.jpg',
      },
      {
        url: '/pages/pets/readDetails/readDetails',
        title: '标题一',
        desc: '主详情',
        img: '/images/cat.jpg',
      }
    ],
  },
  onLoad: function () {

  },
  // tab切换
  clickMenu: function(e) {
    console.log('-----------')
    console.log(e)
    this.setData({
      currentIdx: e.detail.current
    })
  },
})
