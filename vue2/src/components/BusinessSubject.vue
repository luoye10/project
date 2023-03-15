<template>
  <div class="container">
    <div class="title">业务专题</div>
    <div class="data">
      <div class="theme">
        <div class="text">最新上架</div>
        <div class="text">热门数据产品</div>
      </div>
      <div class="table">
        <el-table :data="tableData" class="list">
          <el-table-column prop="ranking" label="排名">
            <template slot-scope="scope">
              <span v-if="!scope.row.isImg">{{ scope.row.ranking }}</span>
              <img
                v-else
                style="width: 20px"
                :src="require('@/assets/' + scope.row.ranking + '.png')"
              />
            </template>
          </el-table-column>
          <el-table-column prop="trade" label="行业"> </el-table-column>
          <el-table-column prop="name" label="产品名称"> </el-table-column>
          <el-table-column prop="type" label="产品类型"> </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          ranking: 'one',
          isImg: true,
          trade: '互联网行业',
          name: 'XXXXX',
          type: '数据集',
        },
        {
          ranking: 'two',
          isImg: true,
          trade: '金融行业',
          name: 'XXXXX',
          type: '数据集',
        },
        {
          ranking: 'three',
          isImg: true,
          trade: '能源行业',
          name: 'XXXXX',
          type: '数据集',
        },
        {
          ranking: '4',
          trade: '医药行业',
          name: 'XXXXX',
          type: '数据集',
        },
        {
          ranking: '5',
          trade: '房地产行业',
          name: 'XXXXX',
          type: '数据集',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 700px;
  height: 326px;
  background: #ffffff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  position: absolute;
  left: 500px;
  top: 300px;
  .title {
    height: 64px;
    background: #f7f8fa;
    border-radius: 4px 4px 0px 0px;
    font-size: 20px;
    font-weight: 500;
    color: #333333;
    padding: 20px;
  }
  .data {
    display: flex;
    .theme {
      width: 124px;
      height: 240px;
      border-right: 1px solid #dcdfe6;
      vertical-align: top;
      .text {
        font-size: 14px;
        color: #262626;
        margin: 20px 0;
        margin-right: 20px;
        text-align: right;
      }
    }
    .table {
      flex: 1;
      /deep/.el-table__cell {
        padding: 7px 0;
        line-height: 30px;
        text-align: center;
      }
    }
  }
}
</style>
