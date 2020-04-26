Component({
  properties: {
    grids: {
      type: Array,
      value: [
        // {
        //   url: '', // 导航地址
        //   title: '', // 文字
        //   img: '', // 图片路径
        //   icon: '', // icon名称
        //   iconC: '', // icon color
        //   iconS: 60, // icon size 
        // }
      ]
    },
    num: { // 一行排列宫格个数
      type: Number,
      value: 3
    }
  },
  data: {

  },
  attached() {
  },
  methods: {

  }
})