Page({
  requ(){
    wx.navigateTo({
      url: '../index/index'
    })
    wx.request({
      interface:'login',
      data:{
        username:'wanzi',
        pw:'1234'
      },
     onsuccess:function(req){
       console.log(req)
     },
     onfile:function(err){
       console.log(err)
     }
    })
  }
})