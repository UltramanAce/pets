var appId ='wx65c832149ef5d9b9';
var baseURI = 'https://api.ebestpet.com/api/';

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
        "authorization": wx.getStorageSync('token') ? 'Bearer'+' '+wx.getStorageSync('token') : ''
      },
      "method": method,
      "data": data,
      success: function (res) {
        wx.hideLoading();
         if (res.statusCode == 200 ) {
          // 请求成功，执行成功的回调
          wx.hideLoading();
          resolve(res.data);
        } else {
          wx.hideLoading();
          // 请求失败，抛出异常
          wx.showToast({
            // title: res.data.content ? res.data.content : res.data.msg,
            title: '请求失败',
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
//        url: 'https://api.ebestpet.com/v1/wechat/login',
       url: 'https://login.ebestpet.com',
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
  // 获取用户信息
  getUserMe(){ return requestFun('GET', 'https://login.ebestpet.com/api/user/me'); },
  // 获取主页banner图片
  getBanner(){ return requestFun('POST', baseURI+"pets/banner"); },
  // 获取《养宠必读》列表
  getReadList(){ return requestFun('POST', baseURI+"pets/readList"); },
  // 获取《养宠必读》详情
  getReadDetails(){ return requestFun('POST', baseURI+"pets/readDetails"); },
  // 获取《训练专场》列表
  getDrillList(){ return requestFun('POST', baseURI+"pets/drillList"); },
  // 获取《训练专场》详情
  getDrillDetails(){ return requestFun('POST', baseURI+"pets/drillDetails"); },
  // 获取《知识专题》列表
  getKnowledgeList(){ return requestFun('POST', baseURI+"pets/knowledgeList"); },
  // 获取《知识专场》详情
  getKnowledgeDetails(){ return requestFun('POST', baseURI+"pets/knowledgeDetails"); },
  // 获取《健康提醒》列表
  getHealthTipsList(){ return requestFun('POST', baseURI+"pets/healthTipsList"); },
  // 获取《健康提醒》详情
  getHealthTipsDetails(){ return requestFun('POST', baseURI+"pets/healthTipsDetails"); },
  // 获取《开启提醒（通用）》信息
  getOpenRemindCom(){ return requestFun('POST', baseURI+"pets/openRemindCom"); },
  // 提交《开启提醒（通用）》
  submitOpenRemindCom(){ return requestFun('POST', baseURI+"pets/submitOpenRemindCom"); },
  // 获取《开启提醒（免疫）》信息
  getOpenRemindImmune(){ return requestFun('POST', baseURI+"pets/openRemindImmune"); },
  // 提交《开启提醒（免疫）》
  submitOpenRemindImmune () { return requestFun('POST', baseURI + "pets/submitOpenRemindImmune"); },
  // 获取《开启提醒（驱虫）》信息
  getOpenRemindInsecticidal(){ return requestFun('POST', baseURI+"pets/openRemindInsecticidal"); },
  // 提交《开启提醒（驱虫）》
  submitOpenRemindInsecticidal(){ return requestFun('POST', baseURI+"pets/submitOpenRemindInsecticidal"); },
  // 提交《发布》
  submitRelease(){ return requestFun('POST', baseURI+"pets/submitRelease"); },
  // 提交《添加宠物》表单
  submitAddPet(){ return requestFun('POST', baseURI+"pets/addPet"); },
  // 提交《修改宠物》表单
  submitEditPet(){ return requestFun('POST', baseURI+"pets/editPet"); },
  // 获取《我的宠物》信息
  getMyPet(){ return requestFun('POST', baseURI+"pets/myPet"); },
  // 获取《宠物详情》列表 
  getPetDetailsList(){ return requestFun('POST', baseURI+"pets/petDetailsList"); },
  // 获取《宠物种类》列表
  getPetSpeciesList(){ return requestFun('POST', baseURI+"pets/petSpeciesList"); },
  
}
module.exports = {
  "requestFun":requestFun,
  "authLogin":authLogin,
  "server":server,
}