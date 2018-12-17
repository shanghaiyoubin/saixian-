Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsArray:[]
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.procuctId)


    var that = this
    wx.request({
      url: 'http://test.cyberfresh.cn//m/mobile/commodity/commodityDeatil?mtype=IOS&appVersionNumber=2.2.2&id=' + options.procuctId,
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      }, 
      success: function (res) {

        if(res.data.status == 200){
          console.log(res)
                      console.log(res.data.data.commodityBanner)

          that.setData({
            detailsArray: res.data.data
          });

        }
        


        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });

    





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