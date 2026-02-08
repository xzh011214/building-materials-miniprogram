Page({
  data: {
    categoryName: '瓷砖',
    sortType: 'comprehensive',
    priceSort: 'asc',
    selectedBrand: '全部',
    pendingBrand: '全部',
    showBrandPanel: false,
    brandOptions: [],
    allGoods: [],
    filteredList: []
  },
  onLoad(options) {
    const categoryName = decodeURIComponent(options.category || '瓷砖');
    const goodsMap = {
      瓷砖: [
        {
          id: 1,
          name: '亮面瓷砖 600x600',
          price: 28.8,
          sales: 1320,
          brand: '东鹏',
          tags: ['耐磨', '易清洁'],
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ceramic%20tile%20600x600%2C%20clean%20background&image_size=square'
        },
        {
          id: 2,
          name: '哑光瓷砖 750x1500',
          price: 68.0,
          sales: 860,
          brand: '马可波罗',
          tags: ['大板', '防滑'],
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=matte%20tile%20750x1500%2C%20premium%20look&image_size=square'
        },
        {
          id: 3,
          name: '厨房墙砖 300x600',
          price: 18.5,
          sales: 1640,
          brand: '诺贝尔',
          tags: ['防油污', '易打理'],
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kitchen%20wall%20tile%20300x600%2C%20clean%20background&image_size=square'
        },
        {
          id: 4,
          name: '仿古砖 600x600',
          price: 36.0,
          sales: 720,
          brand: '冠珠',
          tags: ['复古', '耐磨'],
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=antique%20tile%20600x600%2C%20warm%20tone&image_size=square'
        },
        {
          id: 5,
          name: '卫生间防滑砖 300x300',
          price: 16.9,
          sales: 2110,
          brand: '蒙娜丽莎',
          tags: ['防滑', '耐潮'],
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=anti-slip%20bathroom%20tile%20300x300%2C%20clean%20background&image_size=square'
        },
        {
          id: 6,
          name: '大理石纹瓷砖 800x800',
          price: 58.0,
          sales: 940,
          brand: '东鹏',
          tags: ['大气', '通铺'],
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=marble%20look%20tile%20800x800%2C%20premium%20look&image_size=square'
        }
      ],
      地板: [
        {
          id: 7,
          name: '强化复合地板 12mm',
          price: 98.0,
          sales: 530,
          brand: '圣象',
          tags: ['耐磨', '静音'],
          image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=laminate%20flooring%20plank%2C%20clean%20background&image_size=square'
        }
      ]
    };

    const allGoods = goodsMap[categoryName] || goodsMap.瓷砖;
    const brandOptions = ['全部', ...new Set(allGoods.map((item) => item.brand))];

    this.setData(
      {
        categoryName,
        allGoods,
        brandOptions,
        pendingBrand: this.data.selectedBrand
      },
      () => {
        this.applyFilters();
      }
    );
  },
  onFilterTap(event) {
    const type = event.currentTarget.dataset.type;
    if (type === 'price') {
      const nextSort = this.data.priceSort === 'asc' ? 'desc' : 'asc';
      this.setData({ sortType: 'price', priceSort: nextSort }, () => {
        this.applyFilters();
      });
      return;
    }

    this.setData({ sortType: type }, () => {
      this.applyFilters();
    });
  },
  openBrandPanel() {
    this.setData({
      showBrandPanel: true,
      pendingBrand: this.data.selectedBrand
    });
  },
  closeBrandPanel() {
    this.setData({ showBrandPanel: false });
  },
  selectBrand(event) {
    const brand = event.currentTarget.dataset.brand;
    this.setData({ pendingBrand: brand });
  },
  resetBrand() {
    this.setData({ pendingBrand: '全部' });
  },
  confirmBrand() {
    this.setData(
      {
        selectedBrand: this.data.pendingBrand,
        showBrandPanel: false
      },
      () => {
        this.applyFilters();
      }
    );
  },
  applyFilters() {
    const { allGoods, sortType, priceSort, selectedBrand } = this.data;
    let list = allGoods.map((item, index) => ({ ...item, orderIndex: index }));

    if (selectedBrand !== '全部') {
      list = list.filter((item) => item.brand === selectedBrand);
    }

    if (sortType === 'sales') {
      list.sort((a, b) => b.sales - a.sales);
    } else if (sortType === 'price') {
      list.sort((a, b) => (priceSort === 'asc' ? a.price - b.price : b.price - a.price));
    } else {
      list.sort((a, b) => a.orderIndex - b.orderIndex);
    }

    this.setData({ filteredList: list });
  },
  goGoodsDetail(event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/goods-detail/goods-detail?id=${id}` });
  }
});
