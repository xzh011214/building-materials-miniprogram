const regionData = [
  {
    province: '北京市',
    citys: [{ city: '北京市', areas: [{ area: '东城区' }, { area: '西城区' }, { area: '朝阳区' }] }]
  },
  {
    province: '天津市',
    citys: [{ city: '天津市', areas: [{ area: '和平区' }, { area: '河西区' }, { area: '南开区' }] }]
  },
  {
    province: '河北省',
    citys: [{ city: '石家庄市', areas: [{ area: '长安区' }, { area: '桥西区' }, { area: '裕华区' }] }]
  }
];

const getProvinces = () => regionData.map((item) => item.province);
const getCities = (provinceIndex) =>
  (regionData[provinceIndex] && regionData[provinceIndex].citys
    ? regionData[provinceIndex].citys
    : []
  ).map((item) => item.city);
const getAreas = (provinceIndex, cityIndex) => {
  const citys = regionData[provinceIndex] && regionData[provinceIndex].citys
    ? regionData[provinceIndex].citys
    : [];
  const areas = citys[cityIndex] && citys[cityIndex].areas ? citys[cityIndex].areas : [];
  return areas.map((item) => item.area);
};

const buildRegionPicker = (provinceIndex = 0, cityIndex = 0, areaIndex = 0) => {
  const provinces = getProvinces();
  const cities = getCities(provinceIndex);
  const areas = getAreas(provinceIndex, cityIndex);
  return {
    provinces,
    cities,
    areas,
    value: [provinceIndex, cityIndex, areaIndex]
  };
};

const findRegionMatch = (text) => {
  if (!text) return null;
  for (let pIndex = 0; pIndex < regionData.length; pIndex += 1) {
    const province = regionData[pIndex].province;
    if (!text.includes(province)) continue;
    const citys = regionData[pIndex].citys || [];
    for (let cIndex = 0; cIndex < citys.length; cIndex += 1) {
      const city = citys[cIndex].city;
      if (!text.includes(city)) continue;
      const areas = citys[cIndex].areas || [];
      for (let aIndex = 0; aIndex < areas.length; aIndex += 1) {
        const area = areas[aIndex].area;
        if (text.includes(area)) {
          return { pIndex, cIndex, aIndex, province, city, area };
        }
      }
      return { pIndex, cIndex, aIndex: 0, province, city, area: '' };
    }
    return { pIndex, cIndex: 0, aIndex: 0, province, city: '', area: '' };
  }
  return null;
};

Page({
  data: {
    name: '',
    phone: '',
    region: '',
    detail: '',
    isDefault: false,
    smartText: '',
    regionPicker: {
      provinces: [],
      cities: [],
      areas: [],
      value: [0, 0, 0]
    }
  },

  onLoad() {
    this.setData({ regionPicker: buildRegionPicker() });
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field;
    this.setData({ [field]: e.detail.value });
  },

  onSmartInput(e) {
    this.setData({ smartText: e.detail.value });
  },

  handleSave() {
    wx.showToast({ title: '已保存', icon: 'success' });
    wx.navigateBack();
  },

  onSwitchChange(e) {
    this.setData({ isDefault: e.detail.value });
  },

  handleClear() {
    this.setData({
      name: '',
      phone: '',
      region: '',
      detail: '',
      smartText: '',
      regionPicker: buildRegionPicker()
    });
  },

  handleSmartFill() {
    const text = (this.data.smartText || '').trim();
    if (!text) {
      wx.showToast({ title: '请先粘贴地址', icon: 'none' });
      return;
    }

    const phoneMatch = text.match(/1[3-9]\d{9}/);
    const phone = phoneMatch ? phoneMatch[0] : '';
    const regionMatch = findRegionMatch(text);

    let name = '';
    if (phone) {
      const beforePhone = text.slice(0, text.indexOf(phone)).replace(/[^\u4e00-\u9fa5a-zA-Z]/g, '');
      name = beforePhone ? beforePhone.slice(0, 4) : '';
    } else {
      const nameMatch = text.match(/[\u4e00-\u9fa5]{2,4}/);
      name = nameMatch ? nameMatch[0] : '';
    }

    let region = '';
    let regionPicker = this.data.regionPicker;
    if (regionMatch) {
      const { pIndex, cIndex, aIndex, province, city, area } = regionMatch;
      region = [province, city, area].filter(Boolean).join(' ');
      regionPicker = buildRegionPicker(pIndex, cIndex, aIndex);
    }

    let detail = text;
    if (name) detail = detail.replace(name, '');
    if (phone) detail = detail.replace(phone, '');
    if (regionMatch) {
      if (regionMatch.province) detail = detail.replace(regionMatch.province, '');
      if (regionMatch.city) detail = detail.replace(regionMatch.city, '');
      if (regionMatch.area) detail = detail.replace(regionMatch.area, '');
    }
    detail = detail.replace(/\s+/g, ' ').trim();

    this.setData({
      name: name || this.data.name,
      phone: phone || this.data.phone,
      region: region || this.data.region,
      detail: detail || this.data.detail,
      regionPicker
    });
    wx.showToast({ title: '识别完成', icon: 'success' });
  },

  onRegionColumnChange(e) {
    const column = e.detail.column;
    const value = e.detail.value;
    const current = this.data.regionPicker.value;
    let provinceIndex = current[0];
    let cityIndex = current[1];
    let areaIndex = current[2];

    if (column === 0) {
      provinceIndex = value;
      cityIndex = 0;
      areaIndex = 0;
    } else if (column === 1) {
      cityIndex = value;
      areaIndex = 0;
    } else if (column === 2) {
      areaIndex = value;
    }

    this.setData({
      regionPicker: buildRegionPicker(provinceIndex, cityIndex, areaIndex)
    });
  },

  onRegionChange(e) {
    const value = e.detail.value;
    const provinces = this.data.regionPicker.provinces;
    const cities = this.data.regionPicker.cities;
    const areas = this.data.regionPicker.areas;
    const province = provinces[value[0]] || '';
    const city = cities[value[1]] || '';
    const area = areas[value[2]] || '';
    const region = [province, city, area].filter(Boolean).join(' ');

    this.setData({
      region,
      regionPicker: { ...this.data.regionPicker, value }
    });
  },

  handleDelete() {
    wx.showToast({ title: '已删除', icon: 'none' });
    wx.navigateBack();
  }
});
