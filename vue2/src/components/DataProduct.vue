<template>
  <div class="product">
    <div class="title">
      <span class="line"></span>
      <span class="text">数据产品</span>
      <span class="line"></span>
    </div>
    <div class="content">
      <ul class="itemList">
        <li class="item" v-for="item in items" :key="item.message">
          <img :src="require('@/assets/' + item.url + '.png')" />
          <div class="name">{{ item.name }}</div>
          <div class="keyword">{{ item.keyword }}</div>
          <div class="word">{{ item.more }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          url: 'banking',
          name: '智慧金融',
          keyword: '三要素核验｜黑名单查询｜精准营销｜智能风控',
          more: '查看更多',
        },
        {
          url: 'health',
          name: '智慧医疗',
          keyword: '宏基因组分析｜传染病动力学模型｜单细胞分析',
          more: '查看更多',
        },
        {
          url: 'office',
          name: '智慧政务',
          keyword: '数智防疫｜物联传感数据分析｜智慧电力',
          more: '查看更多',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.product {
  width: 1200px;
  height: 510px;
  background: #ffffff;
  margin: 20px auto;
  .title {
    text-align: center;
    vertical-align: middle;
    margin: 60px 0;
    span {
      display: inline-block;
      text-align: center;
      vertical-align: middle;
    }
    .line {
      width: 30px;
      height: 2px;
      background: #dcdfe6;
      margin: 0 20px;
    }
    .text {
      font-size: 28px;
      font-weight: 500;
      color: #262626;
    }
  }
  .itemList {
    display: flex;
    .item {
      flex: 1;
      background: #f7f8fa;
      margin: 10px;
      text-align: center;
      img {
        border: 1px dashed #444;
        margin: 10px;
      }
      .name {
        font-size: 18px;
        font-weight: 500;
        color: #262626;
      }
      .keyword {
        width: 154px;
        height: 44px;
        font-size: 14px;
        color: #262626;
        margin: 10px auto;
      }
      .word {
        width: 112px;
        height: 40px;
        background: #edfbfa;
        border-radius: 4px;
        border: 1px solid #06b79f;
        color: #06b79f;
        font-size: 14px;
        line-height: 40px;
        margin: 20px auto;
      }
    }
  }
}
</style>
