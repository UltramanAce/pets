var urlType=1,appId ='wx1adf49528bbef841',baseURI, webViewURI;   //urlType 1为正式环境，2为测试环境，3为开发环境 旧appid：wxc6f859adb7817e18
if (urlType==1){
  //正式环境
  baseURI = 'https://top2.topsunny.cn/';
  webViewURI = 'https://top2.topsunny.cn/activity/action/';
}else if(urlType==2){
  //测试环境
  baseURI = 'https://ztst.topsunny.cn/';
  webViewURI ='https://ztst.topsunny.cn/activity/src-code/allAction/dist/';
}else{
  //开发环境
  baseURI = 'http://192.168.1.47:8080/';
  webViewURI = 'https://ztst.topsunny.cn/activity/src-code/allAction/dist/';
}
/**
   * 封装接口请求方法
   * @param url 接口地址
   * @param method 方法
   * @param data 数据
   * @param type 空 在url后带参数  1 url拼接  2 body  3 fromData //空 在url后带参数 1 body 2 fromData  3 url拼接 
   * @param doSuccess 成功回调
   * @param doFail 失败回调
  */
 function requestFun (method, url, data, type) {
  var myParams='';
  wx.showLoading({
    title:'拼命加载中',
    mask:true
  })
  if(type==1&&(data!={}||data)){  //将数据拼接在URL里面
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
          //请求成功，执行成功的回调
          wx.hideLoading();
          resolve(res.data);
        } else {
          wx.hideLoading();
          //请求失败，抛出异常
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
  "server":server,
}