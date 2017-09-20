<!--
  config 格式字段说明：

  {
    page: 1,  // 页码
    total: 100,  // 总条数
    pageSize: 10,
    pageSizes: [10, 20, 50, 100],
    handleSizeChange(pageSize) {
      console.log(pageSize)
    },
    handleCurrentChange(pageNum) {
      console.log(pageNum)
    }
  }
-->
<template>
  <el-pagination v-if="config" @size-change="config.handleSizeChange" @current-change="config.handleCurrentChange" layout="total, sizes, prev, pager, next, jumper"
                 :current-page="config.page" :page-sizes="config.pageSizes" :page-size="config.pageSize" :total="config.total" style="margin: 20px 0; text-align: center">
  </el-pagination>
</template>

<script>

  export default {
    props: {
      config: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }

</script>