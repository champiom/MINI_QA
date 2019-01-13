// pages/empty_create/empty_create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义一个数组，数组每一项是对象，对象里面对应菜单的数据
    //管理菜单的每一项的不同参数，还有不同布局结构需要的额外的参数
    navData: [
      {
        name: "今日求购",  //文本
        current: 1,    //是否是当前页，0不是  1是
        style: 0,     //样式
        ico: '/images/iconchat.png',  //不同图标
        fn: 'gotoCompanyIndex'   //对应处理函数
      }, {
        name: "名片",
        current: 0,
        style: 0,
        ico: 'icon-mingpianjia',
        fn: 'gotobusinessCard'
      }, {
        name: "发布",
        current: 0,
        style: 1,
        ico: '',
        fn: 'gotopublish'
      }, {
        name: "消息",
        current: 0,
        style: 0,
        ico: 'icon-yikeappshouyetubiao35',
        fn: 'gotoMessages',
        msg: 2   //因为消息是这个“消息”特有的，所以只有这个对象下游msg键值
      }, {
        name: "我的",
        current: 0,
        style: 0,
        ico: 'icon-wode',
        fn: 'bindViewMy'
      }
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

  }
})