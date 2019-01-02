// miniprogram/pages/demo/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
  toCardListPage() {
    wx.navigateTo({
      url: `plugin://aiPlugin/list?token=${getApp().globalData.pluginToken}&plat=${getApp().globalData.plat}`
    })
  },
  toCardDetailPage() {
    let employee_id = '165'    //模拟员工id为1
    wx.navigateTo({
      url: `plugin://aiPlugin/detail?token=${getApp().globalData.pluginToken}&employee_id=${employee_id}&plat=${getApp().globalData.plat}`
    })
  },
  toIMChatPage() {
    let employee_id = '165'   //模拟员工id为1
    wx.navigateTo({
      url: `plugin://aiPlugin/message?token=${getApp().globalData.pluginToken}&employee_id=${employee_id}&plat=${getApp().globalData.plat}`
    })
  },
  toPosterPage() {
    let employee_id = '165'   //模拟员工id为1
    wx.navigateTo({
      url: `plugin://aiPlugin/poster?token=${getApp().globalData.pluginToken}&employee_id=${employee_id}&plat=${getApp().globalData.plat}`
    })
  }
})