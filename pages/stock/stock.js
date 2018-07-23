// pages/stock/stock.js
//获取应用实例
const app = getApp()

var initData = {
  currentTab: 0,
  resource: "",
  tabCont: [{
      "title": "全部",
      "pic": "/pages/images/stock.png",
      "index": "0"
    },
    {
      "title": "港股",
      "pic": "/pages/images/stock.png",
      "index": "1"
    },
    {
      "title": "美股",
      "pic": "/pages/images/stock.png",
      "index": "2"
    },
    {
      "title": "沪深",
      "pic": "/pages/images/stock.png",
      "index": "3"
    },
    {
      "title": "其他",
      "pic": "/pages/images/stock.png",
      "index": "4"
    }
  ]
}

Page({

  /**
   * 页面的初始数据
   * 参与页面渲染
   */
  data: initData,

  // swiper滑动时触发bindchange事件，获取事件对象e获取当前所在滑块的 index，并将其更新至data的currentTab中，视图渲染通过判断currentTab的让对应的tab hover。
  getCurrentTab: function(e) {
    console.log(e.detail.current);
    var that = this;
    this.setData({
      currentTab: e.detail.current
    });
    console.log("11111"+this.data.currentTab);
  },
  swithNav: function(e) {
    var that = this;
    that.setData({
      currentTab: e.target.dataset.current
    });
  },

  //下载刷新
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();

    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });

  },

  onButtonClick: function() {
    wx.showToast({
      title: '点击成功',
      duration: 2000
    })

    console.log("onLoad:" + app.globalData.screenHeight);

    wx.navigateTo({
      url: '/pages/company/company?id=10',
      success: function() {},
      fail: function() {},
      complete: function() {},
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;

    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
        console.log(res.platform)

        app.globalData.screenHeight = res.windowHeight;
        app.globalData.screenRatio = res.pixelRatio;

        that.setData({
          resource: res,
        })
      }
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