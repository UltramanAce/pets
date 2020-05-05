Component({
    data: {
        photos: [
            '/images/cat.jpg',
            '/images/cat.jpg',
            '/images/cat.jpg',
            '/images/cat.jpg',
            '/images/cat.jpg',
            '/images/cat.jpg',
            '/images/cat.jpg',
            '/images/cat.jpg',
            '/images/cat.jpg',
        ],
        formData: {
            text: "",
            lable: ""
        },
        lableList: ["随手记", "11", "22"],
        lableIndex: 0,
        rules: [
            // {
            //     name: 'nickname',
            //     rules: {required: true, message: '宠物昵称必填'},
            // }
        ],
        auto_height: true, // 当textarea获取焦点时自适应高度，失去焦点时不自适应高度。 自适应高度时，style中的height无效
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
                    console.log('--------')
                    console.log(obj)
                }
            })
        },
        lableChange () { 

        },
        areablur:function(){
            this.setData({
              auto_height:false
            })
        },
        areafocus:function(){
            this.setData({
                auto_height: true
            })
        },
        // 九宫格删除照片
        closeImage(e){
            console.log(e.detail.index)
            let newPhotos = this.data.photos;
            newPhotos.splice(e.detail.index,1)
            this.setData({
                photos: newPhotos
            })
            console.log('----------')
            console.log(this.data.photos)
        },
        // 添加照片
        addImage (e) { 
            console.log('=-=--=-=-=-')
            console.log(e)
            let addPhotos = this.data.photos.push(e.detail.img);
            this.setData({
                photos: addPhotos
            })
        }
    }
});
