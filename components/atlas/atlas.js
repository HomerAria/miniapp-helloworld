// pages/feed/atlas/atlas.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propB: {
      type: Object,
      observer: function(newVal, oldVal, changePath) {
        this.setData({
          scrollHeight: newVal.windowHeight - 40,
        })
      }
    },
    propA: {
      type: Object,
      observer: function (newVal, oldVal, changePath) {
        this.setData({
          feedData: newVal,
        })
        console.log(this.data.feedData);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrollHeight: 20,
    feedData: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})