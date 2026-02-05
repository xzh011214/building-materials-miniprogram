// index.js
Page({
  data: {
    // 导航栏是否透明，滚动超过阈值后变为不透明
    transparent: true,
    // hero 区域高度（px），用于判断吸顶阈值
    heroHeight: 230,
    heroImage: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1',
    banners: [
      'https://imgs.699pic.com/images/500/444/063.jpg!list2x.v1',
      '	https://imgs.699pic.com/images/401/927/871.jpg!list2x.v1',
      'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1'
    ],
    categories: [
      { id: 1, name: '瓷砖地板', icon: '/images/icon/建材.svg' },
      { id: 2, name: '墙面涂料', icon: '/images/icon/建材.svg' },
      { id: 3, name: '厨卫五金', icon: '/images/icon/建材.svg' },
      { id: 4, name: '灯具照明', icon: '/images/icon/建材.svg' },
      { id: 5, name: '门窗型材', icon: '/images/icon/建材.svg' },
      { id: 6, name: '管材管件', icon: '/images/icon/建材.svg' },
      { id: 7, name: '辅料工具', icon: '/images/icon/建材.svg' },
      { id: 8, name: '全屋定制', icon: '/images/icon/建材.svg' }
    ],
    hotProducts: [
      { id: 201, name: '进口大理石瓷砖', price: 299, sold: '2.3k', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 202, name: '极简智能照明灯', price: 588, sold: '1.1k', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 203, name: '环保内墙漆', price: 1280, sold: '980', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 204, name: '舒适木纹地板', price: 159, sold: '1.2k', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 205, name: '节能LED面板灯', price: 79, sold: '3.4k', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 206, name: '不锈钢淋浴花洒', price: 249, sold: '980', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 207, name: '防水涂料套装', price: 399, sold: '720', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 208, name: '工业风吸顶灯', price: 199, sold: '860', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 209, name: '高强度门窗五金', price: 129, sold: '640', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 210, name: '高效排风扇', price: 189, sold: '510', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 211, name: '抗污瓷砖清洁剂', price: 49, sold: '2.0k', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 212, name: '多功能电动工具', price: 699, sold: '430', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 213, name: '硅藻泥环保壁材', price: 420, sold: '310', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 214, name: '室外防滑地砖', price: 78, sold: '1.1k', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' },
      { id: 215, name: '高密度隔热板', price: 260, sold: '220', image: 'https://imgs.699pic.com/images/500/413/982.jpg!seo.v1' }
    ]
  },
  onLoad() {},
  onPageScroll(e) {
    const scrollTop = e.scrollTop || 0;
    // 滚动超过少量距离即变为不透明，避免看到下层内容
    const shouldBeTransparent = scrollTop < 10;
    if (shouldBeTransparent !== this.data.transparent) {
      this.setData({ transparent: shouldBeTransparent });
    }
  },
  goSearch() {
    wx.showToast({ title: '功能开发中', icon: 'none' });
  }
})
