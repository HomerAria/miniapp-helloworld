// pages/stock/compFeed/compFeed.js
/** 
 * demo:滚动轮播图+listview效果
 */
var util = require('../../utils/util.js')    //目前不支持使用绝对路径

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propA:{
      type: Object,
      observer: function(newVal, oldVal, changePath){
        this.setData({
          scrollHeight: newVal.windowHeight - 40,
        })

        // console.log(newVal);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollHeight: 0,
    currentNavTab: 0,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      '/images/24280.jpg',
      '/images/1444983318907-_DSC1826.jpg'
    ],
    dotsClass: ['on', '', ''],
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  attached: function() {
    
  },
  moved: function() {},
  detached: function() {},
  ready: function() {
    this.refresh();
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //使用本地 fake 数据实现刷新效果
    refresh: function() {
      var feed = util.getDiscovery();
      // console.log("loaddata");
      // console.log(feed.data);
      var feed_data = feed.data;
      this.setData({
        feed: feed_data,
        feed_length: feed_data.length
      });
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

  

  }


})