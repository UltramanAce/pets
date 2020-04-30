Component({
  options: {
    addGlobalClass: true, // 允许公用样式作用到自定义组件
  },
  "externalClasses": ['my-panel'],
  properties: {
    type: { // panel类型
      type: Number,
      value: 1
    },
    panels: {
      type: Array,
      value: [
        // {
        //   url: '', // 导航地址
        //   title: '', // 标题
        //   desc: '', // 主详情
        //   descSub: '', // 次详情
        //   img: '', // 图片路径
        // }
      ]
    }
  },
  data: {

  },
  attached() {
  },
  methods: {

  }
})