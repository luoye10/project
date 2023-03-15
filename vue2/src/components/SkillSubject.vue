<template>
  <div class="box">
    <div class="title">技术专题</div>
    <div class="items">
      <ul class="itemList">
        <li class="item" v-for="item in itemList" :key="item.message">
          <div class="text">{{ item.title }}</div>
          <div class="num">{{ item.num }}</div>
        </li>
      </ul>
    </div>
    <div class="test">
      <div class="theme">
        <span class="subject">算法组件使用排行</span>
        <span class="word">查看>></span>
      </div>
      <div class="ranking">
        <ul class="lists">
          <li class="list" v-for="item in lists" :key="item.message">
            <img :src="require('@/assets/' + item.url + '.png')" class="img" />
            <div class="name">{{ item.name }}</div>
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
      itemList: [
        {
          title: '7日内API调用次数',
          num: '200 次',
        },
        {
          title: '7日内隐私计算任务数',
          num: '50 个',
        },
        {
          title: '7日内存储使用量',
          num: '20 tb',
        },
        {
          title: '7日内隐私计算任务数',
          num: '1 tb',
        },
      ],
      lists: [
        {
          url: 'one',
          name: '隐私求交',
        },
        {
          url: 'two',
          name: '横向逻辑回归',
        },
        {
          url: 'three',
          name: '特证分箱',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.box {
  width: 480px;
  height: 627px;
  background: url(../assets/background.png);
  padding: 20px;
  .title {
    height: 28px;
    font-size: 20px;
    color: #ffffff;
  }
  .itemList {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    .item {
      width: 210px;
      height: 102px;
      padding: 20px;
      margin: 10px 0;
      background: #ffffff;
      border-radius: 4px;
      opacity: 0.94;
      color: #262626;
      &:nth-child(odd) {
        margin-right: 10px;
      }
      &:nth-child(even) {
        margin-left: 10px;
      }
      .num {
        font-size: 22px;
        font-weight: 500;
        margin-top: 10px;
      }
    }
  }
  .test {
    width: 440px;
    height: 296px;
    background: #ffffff;
    margin-top: 10px;
    border-radius: 4px;
    padding: 10px 20px;
    .theme {
      height: 36px;
      border-bottom: 1px solid #dcdfe6;
      .subject {
        height: 26px;
        font-size: 18px;
        color: #262626;
        line-height: 26px;
      }
      .word {
        font-size: 14px;
        color: #06b79f;
        line-height: 22px;
        margin-left: 205px;
      }
    }
    .list {
      height: 70px;
      display: flex;
      align-items: center;
      .img {
        width: 50px;
        height: 50px;
        margin-top: 40px;
        border: 1px dashed #444;
      }
      .name {
        color: #262626;
        margin-left: 40px;
        margin-top: 40px;
      }
    }
  }
}
</style>
