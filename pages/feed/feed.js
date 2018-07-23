// pages/feed/feed.js
/**
 * demo: 股票聚合页，效果包含动态锁定于顶部的tabBar，可点击tab切换的多个页面
 */

//获取应用实例
var app = getApp()
var util = require('../../utils/util.js')

Page({
  data: {
    navTab: [{
      id: 0,
      title: "要闻"
    }, {
      id: 1,
      title: "自选"
    }, {
      id: 2,
      title: "7x24"
    }],
    currentNavTab: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '../../images/24280.jpg',
      '../../images/1444983318907-_DSC1826.jpg'
    ],
    dotsClass: ['on', '', ''],
    top: 0,
    sourceAtlas: "323254",
  },

  onLoad: function() {
    this.refresh();

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
          resource: res
        })
      }
    })
  },

  tabTap: function(e) {
    console.log("idx: " + e.currentTarget.dataset.idx + ", previous Tab: " + this.data.currentNavTab);
    this.setData({
      currentNavTab: e.currentTarget.dataset.idx,
    });
    console.log("current Tab: " + this.data.currentNavTab);
  },

  swipeChange: function(e) {
    var dotsClass = ['', '', ''];
    dotsClass[e.detail.current] = 'on';
    // console.log(e.detail.current);
    // console.log(dotsClass)
    this.setData({
      dotsClass: dotsClass
    });
  },

  //使用本地 fake 数据实现刷新效果
  refresh: function() {
    var feed = util.getDiscovery();

    console.log(feed.data);
    var feed_data = feed.data;
    this.setData({
      sourceAtlas: feed_data,
      feed_length: feed_data.length
    });
  },

  //控制回到顶部按钮的显示与消失
  scrollTopFun: function(e) {
    // let that = this;
    // that.top = e.detail.scrollTop;
    // that.$apply();
    this.setData({
      top: e.detail.scrollTop,
    })
  },

})