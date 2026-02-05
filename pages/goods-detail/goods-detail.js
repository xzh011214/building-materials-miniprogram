// pages/goods-detail/goods-detail.js
Page({
  data: {
    product: {
      name: '全效环保内墙漆 - 抗污耐擦洗，持久亮新',
      price: 1280,
      originalPrice: 1580,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=eco%20paint%20can%2C%20studio%20shot%2C%20clean%20background&image_size=square',
      tags: ['正品保证', '免费安装', '3年质保'],
      params: [
        { name: '品牌', value: '立邦' },
        { name: '产地', value: '中国' },
        { name: '适用场景', value: '客厅/卧室/儿童房' }
      ]
    }
  },
  onLoad() {}
})