<template>
  <div class="number">
    <ul class="itemList">
      <li class="item" v-for="item in items" :key="item.message">
        <div class="img">
          <img :src="require('@/assets/' + item.url + '.png')" />
        </div>
        <div class="list">
          <div class="num">{{ item.num }}</div>
          <div class="text">{{ item.text }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          url: 'total',
          num: '6,000 万',
          text: '总交易额',
        },
        {
          url: 'busi',
          num: '700 家',
          text: '入驻企业',
        },
        {
          url: 'product',
          num: '1,000 件',
          text: '数据交易产品',
        },
        {
          url: 'data',
          num: '12,000 件',
          text: '数据资源',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.number {
  width: 100%;
  height: 160px;
  background: #ffffff;
  .itemList {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    .item {
      flex: 1;
      margin: 30px 10px;
      box-shadow: 0px 0px 6px 6px rgba(237, 237, 237, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      .img {
        flex: 1;
        margin: 20px;
        img {
          display: inline-block;
          height: 60px;
          border: 1px dashed #444;
        }
      }
      .list {
        flex: 2;
        display: flex;
        flex-direction: column;
        margin-top: -10px;
        color: #262626;
        text-align: left;
        .num {
          flex: 1;
          margin: 10px 0;
          font-size: 22px;
        }
        .text {
          flex: 1;
        }
      }
    }
  }
}
</style>
