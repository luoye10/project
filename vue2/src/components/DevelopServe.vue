<template>
  <div class="develop">
    <div class="subject">
      <span class="line"></span>
      <span class="text">开发服务</span>
      <span class="line"></span>
    </div>
    <div class="content">
      <div class="title">
        <ul class="itemList">
          <li class="item" v-for="item in items" :key="item.message">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="right">
        <ul class="listItem">
          <li class="list" v-for="item in lists" :key="item.message">
            <div class="keyword">{{ item.title }}</div>
            <div class="content">{{ item.content }}</div>
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
      items: ['数据开发', '数据治理', '数据服务'],
      lists: [
        {
          title: '解决方案',
          content:
            '提供数据建模的拖拉拽或者流程搭建，数据预处理、特征工程、机器学习、联邦学习、模型评估等集成算法组件…',
        },
        {
          title: '场景专题',
          content:
            '针对涉及隐私的数据，提供基于mpc、tee、sdb等技术路线的加密服务，帮助客户在自身数据价值出域，数据不出户…',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.develop {
  height: 540px;
  background: url(../assets/backdrop.png);
  .subject {
    text-align: center;
    vertical-align: middle;
    padding: 50px 0;
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
      color: #ffffff;
    }
  }
  .content {
    display: flex;
    .title {
      width: 240px;
      height: 404px;
      background: #083438;
      opacity: 0.8;
      margin-left: 100px;
      text-align: center;
      .itemList {
        margin-top: 40px;
      }
      .item {
        width: 240px;
        height: 68px;
        line-height: 68px;
        font-weight: 500;
        color: #ffffff;
        &:nth-child(1) {
          background: linear-gradient(
            270deg,
            rgba(1, 28, 25, 0.43) 0%,
            #074641 100%
          );
        }
      }
    }
    .right {
      flex: 1;
      margin-left: 40px;
      margin-top: 40px;
      .list {
        width: 840px;
        height: 103px;
        border-bottom: 1px solid #15808c;
        color: #ffffff;
        .keyword {
          font-weight: 500;
          margin: 20px 0;
        }
        .content {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
