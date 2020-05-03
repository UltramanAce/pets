Component({
    data: {
        remind: `提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述提醒建议描述`,
        planList: ['当天提醒', '前一天提醒', '前三天提醒', '前一周提醒'],
        planIndex: 0,
        formData: {
            plan: "",
            date: "",
        },
        insecticidalDate: '2020-05-01',
        nextDate: '2020-07-01'
    },
    methods: {
        submitForm (e) {
            console.log(e.detail.value)
        },
        bindPlanChange (e) { 
            this.setData({
                planIndex: e.detail.value,
                formData: {
                    plan: e.detail.value
                }
            })
        },
        bindDateChange (e) { 
            this.setData({
                formData: {
                    date: e.detail.value
                }
            })
        }
    }
});
