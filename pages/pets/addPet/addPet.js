Component({
    data: {
        img: "",
        formData: {
            nickname: "",
            gender: "",
            species: "",
            date: "",
            sterilization: ""
        },
        speciesList: ["猫猫", "狗狗", "猪猪"],
        speciesIndex: 0,
        rules: [
            {
                name: 'nickname',
                rules: {required: true, message: '宠物昵称必填'},
            }
        ],
        showTopTips: false,
        errorMsg: "",
        error: false
    },
    methods: {
        // 提交
        submitForm (e) {
            this.selectComponent('#form').validate((valid, errors) => {
                console.log(e.detail.value)
                console.log(e)
                if (!valid) {
                    const firstError = Object.keys(errors)
                    if (firstError.length) {
                        this.setData({
                            errorMsg: errors[firstError[0]].message,
                            error: true
                        })
                    }
                } else {
                    // 组装提交数据
                    wx.showToast({
                        title: '校验通过'
                    })
                    let obj = Object.assign({}, this.data.formData);
                    obj.img = this.data.img[0];
                    console.log('--------')
                    console.log(obj)

                    wx.navigateTo({
                        url: '/pages/pets/myPet/myPet'
                    })
                }
            })
        },
        // 宠物昵称
        formInputChange(e) {
            const { field } = e.currentTarget.dataset
            this.setData({
                [`formData.${field}`]: e.detail.value
            })
        },
        // 宠物性别
        genderChange: function (e) {
            console.log('宠物性别，携带value值为：', e.detail.value);
        },
        // 宠物品种
        speciesChange: function(e) {
            console.log('宠物品种，携带值为', e.detail.value);
    
            this.setData({
                speciesIndex: e.detail.value
            })
        },
        // 到家时间
        bindDateChange: function (e) {
            this.setData({
                [`formData.date`]: e.detail.value
            })
        },
        // 绝育状态
        sterilizationChange: function (e) {
            console.log('绝育状态，携带value值为：', e.detail.value);
        },
        // 调用相册或相机
        chooseImage: function () {
            var that = this
            wx.chooseImage({
              count: 9, // 最多可以选择的图片张数，默认9
              sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
              sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
              success: function(res){
                console.log(res)
                that.setData({
                    img: res.tempFilePaths
                })
              },
              fail: function() {
                // fail
              },
              complete: function() {
                // complete
              }
            })
        }
    }
});
