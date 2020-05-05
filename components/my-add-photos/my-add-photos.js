Component({
  properties: {
    photos: {
      type: Array,
      value: [] // 图片url
    },
    maxlength: {
      type: Number,
      value: 9
    }
  },
  data: {

  },
  attached() {
  },
  methods: {
    // 删除照片(触发父页面方法)
    closeImage: function (e) { 
      let myEventDetail = { index: e.target.dataset.index } // detail对象，提供给事件监听函数
      this.triggerEvent('closeImage', myEventDetail) // myevent自定义名称事件，父组件中使用
    },
    // 添加照片(触发父页面方法)
    addImage: function (res) {
      let myEventDetail = { img: res.tempFilePaths[0] }
      this.triggerEvent('addImage', myEventDetail)
    },
    // 调用相册
    chooseImage: function () {
      var that = this
      wx.chooseImage({
        count: 9, // 最多可以选择的图片张数，默认9
        sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
        sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
        success: function(res){
          that.addImage(res);
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    },
  }
})