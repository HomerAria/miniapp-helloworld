// pages/fold/fold.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardList: [{
      "title": "A",
      "key": "0",
    }, {
      "title": "B",
      "key": "1",
    }, {
      "title": "C",
      "key": "2",
    }, {
      "title": "D",
      "key": "3",
    }, {
      "title": "E",
      "key": "4",
    }, {
      "title": "F",
      "key": "5",
    }],
    frameClass1: 'z1',//默认正面在上面
    frameClass2: 'z2',
    flag: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease-in-out', // "linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
      delay: 0,
      transformOrigin: '50% 50% 0',
      success: function(res) {
        console.log("res")
      }
    })
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

  },

  start: function() {
    //rotate3d: 参数 x,y,z轴,  翻转度数
    //其中x,y,z轴为0-1范围，y轴设置为1，代表以y轴为旋转轴
    // this.animation.rotate3d(1, 0, 0, 180).step()
    // this.setData({
    //   animation: this.animation.export()
    // })

    var temp;
    if (this.data.flag < 6) {
      temp = this.data.flag + 1;
      this.setData({
        flag: temp,
      })
    } else {
      this.setData({
        flag: 1,
      })
    }

    var that = this
    if (this.data.frameClass1 == 'z1' && this.data.frameClass2 == 'z2') {
      that.setData({
        frameClass1: "front",
        frameClass2: "back",
      })
      setTimeout(function() {
        that.setData({
          frameClass1: "z2",
          frameClass2: "z1",
        })
      }, 1000);
    } else if (this.data.frameClass1 == 'z2' && this.data.frameClass2 == 'z1'){
      that.setData({
        frameClass1: "back",
        frameClass2: "front",
      })
      setTimeout(function() {
        that.setData({
          frameClass1: "z1",
          frameClass2: "z2",
        })
      }, 1000);
    }

  },
})