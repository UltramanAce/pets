//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: loginRes => {
      console.log('----------loginRes------------')
      console.log(loginRes)
      let code = loginRes.code // 获取用户临时code
      wx.getUserInfo({
        success: function (res) {
        console.log('----------getUserInfo------------')
        console.log(res)
        let encryptedData = res.encryptedData // 获取加密数据
        let iv = res.iv // 解密参数
        // 发送解密必要数据到服务端
        wx.request({
         url: 'https://api.ebestpet.com/v1/wechat/login',
         method: 'POST',
         data: {
          "clientId": "homepet",
          "mobile": "13168873392",
          "code": code,
          "encryptedData": encryptedData,
          "iv": iv
         },
          succeess: res => {
            console.log('--------登录-----------')
            console.log(res)
            // 设置缓存信息
            // wx.setStorageSync('key', 'value')

          // 服务端首先调用微信接口获取session_key

          // 用户已经授权过的平台会直接返回unionId

          // 没有授权过则用session_key进行解密

          // 解密成功后服务端根据逻辑返回自定义信息
         }
        })
       }
      })
     }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  // 全局变量
  globalData: {
    userInfo: null
  }
})