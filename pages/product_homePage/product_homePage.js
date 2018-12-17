//index.js

Page({
  data: {
   movies:[]
  },
   
onLoad: function () {
 
  
    var that = this
    wx.request({
    url: 'http://test.cyberfresh.cn/m/mobile/guess/guesslike?mtype=IOS&promotionId=2&appVersionNumber=2.2.2&showType=PERSON',
    data: {},
    //method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     header: {
    'content-type': 'application/json' // 默认值
     }, // 设置请求的 header
    success: function(res){
      
          console.log(res.data.data.commodity)
          that.setData({  
            movies: res.data.data.commodity
          });        
  
  
      // success
    },
    fail: function() {
      // fail
    },
    complete: function() {
      // complete
    }
  });
  
  },
  onPullDownRefresh: function () {

    wx.showNavigationBarLoading() //在标题栏中显示加载

    var that = this
    wx.request({
      url: 'http://test.cyberfresh.cn/m/mobile/guess/guesslike?mtype=IOS&promotionId=2&appVersionNumber=2.2.2&showType=PERSON',
      data: {},
      //method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/json' // 默认值
      }, // 设置请求的 header
      success: function (res) {

        console.log(res.data.data.commodity)
        that.setData({
          movies: res.data.data.commodity
        });
        setTimeout(function(){
          wx.hideNavigationBarLoading() //完成停止加载
          wx.stopPullDownRefresh() //停止下拉刷新
        },1500);
        
     
      },
      fail: function () {
       
      },
      complete: function () {
        // complete
      }
    });
  } ,
  toDeatails: function(e){
   
    console.log(this.data.movies[e.currentTarget.dataset.index].id )
    wx.navigateTo({
      url: '../product_details/product_details?procuctId=' + this.data.movies[e.currentTarget.dataset.index].id
    })
  }
  


  
})
