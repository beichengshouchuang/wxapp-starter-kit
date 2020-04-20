//index.js
const regeneratorRuntime = require('../../lib/runtime.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: async function () {
    console.log('=========', app.globalData);
    const result = await this.syncMethod(3000);
    console.log('result', result);
  },
  syncMethod: function(timer) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({
          result: 'ok',
        })
      }, timer);
    })
  },
  onShareAppMessage() {
    return {
      title: app.globalData.default.defaultShareTitle,
      path: '/pages/index/index',
      imageUrl: app.globalData.default.defaultShareTitle,
      success: res => {},
      fail: () => {},
      complete: () => {}
    };
  }
})
