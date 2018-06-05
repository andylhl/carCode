// pages/qrCode/qrCode.js
var QRCode = require('../../utils/weapp-qrcode.js')

var qrcode;

Page({
  /**
   * 页面的初始数据
   */
  data: {
    text:'',
    image:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    qrcode = new QRCode('canvas', {
      // usingIn: this,
      text: "https://github.com/tomfriwel/weapp-qrcode",
      image: '/images/bg.jpg',
      width: 150,
      height: 150,
      colorDark: "black",
      colorLight: "white",
      correctLevel: QRCode.CorrectLevel.H,
    });
    
    this.tapHandler();
  },

  tapHandler: function () {
    // 传入字符串生成qrcode
    var app = getApp(); //获取全局对象
    var iphone = wx.getStorageSync('iphone');
    console.log("ddddd" + iphone);
    qrcode.makeCode(iphone);
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
  save: function () {
    console.log('save')
    wx.showActionSheet({
      itemList: ['保存图片'],
      success: function (res) {
        console.log(res.tapIndex)
        if (res.tapIndex == 0) {
          qrcode.exportImage(function (path) {
            wx.saveImageToPhotosAlbum({
              filePath: path,
            })
          })
        }
      }
    })
  }
})