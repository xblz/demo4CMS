<template>
  <div>
    <div style="margin: 10px;border: 1px solid #1F2D3B">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">筛选条件</span>
      </div>
      <x-search :config="searchConfig"></x-search>
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
        searchConfig: {
          // 筛选内容
          params: [
            {
              type: "input",
              param: "name",
              label: "用户名",
              placeholder: "请输入用户名"
            },
            {
              type: "input",
              param: "mobile",
              label: "手机号",
              placeholder: "请输入手机号"
            }
          ],
          // 查询按钮点击事件
          onSearch(obj) {
            console.log(JSON.stringify(obj));
            context.getSampleList();
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
            }, {
              label: "按钮操作(button)",
              type: "button",
              buttons: [
                {
                  text: "修改",
                  action: function (index, obj) {
                    alert(index + JSON.stringify(obj));
                  }
                },
                {
                  text: "删除",
                  action: function (index, obj) {
                    alert(index + JSON.stringify(obj));
                  }
                }
              ]

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