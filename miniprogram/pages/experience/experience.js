Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tab切换
    currentTab: 0,
    // tab 切换数据
    arr: ['全部', '课堂内容', '优秀学员', '论坛'],
    // 第二部分高度
    second_height: 0,
    arrNews: [
      { title: '孩子4岁前需不需要上早教？', desc: '宝宝那么小，上早教能学到东西吗？', time: '2019-01-12', img: '../images/experience/all1.png' },
      { title: '早教是什么？早教是你认识的早教吗？', desc: '早教最大的意义是日常日子点滴中..', time: '2019-01-12', img: '../images/experience/all2.png' },
      { title: '三种早教方式，可以让宝宝更加聪明', desc: '现在很多的爸爸妈妈为了孩子们能够..', time: '2019-01-12', img: '../images/experience/all3.png' },
      { title: '孩子4岁前需不需要上早教？', desc: '宝宝那么小，上早教能学到东西吗？', time: '2019-01-12', img: '../images/experience/all4.png' },
      { title: '早教是什么？早教是你认识的早教吗？', desc: '早教最大的意义是日常日子点滴中..', time: '2019-01-12', img: '../images/experience/all5.png' },
      { title: '三种早教方式，可以让宝宝更加聪明', desc: '现在很多的爸爸妈妈为了孩子们能够..', time: '2019-01-12', img: '../images/experience/all6.png' }

    ],
    arrNews1: [
      { title: '孩子4岁前需不需要上早教？', desc: '宝宝那么小，上早教能学到东西吗？', time: '2019-01-12', img: '../images/experience/knowledge.png' }
    ],
    arrNews2: [
      { title: '孩子4岁前需不需要上早教？', desc: '宝宝那么小，上早教能学到东西吗？', time: '2019-01-12', img: '../images/experience/exercise1.png' },
      { title: '早教是什么？早教是你认识的早教吗？', desc: '早教意义是日常日子点滴中给予..', time: '2019-01-12', img: '../images/experience/exercise2.png' }
    ],
    arrNews3: [
      { title: '孩子4岁前需不需要上早教？', desc: '宝宝那么小，上早教能学到东西吗？', time: '2019-01-12', img: '../images/experience/interest.png' }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this


    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        // 可使用窗口宽度、高度
        console.log('height=' + res.windowHeight);
        console.log('width=' + res.windowWidth);
        // 计算主体部分高度,单位为px
        that.setData({
          // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将30rpx转换为px）
          second_height: res.windowHeight - res.windowWidth / 750 * 60
        })
      }
    })
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
    wx.showNavigationBarLoading() 
    console.log(111)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('加载更多')

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 滑动
   */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current })
  },
  /**
   * 点击
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({ currentTab: e.target.dataset.current })
    }
  },
  toDetail1: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    console.log(obj)
    wx.navigateTo({
      url: '/pages/experience/all/all?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toDetail2: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    wx.navigateTo({
      url: '/pages/experience/knowledge/knowledge?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toDetail3: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    wx.navigateTo({
      url: '/pages/experience/exercise/exercise?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  toDetail4: function (e) {
    // console.log(e.currentTarget.dataset.obj)
    let obj = JSON.stringify(e.currentTarget.dataset.obj)
    wx.navigateTo({
      url: '/pages/experience/interest/interest?obj=' + obj,
      success: function (res) {
        console.log(res)
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})