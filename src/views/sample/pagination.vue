<template>
  <div>
    <div style="margin: 10px;border: 1px solid #1F2D3B">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">分页功能</span>
      </div>
      <x-pagination :config="paginationConfig"></x-pagination>
    </div>

    <el-row>
      <el-col :span="10" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>html示例：</span>
          </div>
          <textarea class="code-textarea" rows="2" readonly>
            <x-pagination :config="paginationConfig"></x-pagination>
          </textarea>
        </div>
      </el-col>
      <el-col :span="14" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>script示例：</span>
          </div>
          <textarea class="code-textarea" rows="25" readonly>
            export default {
              data() {
                return {
                  // 分页内容
                  paginationConfig: {
                    page: 1,
                    total: 100,
                    pageSize: 10,
                    pageSizes: [10, 20, 50, 100],
                    handleSizeChange(pageSize) {
                      alert(pageSize)
                    },
                    handleCurrentChange(pageNum) {
                      alert(pageNum)
                    }
                  }
                }
              }
            }
          </textarea>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>

  export default {
    data() {
      return {
        // 分页内容
        paginationConfig: {
          page: 1,  // 页码
          total: 100,  // 总条数
          pageSize: 10,
          pageSizes: [10, 20, 50, 100],
          handleSizeChange(pageSize) {
            alert(pageSize)
          },
          handleCurrentChange(pageNum) {
            alert(pageNum)
          }
        }
      }
    }
  }

</script>