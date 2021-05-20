// pages/landing/landing.js
Page({
  data: {
    user: "Ashkan"
  },

  getUserInfo(e){
    wx.getUserProfile({
      desc: "I want your user Info",
      success: (res)=>{
        console.log("get user info", res)
      }
    })
  },

  navigateToStories(e){
    console.log(e)
    wx.switchTab({
      url: '/pages/stories/stories',
    })
    // wx.navigateTo({
    //   url: '/pages/stories/stories',
    // })
  }
})