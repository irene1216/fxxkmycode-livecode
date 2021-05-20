// pages/stories/stories.js
const globalData = getApp().globalData

Page({
  data: {
    activeIndex: ''
  },

  tapOnCard(e){
    console.log("tapping on card", e.currentTarget.dataset.index)
    let index = e.currentTarget.dataset.index
    this.setData({
      activeIndex: index
    })
    wx.navigateTo({
      url: `/pages/story/story?id=${index}&test=icecream`,
    })
  },

  onShow(){
    console.log("checking globalData", globalData)
    this.setData({
      stories: globalData.stories
    })
  }
})