const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [computedBehavior],
  options: {
    addGlobalClass: true, // 允许公用样式作用到自定义组件
  },
  properties: {
    images: {
      type: Array,
      value: [
        // {
        //   img: '', // 图片路径
        //   url: '', // 导航地址
        //   title: '', // 标题
        //   iconNum: 0, // 图标个数
        // }
      ]
    },
    num: { // 一行排列几张
      type: Number,
      value: 1
    },
    icon: { // 图标
      type: String,
      value: 'star' // 默认五角星
    },
    iconAlign: { // 图标布局 left or right
      type: String,
      value: 'right'
    },
    iconType: { // Icon类型，可选值 outline（描边），field（填充）
      type: String,
      value: 'field'
    },
    iconS: { // Icon的大小，单位 px  (注意单位不是rpx)
      type: Number,
      value: 12
    },
    hasBg: { // 是否有横幅背景色
      type: Boolean,
      value: true
    },
    imgH: { // 图片高度
      type: Number,
      value: 284 // 一行一张height: 284rpx; 一行多张height: 192rpx
    }
  },
  data: {

  },
  computed: {
    // sum(data) {
    //   // 注意： computed 函数中不能访问 this ，只有 data 对象可供访问
    //   // 这个函数的返回值会被设置到 this.data.sum 字段中
    //   return data.a + data.b
    // },
  },
  watch: {
    // 'a, b': function(a, b) {
    //   this.setData({
    //     sum: a + b
    //   })
    // },
  },
  attached() {
  },
  methods: {

  }
})