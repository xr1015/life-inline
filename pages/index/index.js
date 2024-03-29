const fetch = require('../../utils/fetch')


Page({

  /**
   * 页面的初始数据
   * 
   */
  data: {
    slides:[],
    categories:[]

  },
  /**
   * 生命周期函数——监听页面加载
   * 
   */
  onLoad: function (options) {
    // wx.request({
    //   url:'https://locally.uieee.com/slides',
    //   success: res => {
    //     this.setData({ slides:res.data })
    //   }
    // })
    fetch('slides').then(res => {
      this.setData({ slides:res.data })
    })

    fetch('categories').then(res => {
      this.setData({ categories:res.data })
    })

  }
})
