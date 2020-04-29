//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    topSwiperData: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    grids: [
      {
        url: '/pages/pets/logs/logs',
        title: '挂号',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/logs/logs',
        title: '疫苗',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/logs/logs',
        title: '驱虫',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/logs/logs',
        title: '绝育',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/logs/logs',
        title: '体检',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/logs/logs',
        title: '寄养',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      }
    ],
    panels: [
       {
          url: '../logs/logs', // 导航地址
          title: '标题一', // 标题
          desc: '主详情', // 主详情
          img: '/images/cat.jpg', // 图片路径
      },
      {
        url: '../logs/logs',
        title: '标题一',
        desc: '主详情',
        img: '/images/cat.jpg',
      }
    ],
    images1: [
       {
        img: '/images/cat.jpg', // 图片路径
        url: '../logs/logs', // 导航地址
        title: '适应环境' // 标题
      },
       {
        img: '/images/cat.jpg',
        url: '../logs/logs',
        title: '适应环境'
      },
    ],
    images2: [
       {
        img: '/images/cat.jpg', // 图片路径
        url: '../logs/logs', // 导航地址
        title: '专题描述1' // 标题
      },
       {
        img: '/images/cat.jpg',
        url: '../logs/logs',
        title: '专题描述2'
      },
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
