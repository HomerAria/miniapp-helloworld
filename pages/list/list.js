// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //事件处理函数
  movableView: function () {
    wx.navigateTo({
      url: '../movable/movable'
    })
  },

  dragSort: function () {
    wx.navigateTo({
      url: '../dragA/dragA'
    })
  },

  foldUp: function () {
    wx.navigateTo({
      url: '../fold/fold'
    })
  },

  pdf: function () {
    wx.navigateTo({
      url: '../pdf/pdf'
    })
  },

  calendar: function(){
    wx.navigateTo({
      url: '../calendar/calendar'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})