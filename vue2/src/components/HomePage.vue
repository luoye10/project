<template>
  <div class="container">
    <div class="head">
      <img class="name" src="../assets/newLogo.png" />
      <div class="title">
        <ul class="itemList">
          <li class="list" v-for="item in items" :key="item.message">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="login">
        <i class="el-icon-user icon"></i>
        <span class="text">注册&nbsp;/&nbsp;登录</span>
      </div>
    </div>
    <SectionPage></SectionPage>
    <NumberPage></NumberPage>
    <SubjectPage></SubjectPage>

    <DataProduct></DataProduct>
    <DevelopServe></DevelopServe>
    <BottomContent></BottomContent>
  </div>
</template>
<script>
import SectionPage from './SectionPage.vue';
import NumberPage from './NumberPage.vue';
import SubjectPage from './SubjectPage.vue';
import DataProduct from './DataProduct.vue';
import DevelopServe from './DevelopServe.vue';
import BottomContent from './BottomContent.vue';
export default {
  components: {
    SectionPage,
    NumberPage,
    SubjectPage,
    DataProduct,
    DevelopServe,
    BottomContent,
  },
  data() {
    return {
      items: [
        '首页',
        '数据市场',
        '用户中心',
        '流通业务',
        '技术支撑',
        '数据资产管理',
        '生态合作',
      ],
    };
  },
};
</script>
<style lang="less">
.container {
  width: 100%;
  height: 100%;
  cursor: pointer;
  .head {
    width: 100%;
    height: 64px;
    background: #182926;
    color: #ffffff;
    position: relative;
    .name {
      padding-left: 120px;
      padding-top: 18px;
    }
    .title {
      position: absolute;
      left: 338px;
      top: 0;
      .list {
        display: inline-block;
        height: 24px;
        line-height: 24px;
        margin: 20px;
      }
    }
    .login {
      position: absolute;
      right: 49px;
      top: 21px;
      .icon {
        width: 15px;
        height: 15px;
        padding-right: 12px;
      }
    }
  }
}
</style>
