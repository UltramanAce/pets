//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    images1: [
       {
        img: '/images/cat.jpg', // 图片路径
        url: '/pages/pets/drillDetails/drillDetails', // 导航地址
        title: '适应环境', // 标题
        iconNum: 5
      },
      {
        img: '/images/cat.jpg', // 图片路径
        url: '/pages/pets/drillDetails/drillDetails', // 导航地址
        title: '适应环境', // 标题
        iconNum: 3
      },
       {
        img: '/images/cat.jpg', // 图片路径
        url: '/pages/pets/drillDetails/drillDetails', // 导航地址
        title: '适应环境', // 标题
        iconNum: 1
      },
      {
        img: '/images/cat.jpg', // 图片路径
        url: '/pages/pets/drillDetails/drillDetails', // 导航地址
        title: '适应环境', // 标题
        iconNum: 2
      },
    ],
    images2: [
       {
        img: '/images/cat.jpg', // 图片路径
        url: '/pages/pets/drillDetails/drillDetails', // 导航地址
        title: '专题描述1' // 标题
      },
       {
        img: '/images/cat.jpg',
        url: '/pages/pets/drillDetails/drillDetails',
        title: '专题描述2'
      },
       {
        img: '/images/cat.jpg', // 图片路径
        url: '/pages/pets/drillDetails/drillDetails', // 导航地址
        title: '专题描述1' // 标题
      },
       {
        img: '/images/cat.jpg',
        url: '/pages/pets/drillDetails/drillDetails',
        title: '专题描述2'
      },
    ]
  },
  onLoad: function () {

  }
})
