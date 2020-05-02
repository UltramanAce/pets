Component({
    data: {
        img: "/images/cat.jpg",
        formData: {
            nickname: "阿猫",
            gender: "MM",
            species: "波斯猫",
            date: "2020-01-03",
            sterilization: "未绝育"
        }
    },
    methods: {
        goto () {
            wx.navigateTo({
                url: '../addPet/addPet'
            })
        }
    }
});
