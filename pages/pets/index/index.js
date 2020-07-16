//index.js
var util = require('../../../utils/util.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    topSwiperData: [
      {
        img: '/images/cat.jpg',
        url: '/pages/pets/classifyList/classifyList'
      },
      {
        img: '/images/cat.jpg',
        url: '/pages/pets/classifyList/classifyList'
      },
      {
        img: '/images/cat.jpg',
        url: '/pages/pets/classifyList/classifyList'
      }
    ],
    grids: [
      {
        url: '/pages/pets/classifyList/classifyList',
        title: '挂号',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/classifyList/classifyList',
        title: '疫苗',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/classifyList/classifyList',
        title: '驱虫',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/classifyList/classifyList',
        title: '绝育',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/classifyList/classifyList',
        title: '体检',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      },
      {
        url: '/pages/pets/classifyList/classifyList',
        title: '寄养',
        icon: 'add',
        iconC: '#DB2C2C',
        iconS: 30,
      }
    ],
    panels: [
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
    images1: [
       {
        img: '/images/cat.jpg', // 图片路径
        url: '/pages/pets/drillDetails/drillDetails', // 导航地址
        title: '适应环境' // 标题
      },
       {
        img: '/images/cat.jpg',
        url: '/pages/pets/drillDetails/drillDetails',
        title: '适应环境'
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
    ]
  },
  gotoPetDetailsList: function () { 
    wx.navigateTo({
      url: '/pages/pets/petDetailsList/petDetailsList'
    })
  },
  gotoHealthTipsList: function () { 
    wx.navigateTo({
      url: '/pages/pets/healthTipsList/healthTipsList'
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let that = this
    app.userInfoReadyCallback = function () {
      that.setData({
        userInfo: app.globalData.userInfo
      })
      // 获取用户数 据
      util.server.getUserMe().then(res => { 
        console.log('-------获取用户数据------')
        console.log(res)
      })
      // 获取主页banner图片
      util.server.getBanner().then(res => { 
        console.log('-------获取主页banner图片------')
        console.log(res)
      })
      // 获取《养宠必读》列表
      util.server.getReadList().then(res => { 
        console.log('-------获取《养宠必读》列表------')
        console.log(res)
      })
    }
    
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
})
