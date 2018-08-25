// pages/dragA/dragA.js
// var query = wx.createSelectorQuery(); //创建节点选择器

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabPool: [{
      "tab": "全部",
      "tabKey": "0"
    }, {
      "tab": "A股",
      "tabKey": "1"
    }, {
      "tab": "美股",
      "tabKey": "2"
    }, {
      "tab": "港股",
      "tabKey": "3"
    }, {
      "tab": "科技股",
      "tabKey": "4"
    }, {
      "tab": "地产股",
      "tabKey": "5"
    }, {
      "tab": "汽车股",
      "tabKey": "6"
    }, {
      "tab": "化工股",
      "tabKey": "7"
    }, {
      "tab": "农业股",
      "tabKey": "8"
    }, {
      "tab": "医疗股",
      "tabKey": "9"
    }, {
      "tab": "金融股",
      "tabKey": "10"
    }],
    listHeight: 0,
    chosenTop: 0,
    chosenLeft:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var listHeight;
    var query = wx.createSelectorQuery(); //创建节点选择器
    query.select('.tabContain').boundingClientRect()
    query.exec((res) => {
      // listHeight = res[0].height; // 获取list高度
      // console.log("listHeight=" + listHeight);
      that.setData({
        listHeight: res[0].height,
      })
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})