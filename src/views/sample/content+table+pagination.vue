<template>
  <div>
    <div style="margin: 10px;border: 1px solid #1F2D3B">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">详细信息</span>
      </div>
      <x-content :config="contentConfig"></x-content>
    </div>
    <div style="margin: 10px;border: 1px solid #1F2D3B">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">列表信息</span>
      </div>
      <x-table :config="tableConfig"></x-table>
      <x-pagination :config="paginationConfig"></x-pagination>
    </div>
  </div>
</template>


<script>

  import {getListData} from "../../api/sampleApi"

  export default {
    methods: {
      getSampleList() {
        var self = this;
        var params = {};
        params.pageSize = self.paginationConfig.pageSize;
        params.page = self.paginationConfig.page;
        getListData(params, function (data) {
          self.tableConfig.data = data.data;
          self.paginationConfig.total = data.total;
        })
      }
    },
    created: function () {
      this.getSampleList()
    },
    data() {
      const context = this;
      return {
        contentConfig: {
          params: [
            [{param: "col1", label: "一列",}],
            [{param: "col2", label: "二列",}, {param: "col2", label: "二列",}],
            [{param: "col3", label: "三列",}, {param: "col3", label: "三列",}, {param: "col3", label: "三列",}],
            [{param: "col4", label: "四列",}, {param: "col4", label: "四列",}, {param: "col4", label: "四列",}, {param: "col4", label: "四列",}],
            [{param: "col6", label: "六列",}, {param: "col6", label: "六列",}, {param: "col6", label: "六列",}, {param: "col6", label: "六列",}, {param: "col6", label: "六列",}, {param: "col6", label: "六列",}],
          ],
          data: {
            col1: "一行显示一列数据",
            col2: "一行显示二列数据",
            col3: "一行显示三列数据",
            col4: "一行显示四列数据",
            col6: "一行显示六列数据",
          }
        },
        tableConfig: {
          // 列表内容
          params: [
            {
              label: "姓名",
              prop: "name",
            }, {
              label: "居住地址",
              prop: "address",
              type: "label"
            }, {
              label: "手机号码",
              prop: "mobile",
            }, {
              label: "入职日期",
              prop: "date",
              type: "date"
            }, {
              label: "个人主页",
              prop: "href",
              type: "href",
              action(index, obj) {
                alert(index + JSON.stringify(obj));
              }
            }
          ],
          data: []
        },
        paginationConfig: {
          page: 1,  // 页码
          total: 100,  // 总条数
          pageSize: 10,
          pageSizes: [10, 20, 50, 100],
          handleSizeChange(pageSize) {
            context.paginationConfig.pageSize = pageSize;
            context.getSampleList();
          },
          handleCurrentChange(pageNum) {
            context.paginationConfig.page = pageNum;
            context.getSampleList();
          }
        }
      }
    }
  }

</script>