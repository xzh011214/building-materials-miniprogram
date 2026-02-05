// cart.js
Page({
  data: {
    // 购物车商品数据
    cartItems: [
      { brand: '诺贝尔', name: '诺贝尔瓷砖 800x800mm 通体大理石', spec: '米白色', price: 128, quantity: 2, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ceramic%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
      { brand: '多乐士', name: '多乐士墙面漆 5L 竹炭净味', spec: '白色', price: 299, quantity: 1, image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wall%20paint%20can%2C%20high%20quality%2C%20modern%20style&image_size=square' }
    ],
    // 合计价格和数量
    totalPrice: 555,
    totalQuantity: 3
  },
  onLoad() {
  },
  // 事件处理函数
  goBack() {
    wx.navigateBack();
  },
  // 增加商品数量
  increaseQuantity(e) {
    const index = e.currentTarget.dataset.index;
    const cartItems = [...this.data.cartItems];
    cartItems[index].quantity++;
    this.updateTotal(cartItems);
  },
  // 减少商品数量
  decreaseQuantity(e) {
    const index = e.currentTarget.dataset.index;
    const cartItems = [...this.data.cartItems];
    if (cartItems[index].quantity > 1) {
      cartItems[index].quantity--;
      this.updateTotal(cartItems);
    }
  },
  // 更新合计价格和数量
  updateTotal(cartItems) {
    let totalPrice = 0;
    let totalQuantity = 0;
    cartItems.forEach(item => {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    });
    this.setData({
      cartItems,
      totalPrice,
      totalQuantity
    });
  },
  // 结算
  checkout() {
    wx.navigateTo({ url: '/pages/order/order' });
  }
})