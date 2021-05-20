// pages/post/post.js
const globalData = getApp().globalData
Page({
  postStory(e){
    console.log("checking on the form submit event", e.detail.value)
    let story = e.detail.value
    globalData.stories.push(story)
    wx.switchTab({
      url: '/pages/stories/stories',
    })
    wx.setStorage({
      data: globalData.stories,
      key: 'stories',
    })
  }
})