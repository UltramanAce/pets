const computedBehavior = require('miniprogram-computed')

Component({
  behaviors: [computedBehavior],
  options: {
    addGlobalClass: true, // 允许公用样式作用到自定义组件
  },
  properties: {
    num: { // 一行排列几张
      type: Number,
      value: 1
    },
    images: {
      type: Array,
      value: [
        // {
        //   img: '', // 图片路径
        //   url: '', // 导航地址
        //   title: '', // 标题
        //   fontS: '24rpx', // 字体大小
        //   color: '#666', // 字体颜色
        //   icon: '', // 图标
        //   iconNum: 0, // 图标个数
        //   iconAlign: 'left', // 图标布局
        //   hasBanner: true, // 是否有横幅
        // }
      ]
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