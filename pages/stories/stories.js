// pages/stories/stories.js
const globalData = getApp().globalData

Page({
  data: {

  },

  onShow(){
    console.log("checking globalData", globalData)
    this.setData({
      stories: globalData.stories
    })
  }
})