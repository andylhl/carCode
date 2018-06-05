// pages/index/index.js
var QRCode = require('../../utils/weapp-qrcode.js')
var app = getApp(); //获取全局对象
var qrcode;

Page({
    data: {
        iphone: null,
        carNumber: null,
        image: ''
    },
    onLoad: function (options) {
        qrcode = new QRCode('canvas', {
            // usingIn: this,
            text: "https://github.com/tomfriwel/weapp-qrcode",
            image:'/images/bg.jpg',
            width: 150,
            height: 150,
            colorDark: "#1CA4FC",
            colorLight: "white",
            correctLevel: QRCode.CorrectLevel.H,
        });
    },

    iphoneInput: function (e) {
      console.log("e.detail.value" + e.detail.value);
      this.setData({
        iphone: e.detail.value
      })
    },

    carNumberInput:function(e){
      this.setData({
        carNumber: e.detail.value
      })
    },

    //跳转页面
    submitButton: function () {
      if (null == this.data.iphone || this.data.iphone.length < 11){
          wx.showToast({
            title: '请输入手机号',
            icon: 'loading',
            duration: 1500,
            mask: true
          })
          return;
        }
      if (null == this.data.carNumber || this.data.carNumber.length < 1){
        wx.showToast({
          title: '请输入车牌号',
          icon: 'loading',
          duration: 1500,
          mask: true
        })
        return;
      }
        app.iphone = this.data.iphone;
        console.log("ddddd" + this.data.iphone);
        wx.setStorageSync('iphone', this.data.iphone);
        wx.navigateTo({
          url: '/pages/qrCode/qrCode'
        }) 
    }
})