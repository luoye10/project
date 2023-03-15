<template>
  <div class="item">
    <div class="title">合规专题</div>
    <div class="content">
      <ul class="lists">
        <li class="list" v-for="item in itemList" :key="item.message">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [
        '互联网行业数据集XXX于2023年1月3日进入确权为VVV机构使用权',
        '金融行业数据集XXX于2023年1月3日进入确权为VVV机构使用权',
        '能源行业数据集XXX于2023年1月3日进入确权为VVV机构使用权',
        '医药行业数据集XXX于2023年1月3日进入确权为VVV机构使用权',
        '房地产行业数据集XXX于2023年1月3日进入确权为VVV机构使用权',
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.item {
  width: 700px;
  height: 294px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  margin-left: 20px;
  .title {
    width: 700px;
    height: 64px;
    background: #f7f8fa;
    border-radius: 4px 4px 0px 0px;
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    padding: 20px;
  }
  .lists {
    display: flex;
    flex-direction: column;
    .list {
      height: 22px;
      color: #595959;
      font-size: 14px;
      margin: 0 20px;
      margin-top: 20px;
    }
  }
}
</style>
