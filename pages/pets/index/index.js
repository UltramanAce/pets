//index.js
// var util = require('../../../utils/util.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {
      img: '/images/cat.jpg',
      userName: '小瓶子',
      day: 1000,
    },
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
  // 获取页面数据
  getPageData () { 
    // 使用 Mock
  },
  //通过绑定手机号登录
  getPhoneNumber: function (e) {
    console.log('--------通过绑定手机号登录---------')
    console.log(e.detail)
    // var ivObj = e.detail.iv
    // var telObj = e.detail.encryptedData
    // var codeObj = "";
    // var that = this;
    // //------执行Login---------
    // wx.login({
    //  success: res => {
    //   console.log('code转换', res.code);
    //   //用code传给服务器调换session_key
    //   wx.request({
    //    url: 'https://api.ebestpet.com/v1/wechat/login', // 接口地址
    //    data: {
    //     appid: "wx65c832149ef5d9b9",
    //     secret: "20f33773fff49aa4d96c57f86f64ebac",
    //     code: res.code,
    //     encryptedData: telObj,
    //     iv: ivObj
    //    },
    //    success: function (res) {
    //     var phoneObj = res.data.phoneNumber;
    //     console.log("手机号=", res)
    //     // wx.setStorage({  // 存储数据并准备发送给下一页使用
    //     //  key: "phoneObj",
    //     //  data: res.data.phoneNumber,
    //     // })
    //    }
    //   })
  
    //   //-----------------是否授权，授权通过进入主页面，授权拒绝则停留在登陆界面
    //   if (e.detail.errMsg == 'getPhoneNumber:user deny') { //用户点击拒绝
    //   //  wx.navigateTo({
    //   //   url: '../index/index',
    //   //  })
    //     console.log('拒绝')
    //   } else { //允许授权执行跳转
    //   //  wx.navigateTo({
    //   //   url: '../test/test',
    //   //  })
    //     console.log('允许')
    //   }
    //  }
    // });
  },
  onLoad: function () {
    // this.getPageData();
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
})
