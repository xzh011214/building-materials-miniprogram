App({
  globalData: {
    navBarHeight: 0,    // 导航栏总高度（状态栏+导航栏主体）
    statusBarHeight: 0, // 手机状态栏高度
    menuTop: 0,         // 胶囊按钮顶部距离屏幕顶端距离
    menuHeight: 0,      // 胶囊按钮自身高度
    menuRight: 0,       // 胶囊按钮右侧距离屏幕右端距离
    menuBottom: 0,      // 胶囊按钮底部与导航栏底部的间距（保证垂直居中）
    menuWidth: 0        // 胶囊按钮宽度（可选，备用）
  },

  onLaunch() {
    this.setNavBarInfo(); // 小程序启动时计算导航栏适配数据，全局仅执行一次
  },

  // 核心：计算导航栏适配尺寸（全机型兼容核心逻辑）
  setNavBarInfo() {
    try {
      // 1. 获取窗口信息（新 API）
      const windowInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync();
      // 2. 获取胶囊按钮位置信息（微信内置胶囊，用于对齐参考）
      const menuButtonInfo = wx.getMenuButtonBoundingClientRect();

      const statusBarHeight = windowInfo.statusBarHeight || 20;
      const screenWidth = windowInfo.screenWidth || windowInfo.windowWidth || 375;

      // 3. 给全局数据赋值（基础信息）
      this.globalData.statusBarHeight = statusBarHeight;
      this.globalData.menuTop = menuButtonInfo.top;
      this.globalData.menuHeight = menuButtonInfo.height;
      this.globalData.menuWidth = menuButtonInfo.width;
      this.globalData.menuRight = screenWidth - menuButtonInfo.right;

      // 4. 关键计算：胶囊按钮与状态栏的间距（上下对称，保证导航栏美观）
      const menuGap = Math.max(menuButtonInfo.top - statusBarHeight, 0);
      // 导航栏底部与胶囊底部的间距，和顶部间距保持一致（对称布局）
      this.globalData.menuBottom = menuGap;

      // 5. 关键计算：导航栏总高度（状态栏高度 + 胶囊上下间距*2 + 胶囊高度）
      // 该高度适配所有机型，刘海屏会自动包含刘海区域，非刘海屏正常显示
      this.globalData.navBarHeight = statusBarHeight + menuGap * 2 + menuButtonInfo.height;

      console.log('导航栏适配数据', {
        状态栏高度: this.globalData.statusBarHeight,
        导航栏总高度: this.globalData.navBarHeight,
        胶囊顶部距离: this.globalData.menuTop,
        胶囊高度: this.globalData.menuHeight,
        胶囊宽度: this.globalData.menuWidth,
        胶囊右侧间距: this.globalData.menuRight,
        胶囊底部间距: this.globalData.menuBottom
      });

    } catch (error) {
      // 异常处理：如果获取信息失败，给出默认值（防止页面布局错乱）
      console.error("计算导航栏尺寸失败：", error);
      this.globalData.statusBarHeight = 20;
      this.globalData.navBarHeight = 44 + 20;
      this.globalData.menuRight = 10;
      this.globalData.menuBottom = 8;
      this.globalData.menuHeight = 32;
    }
  }
})