// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../images/index/top1.jpg',
      '../images/index/top2.jpg'
    ],
    imgUrl:[
      '../images/index/env_head1.png',
      '../images/index/env_head2.png',
      '../images/index/env_head3.png' 
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    swiperCurrent: 0,
    obj: [
      { img: '../images/index/head.png', txt: '精选优质早教商家' },
      { img: '../images/index/head.png', txt: '成熟型早教服务' },
      { img: '../images/index/head.png', txt: '全程陪伴孩子成长' }
    ],
    objs :[
      { img: '../images/index/s_baby.png', txt: '婴儿服务' },
      { img: '../images/index/s_learn.png', txt: '学习教育' },
      { img: '../images/index/s_play.png', txt: '亲子游乐' },
      { img: '../images/index/s_life.png', txt: '生活服务' }
    ]
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  // // tab切换
  // currentTab: 0,
  // // 第二部分高度
  // second_height: 0,
  // arrNews: [
  //   { title: '父母读物：影响亿万妈妈的早教经典', desc: '后台有人留言，想努力做好妈妈，能不能推荐几本书来看？关于早期教育，家庭占有主要因素，一个好母亲能影响', time: '2018-12-21', img: '../images/index/env_right1.png' },
  //   { title: '宝宝要不要早教？看完这个就有数了', desc: '早教广义指从人出生到小学以前阶段的教育，狭义主要指上述阶段的早期学习。随着现在人们生活水平的提高，我', time: '2018-12-21', img: '../images/index/env_right1.png' },
  //   { title: '这三个小习惯要早早教给孩子', desc: '现在有了孩子后，家人就会把关注点放到孩子身上，在孩子很小的时候就开始系统地教育他们，让他们从小就形成', time: '2018-12-21', img: '../images/index/env_right1.png'},
  // ],
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
  //   var that = this


  //   // 获取系统信息
  //   wx.getSystemInfo({
  //     success: function (res) {
  //       console.log(res);
  //       // 可使用窗口宽度、高度
  //       console.log('height=' + res.windowHeight);
  //       console.log('width=' + res.windowWidth);
  //       // 计算主体部分高度,单位为px
  //       that.setData({
  //         // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将30rpx转换为px）
  //         second_height: res.windowHeight - res.windowWidth / 750 * 60
  //       })
  //     }
  //   })

  // },

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

  }
//    /**
//     * 滑动
//     */
//    bindChange: function (e) {
//      var that = this;
//      that.setData({ currentTab: e.detail.current })
//    },
//   /**
//    * 点击
//    */
//   swichNav: function (e) {
//     var that = this;
//     if (this.data.currentTab === e.target.dataset.current) {
//       return false;
//     } else {
//       that.setData({ currentTab: e.target.dataset.current })
//     }
//   },
//   toDetail1: function (e) {
//     // console.log(e.currentTarget.dataset.obj)
//     let obj = JSON.stringify(e.currentTarget.dataset.obj)
//     wx.navigateTo({
//       url: '/pages/index/index1/index1?obj=' + obj,
//       success: function (res) {
//         console.log(res)
//       },
//       fail: function (res) { },
//       complete: function (res) { },
//     })
//   },
//   toDetail2: function (e) {
//     // console.log(e.currentTarget.dataset.obj)
//     let obj = JSON.stringify(e.currentTarget.dataset.obj)
//     wx.navigateTo({
//       url: '/pages/index/index2/index2?obj='  + obj,
//       success: function (res) {
//         console.log(res)
//       },
//       fail: function (res) { },
//       complete: function (res) { },
//     })
//   },
//   toDetail3: function (e) {
//     // console.log(e.currentTarget.dataset.obj)
//     let obj = JSON.stringify(e.currentTarget.dataset.obj)
//     wx.navigateTo({
//       url: '/pages/index/index3/index3?obj='  + obj,
//       success: function (res) {
//         console.log(res)
//       },
//       fail: function (res) { },
//       complete: function (res) { },
//  })
//   }
})