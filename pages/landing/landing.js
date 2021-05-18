// pages/landing/landing.js
Page({
  data: {
    user: "Ashkan"
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