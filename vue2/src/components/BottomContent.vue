<template>
  <div class="bottom">
    <div class="bottom-box">
      <div class="function">
        <ul class="itemList">
          <li class="item" v-for="item in items" :key="item.message">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="address">
        <ul class="listItem">
          <li class="list" v-for="item in lists" :key="item.message">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        '智能客服',
        '党建园地',
        '文化交易',
        '加盟我们',
        '新闻动态',
        '党建信息',
      ],
      lists: ['浙ICP备19047577号-1', '浙公网安备 33010802010762号'],
    };
  },
};
</script>
<style lang="less" scoped>
.bottom {
  width: 100%;
  height: 76px;
  background: linear-gradient(180deg, #05414a 1%, #063039 100%);
  font-size: 14px;
  position: relative;
  .bottom-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .function {
    text-align: center;
    .itemList {
      display: flex;
      color: #cbcbcb;
      .item {
        width: 56px;
        margin: 0 20px;
        font-size: 14px;
        color: #cbcbcb;
        text-align: center;
      }
    }
  }
  .listItem {
    display: flex;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    color: #ffffff;
    .list {
      flex: 1;
      &:nth-child(1) {
        text-align: right;
        padding-right: 20px;
        border-right: 1px solid #ffffff;
      }
      &:nth-child(2) {
        text-align: left;
        padding-left: 20px;
      }
    }
  }
}
</style>
