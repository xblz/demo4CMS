<template>
  <div>
    <div style="margin: 10px;border: 1px solid #1F2D3B;padding-bottom: 10px;">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">列表信息</span>
      </div>
      <x-table :config="tableConfig"></x-table>
    </div>

    <el-row>
      <el-col :span="10" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>html示例：</span>
          </div>
          <textarea class="code-textarea" rows="2" readonly>
            <x-table :config="tableConfig"></x-table>
          </textarea>
        </div>
      </el-col>
      <el-col :span="14" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>script示例：</span>
          </div>
          <textarea class="code-textarea" rows="55" readonly>
            export default {
              data() {
                return {
                  tableConfig: {
                    params: [
                      {
                        label: "默认()",
                        prop: "name",
                      }, {
                        label: "文字(label)",
                        prop: "address",
                        type: "label"
                      }, {
                        label: "文字(带有adapter)",
                        prop: "gender",
                        adapter: {0: "男", 1: "女"}
                      }, {
                        label: "开关(switch)",
                        prop: "switch",
                        type: "switch"
                      }, {
                        label: "日期(date)",
                        prop: "date",
                        type: "date"
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

  import {getListData} from "../../api/sampleApi"
  import {confirmDialog} from "../../common/dialogUtil"

  export default {
    methods: {
      getSampleList() {
        var self = this;
        var params = {};
        params.pageSize = 10;
        getListData(params, function (data) {
          self.tableConfig.data = data.data;
        })
      }
    },
    created: function () {
      this.getSampleList()
    },
    data() {
      const context = this;
      return {
        tableConfig: {
          // 列表内容
          params: [
            {
              label: "默认()",
              prop: "name",
            }, {
              label: "文字(label)",
              prop: "address",
            }, {
              label: "文字(label)",
              prop: "gender",
              adapter: {0: "男", 1: "女"}
            }, {
              label: "开关(switch)",
              prop: "switch",
              type: "switch"
            }, {
              label: "日期(date)",
              prop: "date",
              type: "date"
            }, {
              label: "按钮操作(button)",
              type: "button",
              prop: "href",
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
                    confirmDialog(context, '提示', '此操作将删除数据, 是否继续?', function () {
                      context.getSampleList();
                      context.$message({type: 'success', message: '删除成功!'});
                    })
                  }
                }
              ]

            }
          ],
          data: []
        }
      }
    }
  }

</script>