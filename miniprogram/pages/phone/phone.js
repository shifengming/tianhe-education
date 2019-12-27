Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [
      { title: '黄老师',  desc: '资深早教经理 8年行业经验', img: '../images/phone/teacher1.png', phone: '15027168387' },
      { title: '王老师',  desc: '资深早教经理 8年行业经验', img: '../images/phone/teacher2.png', phone: '15027168387' },
      { title: '周老师',  desc: '资深早教经理 8年行业经验', img: '../images/phone/teacher3.png', phone: '15027168387' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  call:function(e){
    wx.makePhoneCall({
      phoneNumber:e.currentTarget.dataset.phone,
    })
  }

  /**
   * 点击跳转
   */
  // click_swiper: function (e) {
  //   console.log(e)
  //   var current = e.currentTarget.dataset.current
  //   if (current == 0) {
  //     wx.navigateTo({
  //       url: '../home1/home1',
  //     })
  //   }
  //   if (current == 1) {
  //     wx.navigateTo({
  //       url: '../home2/home2',
  //     })
  //   }
  //   if (current == 2) {
  //     wx.navigateTo({
  //       url: '../home3/home3',
  //     })
  //   } 
})
