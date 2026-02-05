// category.js
Page({
  data: {
    // 分类数据
    categories: [
      '瓷砖地板', '墙面涂料', '厨卫五金', '灯具照明', '门窗型材', '管材管件', '辅料工具', '全屋定制'
    ],
    // 产品数据
    products: [
      { name: '瓷砖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ceramic%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
      { name: '地板', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wooden%20floor%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
      { name: '马赛克', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mosaic%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
      { name: '仿古砖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=antique%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
      { name: '大理石', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=marble%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
      { name: '防滑砖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anti-slip%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' }
    ]
  },
  onLoad() {
  },
  // 事件处理函数
  goBack() {
    wx.navigateBack();
  },
  goSearch() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  }
})