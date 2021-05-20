// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log("checking our phone storage", wx.getStorageSync('stories'))
    this.globalData.stories = wx.getStorageSync('stories')
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  test(){
    console.log("test")
  },


  globalData: {
    userInfo: null,
    stories: [
      {
        title: "I hate github... :(",
        author: "irene"
      }, 
      {
        title: "I pushed to master by mistake... :(",
        author: "Ashkan"
      }
    ]
  }
})
