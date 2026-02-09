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
      { name: '待付款', className: 'orange', icon: '/images/icon/待付款.svg' },
      { name: '待发货', className: 'blue', icon: '/images/icon/待发货.svg' },
      { name: '待收货', className: 'cyan', icon: '/images/icon/待收货.svg' },
      { name: '退款', className: 'red', icon: '/images/icon/退款.svg' }
    ],
    baseServices: [
      {
        name: '我的收藏',
        className: 'star',
        icon: '/images/icon/收藏.svg',
        url: '/pages/favorite/index'
      },
      {
        name: '浏览足迹',
        className: 'clock',
        icon: '/images/icon/浏览足迹.svg',
        url: '/pages/footprint/index'
      },
      {
        name: '收货地址',
        className: 'pin',
        icon: '/images/icon/地址.svg',
        url: '/pages/address/index'
      },
      {
        name: '发票中心',
        className: 'ticket',
        icon: '/images/icon/发票.svg',
        url: '/pages/invoice/index'
      },
      {
        name: '帮助与客服',
        className: 'service',
        icon: '/images/icon/客服.svg',
        url: ''
      },
      {
        name: '设置',
        className: 'setting',
        icon: '/images/icon/设置.svg',
        url: '/pages/settings/index'
      }
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
  getLoginState() {
    const token = wx.getStorageSync('token');
    return !!token || wx.getStorageSync('isLoggedIn') === true;
  },
  refreshUser() {
    const user = wx.getStorageSync('loginUser') || {};
    const isLoggedIn = this.getLoginState();
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
    if (!this.getLoginState()) {
      wx.navigateTo({ url: '/pages/login/index' });
    }
  },
  handleNeedLogin() {
    const isLoggedIn = this.getLoginState();
    if (!isLoggedIn) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    if (!this.data.isLoggedIn) {
      this.refreshUser();
    }
    wx.showToast({ title: '功能开发中', icon: 'none' });
  },
  handleServiceTap(e) {
    const isLoggedIn = this.getLoginState();
    if (!isLoggedIn) {
      wx.showToast({ title: '请先登录', icon: 'none' });
      return;
    }
    if (!this.data.isLoggedIn) {
      this.refreshUser();
    }

    const { url } = e.currentTarget.dataset;
    if (url) {
      wx.navigateTo({ url });
      return;
    }
    wx.showToast({ title: '功能开发中', icon: 'none' });
  }
});