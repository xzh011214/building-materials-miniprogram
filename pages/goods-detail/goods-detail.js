// pages/goods-detail/goods-detail.js
Page({
  data: {
    currentIndex: 0,
    showSpecPopup: false,
    showParamPopup: false,
    showSharePopup: false,
    selectedSpec: '瓷砖 600x600 / 1箱',
    quantity: 1,
    collected: false,
    paramPreview: '',
    shareOptions: [
      { name: '微信好友', className: 'wechat' },
      { name: '朋友圈', className: 'moments' },
      { name: '保存分享图', className: 'poster' }
    ],
    product: {
      name: '岩板瓷砖 750x1500mm｜大板通铺，耐磨防滑',
      price: 728.0,
      originalPrice: 880.0,
      sold: 1420,
      rating: 4.9,
      comments: 238,
      stock: 120,
      thumb: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=slab%20tile%20package%2C%20studio%20shot%2C%20clean%20background&image_size=square',
      images: [
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=slab%20tile%20living%20room%2C%20modern%20interior&image_size=landscape_4_3',
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=large%20format%20tile%20texture%2C%20neutral%20tone&image_size=landscape_4_3',
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tile%20detail%20closeup%2C%20premium%20look&image_size=landscape_4_3'
      ],
      specs: ['瓷砖 600x600 / 1箱', '瓷砖 750x1500 / 1箱', '配套踢脚线 1箱'],
      services: ['正品保障', '可送全国', '支持退换', '施工指导'],
      params: [
        { name: '品牌', value: '东鹏瓷砖' },
        { name: '产地', value: '广东佛山' },
        { name: '适用空间', value: '客厅/餐厅/走廊' },
        { name: '规格', value: '750x1500mm' },
        { name: '表面工艺', value: '岩板亮面' },
        { name: '吸水率', value: '≤0.1%' },
        { name: '包装', value: '2片/箱' }
      ],
      detailImages: [
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tile%20showcase%20layout%2C%20modern%20interior&image_size=landscape_4_3',
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tile%20texture%20macro%2C%20premium%20quality&image_size=landscape_4_3',
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tile%20color%20palette%2C%20minimal%20style&image_size=landscape_4_3'
      ]
    }
  },
  onLoad() {
    this.updateParamPreview();
  },
  onSwiperChange(event) {
    this.setData({ currentIndex: event.detail.current });
  },
  updateParamPreview() {
    const preview = this.data.product.params
      .slice(0, 2)
      .map((item) => item.value)
      .join(' · ');
    this.setData({ paramPreview: preview });
  },
  openSpecPopup() {
    this.setData({ showSpecPopup: true });
  },
  closeSpecPopup() {
    this.setData({ showSpecPopup: false });
  },
  openParamPopup() {
    this.setData({ showParamPopup: true });
  },
  closeParamPopup() {
    this.setData({ showParamPopup: false });
  },
  openSharePopup() {
    this.setData({ showSharePopup: true });
  },
  closeSharePopup() {
    this.setData({ showSharePopup: false });
  },
  selectSpec(event) {
    const spec = event.currentTarget.dataset.spec;
    this.setData({ selectedSpec: spec });
  },
  decreaseQty() {
    const next = Math.max(1, this.data.quantity - 1);
    this.setData({ quantity: next });
  },
  increaseQty() {
    this.setData({ quantity: this.data.quantity + 1 });
  },
  addToCart() {
    wx.showToast({ title: '已加入购物车', icon: 'none' });
    this.closeSpecPopup();
  },
  buyNow() {
    wx.showToast({ title: '进入结算', icon: 'none' });
    this.closeSpecPopup();
  },
  goService() {
    wx.showToast({ title: '联系客服', icon: 'none' });
  },
  goCart() {
    wx.switchTab({ url: '/pages/cart/cart' });
  },
  toggleCollect() {
    this.setData({ collected: !this.data.collected });
  },
  shareAction(event) {
    const name = event.currentTarget.dataset.name;
    wx.showToast({ title: `已选择${name}`, icon: 'none' });
    this.closeSharePopup();
  }
});