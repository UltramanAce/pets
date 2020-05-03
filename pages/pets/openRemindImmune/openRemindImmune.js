Component({
    data: {
        immuneDate: '2020-01-01', // 免疫时间
        immuneBrand: '国字号', // 免疫品牌
        planList: ['当天提醒', '前一天提醒', '前三天提醒', '前一周提醒'],
        planIndex: 0,
        brandList: ['国字号', '进口号'],
        brandIndex: 0,
        brand: Number, // 免疫品牌的值
        formData: {
            flow: [], // 免疫阶段选取值
            plan: "" // 提醒计划
        },
        checkboxItems: [ // 免疫阶段list
            {
                name: '出生后56天，注射第一针',
                value: '0',
                checked: true
            },
            {
                name: '距上一针间隔21天',
                value: '1'
            },
            {
                name: '距上一针间隔21天',
                value: '2'
            },
            {
                name: '每年注射一次',
                value: '3'
            }
        ],
        nextDate: '2020-07-01'
    },
    methods: {
        submitForm (e) {
            console.log(e.detail.value)
        },
        bindBrandChange (e) { 
            console.log(e)
            let obj = Object.assign({}, this.formData)
            console.log(obj)
            obj.brand = e.detail.value
            console.log(obj)
        },
        checkboxChange: function (e) {
            console.log('checkbox发生change事件，携带value值为：', e.detail.value);
    
            var checkboxItems = this.data.checkboxItems, values = e.detail.value;
            for (var i = 0, lenI = checkboxItems.length; i < lenI; ++i) {
                checkboxItems[i].checked = false;
    
                for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                    if(checkboxItems[i].value == values[j]){
                        checkboxItems[i].checked = true;
                        break;
                    }
                }
            }
    
            this.setData({
                checkboxItems: checkboxItems,
                [`formData.checkbox`]: e.detail.value
            });
        },
    }
});
