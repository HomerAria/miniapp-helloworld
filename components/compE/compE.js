// pages/stock/compA/compA.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propA: {
      type: Object,
      observer: function (newVal, oldVal, changePath) {
        this.setData({
          scrollHeight: newVal.windowHeight - 35,
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    items: [{
      "title": "title1"
    }],
    scrollHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onButtonClick: function (e) {
      console.log(e.currentTarget.dataset);
      wx.showToast({
        title: 'click',
        icon: '',
        image: '',
        duration: 1000,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      });

      wx.navigateTo({
        url: '../company/company',
      })


      console.log("onLoad:" + getApp().globalData.screenHeight);


    },

    onButtonClicka: function (e) {
      console.log(e.currentTarget.dataset);
      wx.showToast({
        title: 'click',
        icon: '',
        image: '',
        duration: 1000,
        mask: true,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      });

      wx.navigateTo({
        url: '../animator/animator',
      })


      console.log("onLoad:" + getApp().globalData.screenHeight);


    }
  }

})