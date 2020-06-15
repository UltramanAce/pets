var appId ='wx65c832149ef5d9b9';
var baseURI = 'https://api.ebestpet.com/';

/**
   * 封装接口请求方法
   * @param url 接口地址
   * @param method 方法
   * @param data 数据
   * @param type 空 在url后带参数  1 url拼接  2 body  3 fromData // 空 在url后带参数 1 body 2 fromData  3 url拼接 
   * @param doSuccess 成功回调
   * @param doFail 失败回调
  */
 function requestFun (method, url, data, type) {
  var myParams='';
  wx.showLoading({
    title:'拼命加载中',
    mask:true
  })
  if(type==1&&(data!={}||data)){  // 将数据拼接在URL里面
    for(let key in data) {
      url = url +'/' + data[key] ;
    }
  }
  console.log("URL:"+url);
  return new Promise((resolve,reject)=>{
    wx.request({
      "url": url,
      "header": {
        "content-type": type == 3 ? "application/x-www-form-urlencoded;charset=utf-8" : "application/json;charset=utf-8",
        "authorization": wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
      },
      "method": method,
      "data": data,
      success: function (res) {
        wx.hideLoading();
         if (res.data.code == 100 ) {
          // 请求成功，执行成功的回调
          wx.hideLoading();
          resolve(res.data);
        } else {
          wx.hideLoading();
          // 请求失败，抛出异常
          wx.showToast({
            title: res.data.content ? res.data.content : res.data.msg,
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function (res) {
        // reject(res)
        wx.showToast({
          title: JSON.stringify(res),
          icon: 'none',
          duration: 2000
        })
      }
    })
  })
};
function authLogin () {
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
       methods: 'POST',
       data: {
        clientId: "homepet",
        mobile: "13168873392",
        code: code,
        encryptedData: encryptedData,
        iv: iv
       },
        succeess: res => {
         console.log('--------登录-----------')
         console.log(res)
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
}
  
var server={
  login(paramObj){
    return requestFun('GET', baseURI + "activity-api/wxma/" + appId + "/user/login", paramObj);
  },
  getClientInfo(paramObj){
    return requestFun('GET', baseURI +"qdadp/client/getClientInfo", paramObj);
  },
  UserIntegralWX(paramObj){
    return requestFun('POST', baseURI+"qdadp/client/UserIntegralWX", paramObj,3);
  },
  getAllClientMcode(paramObj){
    return requestFun('POST', baseURI+"qdadp/actMcodeService/getAllClientMcode", paramObj,3);
  },
  loginBind(paramObj){
    return requestFun('GET', baseURI + "activity-api/wxma/" + appId +"/user/loginBind", paramObj);
  },
  getCaptcha(paramObj){
    return requestFun('GET', baseURI + "qdadp/commonService/getCaptcha", paramObj);
  },
}
module.exports = {
  "requestFun":requestFun,
  "authLogin":authLogin,
  "server":server,
}