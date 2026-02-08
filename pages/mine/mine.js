// mine.js
Page({
  data: {
    isLoggedIn: false,
    userInfo: {
      name: '建材优选用户',
      phone: '',
      level: '普通会员',
      avatar:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=construction%20user%20avatar%2C%20minimal%20style%2C%20green%20tone&image_size=square'
    },
    defaultAvatar:
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=avatar%20placeholder%2C%20minimal%2C%20light%20green&image_size=square',
    orderItems: [
      { name: '待付款', className: 'orange' },
      { name: '待发货', className: 'blue' },
      { name: '待收货', className: 'cyan' },
      { name: '退款', className: 'red' }
    ],
    baseServices: [
      { name: '我的收藏', className: 'star' },
      { name: '浏览足迹', className: 'clock' },
      { name: '收货地址', className: 'pin' },
      { name: '发票中心', className: 'ticket' },
      { name: '帮助与客服', className: 'service' },
      { name: '设置', className: 'setting' }
    ],
    decorServices: [
      { name: '施工测量' },
      { name: '方案设计' },
      { name: '全屋定制' },
      { name: '施工进度' }
    ]
  },
  onShow() {
    this.refreshUser();
  },
  refreshUser() {
    const user = wx.getStorageSync('loginUser') || {};
    const token = wx.getStorageSync('token');
    const isLoggedIn = !!token || wx.getStorageSync('isLoggedIn') === true;
    if (isLoggedIn) {
      const normalizedUser = {
        name: user.name || wx.getStorageSync('nickname') || '建材优选用户',
        phone: user.phone || wx.getStorageSync('phoneNumber') || '',
        level: user.level || '普通会员',
        avatar: user.avatar || wx.getStorageSync('avatar') || this.data.defaultAvatar
      };
      this.setData({ isLoggedIn: true, userInfo: normalizedUser });
    } else {
      this.setData({ isLoggedIn: false });
    }
  },
  handleProfileTap() {
    if (!this.data.isLoggedIn) {
      wx.navigateTo({ url: '/pages/login/index' });
    }
  },
  handleNeedLogin() {
    if (!this.data.isLoggedIn) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    wx.showToast({ title: '功能开发中', icon: 'none' });
  }
});