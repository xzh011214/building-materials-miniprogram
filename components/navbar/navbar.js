Component({
  properties: {
    // 导航栏标题
    pageTitle: {
      type: String,
      value: ''
    },
    // 是否是首页（首页显示logo，非首页显示返回）
    isHome: {
      type: Boolean,
      value: false
    },
    // 是否显示返回按钮文字
    showBackText: {
      type: Boolean,
      value: false
    },
    // 是否透明导航栏
    transparent: {
      type: Boolean,
      value: false
    },
    // 是否浅色文字（适配深色背景）
    lightText: {
      type: Boolean,
      value: false
    },
    // 首页是否显示品牌+搜索框
    showHomeSearch: {
      type: Boolean,
      value: false
    },
    // 首页品牌标题
    homeTitle: {
      type: String,
      value: '建筑优选'
    },
    // 首页搜索占位
    homeSearchPlaceholder: {
      type: String,
      value: '搜索瓷砖、涂料、五金'
    },
    // 首页logo图片（可选）
    homeLogoUrl: {
      type: String,
      value: ''
    },
    // logo图片路径（旧字段兼容）
    logoUrl: {
      type: String,
      value: ''
    }
  },
  data: {
    navBarHeight: 0,
    statusBarHeight: 0,
    navBarMainHeight: 0,
    menuBottom: 0,
    menuRight: 0,
    menuHeight: 0,
    menuWidth: 0
  },
  lifetimes: {
    attached() {
  // 读取全局导航栏适配数据
  const app = getApp();
  const globalData = app.globalData;
  this.setData({
    navBarHeight: globalData.navBarHeight,
    statusBarHeight: globalData.statusBarHeight,
    menuBottom: globalData.menuBottom,
    menuRight: globalData.menuRight,
    menuHeight: globalData.menuHeight,
    menuWidth: globalData.menuWidth,
    navBarMainHeight: globalData.navBarHeight - globalData.statusBarHeight
  });
  
  // 添加调试日志
  console.log('=== navbar组件数据 ===');
  console.log('isHome:', this.properties.isHome);
  console.log('showHomeSearch:', this.properties.showHomeSearch);
  console.log('homeTitle:', this.properties.homeTitle);
  console.log('homeSearchPlaceholder:', this.properties.homeSearchPlaceholder);
  console.log('组件data:', this.data);
  console.log('组件properties:', this.properties);
}
  },
  methods: {
    // 返回按钮逻辑
    handleBack() {
      if (this.properties.isHome) return;
      wx.navigateBack({
        delta: 1,
        fail: () => {
          wx.switchTab({ url: '/pages/index/index' });
        }
      });
    },
    // 首页搜索事件
    handleSearch() {
      this.triggerEvent('search');
    }
  }
})