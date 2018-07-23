// pages/stock/compB/compB.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propA: {
      type: Object,
      observer: function (newVal, oldVal, changePath) {
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

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
