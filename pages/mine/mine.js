// mine.js
Page({
  data: {
    // 用户信息
    userInfo: {
      name: '建材优选用户',
      id: '123456789',
      level: '普通会员',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%2C%20professional%2C%20minimalist%2C%20blue%20background&image_size=square'
    }
  },
  onLoad() {
  },
  // 事件处理函数
  goBack() {
    wx.navigateBack();
  },
  // 查看全部订单
  viewAllOrders() {
    wx.navigateTo({ url: '/pages/order/order' });
  },
  // 查看待付款订单
  viewPendingOrders() {
    wx.navigateTo({ url: '/pages/order/order?status=pending' });
  },
  // 查看待发货订单
  viewProcessingOrders() {
    wx.navigateTo({ url: '/pages/order/order?status=processing' });
  },
  // 查看待收货订单
  viewShippingOrders() {
    wx.navigateTo({ url: '/pages/order/order?status=shipping' });
  },
  // 查看待评价订单
  viewReviewOrders() {
    wx.navigateTo({ url: '/pages/order/order?status=review' });
  },
  // 查看退款/售后订单
  viewRefundOrders() {
    wx.navigateTo({ url: '/pages/order/order?status=refund' });
  },
  // 退出登录
  logout() {
    wx.showModal({
      title: '退出登录',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已退出登录', icon: 'success' });
        }
      }
    });
  }
})