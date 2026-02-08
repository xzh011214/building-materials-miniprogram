import {Message} from "tdesign-miniprogram";

Page({
    data:{
        agreeLicense: false,
        countryCodePopupVisible:false,
        loginStatus: 0,
        countryCode: 'cn+86',
        phoneNumber: '',
        showErrorMessage: false,
       requiredLength: 11, // 默认中国大陆的手机号长度
       maxPhoneNumberLength: 11, // 默认中国大陆的手机号最大长度
       phoneNumberLengths: {
        'cn+86': 11, // 中国大陆
        'mo+853': 8,  // 澳门
        'hk+852': 8,  // 香港
        'tw+886': 9   // 台湾
      },
      showMoreOptions: true,
        vCodeValue: '',
        isVFocus:'',
        top: 0,
        left: 0,
        height: 0,
        navBarHeight: 0,
        safeAreaHeight: 0,
        refreshTimer:null,
        refreshSeconds:null,
        isOpen: false,
    },
    
    // onShow: function() {
    //     wx.getWindowInfo({
    //         success: (windowRes) => {
    //           console.log('Window Info:', windowRes);
    //           const menuInfo = wx.getMenuButtonBoundingClientRect();
    //           console.log('Menu Button Info:', menuInfo);
    //           const ratio = 750 / windowRes.windowWidth;
    //           // 计算导航栏的高度和其他参数
    //           this.setData({
    //             top: menuInfo.top * ratio,
    //             left: menuInfo.left * ratio,
    //             height: menuInfo.height * ratio,
    //           });
    //           // 设置全局变量
    //           getApp().globalData.navBarHeight = this.data.height + this.data.top + 20;
    //           getApp().globalData.safeAreaHeight = windowRes.screenHeight - windowRes.safeArea.bottom;
    //           console.log('Calculated Data:', this.data);
    //           console.log('Global Data:', getApp().globalData);
    //         },
    //         fail: (err) => {
    //           console.error('获取窗口信息失败', err);
    //         }
    //       });
    //   },
     
    onBack: function() {
        // 使用 wx.reLaunch 重新加载当前页面
        wx.reLaunch({
          url: '/pages/index/index' // 替换为当前页面的路径
        });
      },

    showVCode: function (e) {
        const that = this;
        that.setData({
            vCodeValue: e.detail.value,
        });
        if (this.data.vCodeValue.length === 6) {
            this.setData({
                isVFocus: false,
            });
        }
    },

    tapFn: function () {
        this.setData({
            isVFocus: true,
        });
    },

    checkLicense: function () {
        // 检查 this.data.agreeLicense 是否为 false
        if (!this.data.agreeLicense) {
            // 如果用户没有同意协议
            Message.error({
                context: this,          // 设置消息的上下文，通常是当前页面实例
                offset: [120, 70],       // 设置消息弹出的位置偏移量
                marquee: { loop: 0 },    // 设置滚动条属性，loop: 0 表示不循环
                duration: 2000,          // 设置消息显示的持续时间（毫秒）
                content: '請先同意用戶協議', // 显示的消息内容
            });
            // 返回 false，表示检查未通过
            return false;
        }
        // 如果用户已经同意了协议
        return true; // 返回 true，表示检查通过
    },

    changeLoginMode(e) {
        if (this.checkLicense()) {
            this.setData({
                loginStatus: e.currentTarget.dataset.status,
                showMoreOptions: e.currentTarget.dataset.status === 1 ? false : true // 隐藏更多登录选项
            });
        }
    },
 
    //返回按钮不需要同意用户协议 
    changeLoginMode1(e) {
            this.setData({
                loginStatus: e.currentTarget.dataset.status,
                showMoreOptions: true // 重新显示更多登录选项
            });
    },

//隐私政策 用户协议方法
    getAgreeLicense() {
        this.setData({
            agreeLicense: !this.data.agreeLicense,
        });
    },

//显示国家地区弹出框
    changeCountryCode() {
        this.setData({
            countryCodePopupVisible: true
        })
    },
    //选择区号
    onChangeCountryCode(e) {
        const selectedValue = e.detail.value;
        this.setData({
          countryCode: selectedValue,
          // 选择完区号 自动关闭弹出框
          countryCodePopupVisible: false
        });
      },

// 处理弹出框可见性变化的事件
      onCountryCodePopupVisibleChange(e) {
        this.setData({
            countryCodePopupVisible: e.detail.visible,
        });
    },

  // 输入手机号
  onChangePhoneNumber: function (e) {
    let value = e.detail.value;
    // 根据选择的国家区号决定是否截断
    const maxPhoneNumberLength = this.data.phoneNumberLengths[this.data.countryCode];
    if (value.length > maxPhoneNumberLength) {
      value = value.slice(0, maxPhoneNumberLength);
    }
    this.setData({
      phoneNumber: value
    });
    // 显示错误提示
    if (value.length !== this.data.requiredLength) {
      this.setData({
        showErrorMessage: true
      });
    } else {
      this.setData({
        showErrorMessage: false
      });
    }
  },

// 生成随机验证码
generateVerificationCode: function () {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    return code;
  },

 // 模拟后端发送验证码
 getActivityCode: function () {
    if (this.data.refreshTimer !== null) {
      wx.showToast({
        title: '请稍后再试',
        icon: 'error',
        duration: 1000
      }).then();
      return;
    }

    if (!this.validatePhoneNumber()) {
      wx.showToast({
        title: '号码格式不正确',
        icon: 'error',
        duration: 1000
      }).then();
      return;
    }

    wx.showLoading({
      title: '发送中...',
    }).then(() => {
      const that = this;
      // 模拟后端请求
      setTimeout(() => {
        // 模拟后端响应
        const verificationCode = that.generateVerificationCode();
        console.log('验证码:', verificationCode); // 用于调试
        // 模拟成功响应
        that.setData({
        generatedVerificationCode: verificationCode,
          loginStatus: 2
        });
        wx.hideLoading().then(() => {
          wx.showToast({
            title: '发送成功',
            icon: 'success',
            duration: 1000
          }).then(() => {
            that.startRefreshTimer();
          });
        });
      }, 1000); // 模拟请求延迟1秒
    });
  },

 // 验证手机号码格式
 validatePhoneNumber: function () {
    const value = this.data.phoneNumber;
    const requiredLength = this.data.phoneNumberLengths[this.data.countryCode];
    // 验证手机号码长度是否符合当前国家的要求
    if (requiredLength === undefined || value.length !== requiredLength) {
      return false; // 长度不符合要求
    }
    // 验证手机号码是否为空
    if (value.trim() === '') {
      return false; // 手机号码为空
    }
    // 验证手机号码是否由相同的数字组成1111111111222222333333
    const allSameDigits = new Set(value).size === 1;
    if (allSameDigits) {
      return false; 
    }
    // 根据地区验证手机号码的开头
    switch (this.data.countryCode) {
      case 'cn+86':
        // 中国大陆
        if (!/^1[3-8]\d{9}$/.test(value)) {
          return false; // 不是有效的中国大陆手机号码
        }
        break;
      case 'mo+853':
        // 澳门
        if (!/^(6[2-8]|9[1-9])\d{4,6}$/.test(value)) {
          return false; // 不是有效的澳门手机号码
        }
        break;
      case 'hk+852':
        // 香港
        if (!/^(5|6|9)\d{7}$/.test(value)) {
          return false; // 不是有效的香港手机号码
        }
        break;
      case 'tw+886':
        // 台湾
        if (!/^09\d{7}$/.test(value)) {
          return false; // 不是有效的台湾手机号码
        }
        break;
      default:
        break;
    }
    return true; // 验证通过
  },

  // 重新发送验证码
  startRefreshTimer: function () {
    if (this.data.refreshTimer) return;
    this.setData({ refreshSeconds: 60 });
    const timer = setInterval(() => {
      if (this.data.refreshSeconds > 0) {
        this.setData({ refreshSeconds: this.data.refreshSeconds - 1 });
      } else {
        clearInterval(timer);
        this.setData({ refreshTimer: null, refreshSeconds: 60 });
      }
    }, 1000);
    this.setData({ refreshTimer: timer });
  },
  // 页面卸载时清除定时器
  onUnload: function () {
    if (this.data.refreshTimer) {
      clearInterval(this.data.refreshTimer);
    }
  },

  loginByPhoneNumberActiveCode: function () {
    wx.showLoading({
        title: '登陆中...',
    });

    setTimeout(() => {
        const enteredCode = this.data.vCodeValue;
        const expectedCode = this.data.generatedVerificationCode;

        if (enteredCode === expectedCode) {
            // 模拟成功响应
            this.handleLoginSuccess();
        } else {
            // 模拟失败响应
            this.handleLoginFailure();
        }
    }, 1000); // 模拟网络延迟
},

handleLoginSuccess: function () {
    wx.hideLoading();
    wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 1000
    });

    const userInfo = {
      token: 'mock-token-12345',
      phoneNumber: this.data.phoneNumber || '',
      roles: ['user'],
      nickname: '张三',
      description: '这是描述信息',
      avatar: 'https://example.com/avatar.jpg',
      username: 'zhangsan',
      uid: 'user-12345',
      level: '普通会员'
    };

    wx.setStorageSync('token', userInfo.token);
    wx.setStorageSync('phoneNumber', userInfo.phoneNumber);
    wx.setStorageSync('roles', userInfo.roles);
    wx.setStorageSync('nickname', userInfo.nickname);
    wx.setStorageSync('description', userInfo.description);
    wx.setStorageSync('avatar', userInfo.avatar);
    wx.setStorageSync('username', userInfo.username);
    wx.setStorageSync('uid', userInfo.uid);
    wx.setStorageSync('level', userInfo.level);

    wx.setStorageSync('loginUser', {
      name: userInfo.nickname || '建材优选用户',
      phone: userInfo.phoneNumber || '未绑定手机号',
      level: userInfo.level,
      avatar: userInfo.avatar
    });
    wx.setStorageSync('isLoggedIn', true);

    wx.navigateBack();

    if (this.data.refreshTimer != null) {
        clearInterval(this.data.refreshTimer);
        this.setData({
            refreshTimer: null,
            refreshSeconds: 60
        });
    }
},
  getPhoneNumber(event) {
    if (!this.checkLicense()) return;
    const phone = (event.detail && event.detail.phoneNumber) || this.data.phoneNumber || '';
    this.setData({ phoneNumber: phone });
    this.loginWithWeChat();
  },

  loginWithWeChat() {
    wx.showLoading({ title: '微信登录中...' });
    wx.login({
      success: (res) => {
        const code = res.code || '';
        const mockToken = code ? `mock-token-${code}` : 'mock-token-12345';
        const userInfo = {
          token: mockToken,
          phoneNumber: this.data.phoneNumber || '',
          roles: ['user'],
          nickname: '微信用户',
          description: '微信登录模拟数据',
          avatar: 'https://example.com/avatar.jpg',
          username: 'wx_user',
          uid: 'wx-user-12345',
          level: '普通会员'
        };

        wx.setStorageSync('token', userInfo.token);
        wx.setStorageSync('phoneNumber', userInfo.phoneNumber);
        wx.setStorageSync('roles', userInfo.roles);
        wx.setStorageSync('nickname', userInfo.nickname);
        wx.setStorageSync('description', userInfo.description);
        wx.setStorageSync('avatar', userInfo.avatar);
        wx.setStorageSync('username', userInfo.username);
        wx.setStorageSync('uid', userInfo.uid);
        wx.setStorageSync('level', userInfo.level);

        wx.setStorageSync('loginUser', {
          name: userInfo.nickname || '建材优选用户',
          phone: userInfo.phoneNumber || '未绑定手机号',
          level: userInfo.level,
          avatar: userInfo.avatar
        });
        wx.setStorageSync('isLoggedIn', true);

        wx.hideLoading();
        wx.showToast({ title: '登录成功', icon: 'success', duration: 1000 });
        wx.navigateBack();
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({ title: '微信登录失败', icon: 'error', duration: 1200 });
      }
    });
  },

handleLoginFailure: function () {
    wx.hideLoading();
    wx.showToast({
        title: '验证码失效或错误',
        icon: 'error',
        duration: 1000
    });
},

















 


  
  
  handleChange(e) {
        this.setData({
          activeValues: e.detail.value,
        });
      },



      onToggle(e) {
        this.setData({
          isOpen: e.detail.open
        });
      },


      handleCustomIconClick() {
        // C登录逻辑
        
      },
      loginWithGoogle() {
        // Google 登录逻辑
      }
})