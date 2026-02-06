<!-- 使用组件的方式 -->
<!-- 分类页（只显示返回按钮和页面标题） -->
<navbar 
  isHome="{{false}}" 
  pageTitle="分类" 
  transparent="{{true}}" 
  lightText="{{false}}" 
  showHomeSearch="{{false}}"
  bind:search="goSearch">
</navbar>

<!-- 分类页（显示logo+标题） -->
<navbar 
  isHome="{{false}}" 
  pageTitle="分类" 
  transparent="{{true}}" 
  lightText="{{false}}" 
  showHomeSearch="{{true}}"
  homeTitle="建筑优选"
  homeLogoUrl="/images/icon/建材.svg" 
  bind:search="goSearch">
</navbar>

<!-- 首页（显示logo+搜索框） -->
<navbar 
  isHome="{{true}}" 
  pageTitle="" 
  transparent="{{true}}" 
  lightText="{{true}}" 
  showHomeSearch="{{true}}" 
  homeTitle="建筑优选" 
  homeSearchPlaceholder="搜索瓷砖、涂料、五金"
  homeLogoUrl="/images/icon/建材.svg" 
  bind:search="goSearch">
</navbar>

<!-- 首页（只显示logo+标题） -->
<navbar 
  isHome="{{true}}" 
  pageTitle="" 
  transparent="{{true}}" 
  lightText="{{true}}" 
  showHomeSearch="{{false}}" 
  homeTitle="建筑优选"
  homeLogoUrl="/images/icon/建材.svg" 
  bind:search="goSearch">
</navbar>