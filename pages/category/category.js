// category.js
Page({
  data: {
    categories: [
      {
        name: '瓷砖地板',
        bannerText: '精选地面好物',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=building%20materials%20category%20banner%2C%20professional%20style%2C%20clean%20design&image_size=landscape_16_9',
        products: [
          { name: '瓷砖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ceramic%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
          { name: '地板', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wooden%20floor%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
          { name: '马赛克', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mosaic%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
          { name: '仿古砖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=antique%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
          { name: '大理石', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=marble%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' },
          { name: '防滑砖', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anti-slip%20tile%20product%2C%20high%20quality%2C%20modern%20style&image_size=square' }
        ]
      },
      {
        name: '墙面涂料',
        bannerText: '墙面焕新灵感',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interior%20paint%20banner%2C%20clean%20modern%20style&image_size=landscape_16_9',
        products: [
          { name: '净味乳胶漆', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=paint%20bucket%20product%2C%20clean%20style&image_size=square' },
          { name: '艺术涂料', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=decorative%20paint%20texture%2C%20premium%20style&image_size=square' },
          { name: '防霉底漆', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=primer%20paint%20product%2C%20clean%20modern%20style&image_size=square' },
          { name: '防水涂料', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=waterproof%20paint%20product%2C%20clean%20style&image_size=square' }
        ]
      },
      {
        name: '厨卫五金',
        bannerText: '厨房卫浴精选',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kitchen%20bath%20hardware%20banner%2C%20minimal%20style&image_size=landscape_16_9',
        products: [
          { name: '水龙头', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=faucet%20product%2C%20modern%20chrome%20style&image_size=square' },
          { name: '花洒套装', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shower%20set%20product%2C%20clean%20style&image_size=square' },
          { name: '地漏', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=floor%20drain%20product%2C%20modern%20style&image_size=square' },
          { name: '五金挂件', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bathroom%20hardware%20set%2C%20minimal%20style&image_size=square' }
        ]
      },
      {
        name: '灯具照明',
        bannerText: '点亮家的温度',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lighting%20banner%2C%20warm%20minimal%20style&image_size=landscape_16_9',
        products: [
          { name: '吊灯', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pendant%20lamp%20product%2C%20modern%20style&image_size=square' },
          { name: '吸顶灯', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ceiling%20light%20product%2C%20modern%20style&image_size=square' },
          { name: '筒射灯', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=downlight%20product%2C%20minimal%20style&image_size=square' },
          { name: '氛围灯带', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=led%20strip%20light%20product%2C%20modern%20style&image_size=square' }
        ]
      },
      {
        name: '门窗型材',
        bannerText: '门窗系统精选',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=door%20window%20profile%20banner%2C%20clean%20style&image_size=landscape_16_9',
        products: [
          { name: '断桥铝窗', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aluminum%20window%20product%2C%20modern%20style&image_size=square' },
          { name: '实木门', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wooden%20door%20product%2C%20clean%20style&image_size=square' },
          { name: '推拉门', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sliding%20door%20product%2C%20modern%20style&image_size=square' },
          { name: '防盗门', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=security%20door%20product%2C%20modern%20style&image_size=square' }
        ]
      },
      {
        name: '管材管件',
        bannerText: '水电管材专区',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pipe%20materials%20banner%2C%20clean%20industrial%20style&image_size=landscape_16_9',
        products: [
          { name: 'PPR管', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PPR%20pipe%20product%2C%20clean%20style&image_size=square' },
          { name: 'PVC管', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PVC%20pipe%20product%2C%20clean%20style&image_size=square' },
          { name: '弯头接头', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pipe%20fittings%20product%2C%20clean%20style&image_size=square' },
          { name: '阀门', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=valve%20product%2C%20industrial%20style&image_size=square' }
        ]
      },
      {
        name: '辅料工具',
        bannerText: '施工辅材工具',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=construction%20tools%20banner%2C%20clean%20style&image_size=landscape_16_9',
        products: [
          { name: '瓷砖胶', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tile%20adhesive%20product%2C%20clean%20style&image_size=square' },
          { name: '防水胶', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=waterproof%20sealant%20product%2C%20clean%20style&image_size=square' },
          { name: '测量工具', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=measurement%20tools%20product%2C%20clean%20style&image_size=square' },
          { name: '电动工具', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=power%20tool%20product%2C%20modern%20style&image_size=square' }
        ]
      },
      {
        name: '全屋定制',
        bannerText: '定制空间方案',
        bannerImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=custom%20home%20interior%20banner%2C%20clean%20style&image_size=landscape_16_9',
        products: [
          { name: '衣柜', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=wardrobe%20product%2C%20modern%20style&image_size=square' },
          { name: '橱柜', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kitchen%20cabinet%20product%2C%20modern%20style&image_size=square' },
          { name: '书柜', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bookshelf%20product%2C%20minimal%20style&image_size=square' },
          { name: '电视柜', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tv%20cabinet%20product%2C%20modern%20style&image_size=square' }
        ]
      }
    ],
    activeIndex: 0,
    activeCategory: null
  },
  onLoad() {
    this.setActiveCategory(0);
  },
  // 事件处理函数
  goBack() {
    wx.navigateBack();
  },
  selectCategory(event) {
    const index = Number(event.currentTarget.dataset.index || 0);
    if (index === this.data.activeIndex) return;
    this.setActiveCategory(index);
  },
  setActiveCategory(index) {
    const category = this.data.categories[index] || null;
    this.setData({
      activeIndex: index,
      activeCategory: category
    });
  },
  goSearch() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  }
})