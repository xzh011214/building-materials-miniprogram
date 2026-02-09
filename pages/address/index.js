Page({
  data: {
    addressList: [
      {
        id: 1,
        name: '王先生',
        phone: '13812345678',
        isDefault: true,
        detail: '北京市东城区东直门街道 东直门外大街48号 东方银座写字楼'
      },
      {
        id: 2,
        name: '李小姐',
        phone: '13812345678',
        isDefault: false,
        detail: '北京市东城区东直门街道 东直门外大街48号 东方银座写字楼'
      },
      {
        id: 3,
        name: '李小姐',
        phone: '13812345678',
        isDefault: false,
        detail: '北京市东城区东直门街道 东直门外大街48号 东方银座写字楼'
      }
    ]
  },

  goEdit() {
    wx.navigateTo({ url: '/pages/address-edit/index' });
  }
});
