Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menuList:Array,
    currentTab: { // 设置当前tab索引值
      type: Number,
      value: 0
    }, 
    windowWidth: Number,
    tabScroll: Number,
    count: { // 一行显示多少个tab
      type: Number,
      value: 2
    },
    tabType: { // 样式类型(默认黄字短黄线， type1: 黄底白字， type2: 黄字无线， type3: 黄字长黄线)
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMenu:function(event){
      var res = wx.getSystemInfoSync()
      this.properties.windowWidth =  res.windowWidth
      var current = event.currentTarget.dataset.current
      var tabWidth = this.properties.windowWidth / this.properties.count
      this.setData({
        tabScroll: (current - this.properties.count/2) * tabWidth
        })
    if(this.properties.currentTab == current) {
        return false
    } else {
     this.setData({
       currentTab: event.currentTarget.dataset.current
     })
     this.triggerEvent('clickMenu', { current: event.currentTarget.dataset.current },{})
    }
    },
  
  }
})