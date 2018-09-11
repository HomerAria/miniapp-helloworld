// pages/calendar/calendar.js
import initCalendar, {
  switchView,
  getSelectedDay,
  setTodoLabels,
  jump
} from '../../template/calendar/index';

var data2 = [{
  year: '2018',
  month: '9',
  day: '11',
}, {
  year: 2018,
  month: 9,
  day: 18,
}];

const conf = {
  // onShow: function () {
  //   initCalendar({
  // multi: true, // 是否开启多选,
  // disablePastDay: true, // 是否禁选过去日期
  // defaultDay: '2018-8-8', // 初始化日历时指定默认选中日期，如：'2018-3-6' 或 '2018-03-06'
  /**
   * 选择日期后执行的事件
   * @param { object } currentSelect 当前点击的日期
   * @param { array } allSelectedDays 选择的所有日期（当mulit为true时，才有allSelectedDays参数）
   */
  // afterTapDay: (currentSelect, allSelectedDays) => {
  //   console.log('===============================');
  //   console.log('当前点击的日期', currentSelect);
  //   console.log('当前点击的日期是否有事件标记: ', currentSelect.hasTodo || false);
  //   allSelectedDays && console.log('选择的所有日期', allSelectedDays);
  //   console.log('getSelectedDay方法', getSelectedDay());
  // },
  /**
   * 日期点击事件（此事件会完全接管点击事件）
   * @param { object } currentSelect 当前点击的日期
   * @param { object } event 日期点击事件对象
   */
  // onTapDay(currentSelect, event) {
  //   console.log(currentSelect);
  //   console.log(event);
  // },
  /**
   * 日历初次渲染完成后触发事件，如设置事件标记
   */
  afterCalendarRender() {

    // 异步请求
    setTimeout(() => {
    setTodoLabels({
      pos: 'bottom',
      // dotColor: '#002d74',
      days: data2,
    });

    
    }, 1000);
  },
  // });
  // },
  // switchCalendar: function() {
  //   if (!isWeek) {
  //     // 切换为周视图
  //     switchView('week');
  //     isWeek = true;
  //   } else {
  //     switchView('month');
  //     isWeek = false;
  //   }
  // }
};

var isWeek = false;

Page(
  // conf,

  {

    /**
     * Page initial data
     */
    data: {

    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function(options) {

    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function() {},

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function() {
      initCalendar(conf);
    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function() {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function() {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function() {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function() {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function() {

    },

    // afterTapDay: (currentSelect, allSelectedDays) => {
    //   console.log('===============================');
    //   console.log('当前点击的日期', currentSelect);
    //   console.log('当前点击的日期是否有事件标记: ', currentSelect.hasTodo || false);
    //   allSelectedDays && console.log('选择的所有日期', allSelectedDays);
    //   console.log('getSelectedDay方法', getSelectedDay());
    // },
    /**
     * 日期点击事件（此事件会完全接管点击事件）
     * @param { object } currentSelect 当前点击的日期
     * @param { object } event 日期点击事件对象
     */
    // onTapDay(currentSelect, event) {
    //   console.log(currentSelect);
    //   console.log(event);
    // },
    /**
     * 日历初次渲染完成后触发事件，如设置事件标记
     */
    // afterCalendarRender() {
    //   const data = [{
    //     year: '2018',
    //     month: '9',
    //     day: '15',
    //   }, {
    //     year: 2018,
    //     month: 9,
    //     day: 18,
    //   }];
    //   // 异步请求
    //   // setTimeout(() => {
    //   setTodoLabels({
    //     pos: 'bottom',
    //     // dotColor: '#002d74',
    //     days: data,
    //   });
    //   // }, 1000);
    // },

    switchCalendar: function() {
        if (!isWeek) {
          // 切换为周视图
          switchView('week');
          isWeek = true;
        } else {
          switchView('month');
          isWeek = false;
        }
    },

    todo: function() {
      data2 = [{
        year: '2018',
        month: '9',
        day: '15',
      }, {
        year: 2018,
        month: 9,
        day: 18,
      }, {
        year: 2018,
        month: 9,
        day: 19,
      }, {
        year: 2018,
        month: 9,
        day: 28,
      }, {
        year: 2018,
        month: 9,
        day: 26,
      }, {
        year: 2018,
        month: 9,
        day: 29,
      }];

      setTodoLabels({
        pos: 'bottom',
        // dotColor: '#002d74',
        days: data2,
      });
    },

    today: function() {
      jump();
    }
  })