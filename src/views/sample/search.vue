<template>
  <div>
    <div style="margin: 10px;border: 1px solid #1F2D3B">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">筛选条件</span>
      </div>
      <x-search :config="searchConfig"></x-search>
    </div>

    <el-row>
      <el-col :span="10" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>html示例：</span>
          </div>
          <textarea class="code-textarea" rows="2" readonly>
            <x-search :config="searchConfig"></x-search>
          </textarea>
        </div>
      </el-col>
      <el-col :span="14" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>script示例：</span>
          </div>
          <textarea class="code-textarea" rows="38" readonly>
            export default {
              data() {
                return {
                  searchConfig: {
                    // 筛选内容
                    params: [
                      {
                        type: "input",
                        param: "name",
                        label: "姓名",
                        defValue: "",
                        placeholder: "请输入姓名"
                      }, {
                        type: "date",
                        param: "date",
                        label: "日期",
                        defValue: "",
                        placeholder: "请选择日期"
                      }, {
                        type: "select",
                        param: "gender",
                        label: "性别",
                        defValue: "",
                        placeholder: "请选择性别",
                        options: [{label: "男", value: "1"}, {label: "女", value: "0"}],
                      }
                    ],
                    // 查询按钮点击事件
                    onSearch(obj) {
                      alert(JSON.stringify(obj))
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
        searchConfig: {
          // 筛选内容
          params: [
            {
              type: "input",
              param: "name",
              label: "姓名",
              defValue: "",
              placeholder: "请输入姓名"
            }, {
              type: "date",
              param: "date",
              label: "日期",
              defValue: "",
              placeholder: "请选择日期"
            }, {
              type: "select",
              param: "gender",
              label: "性别",
              defValue: "",
              placeholder: "请选择性别",
              options: [{label: "男", value: "1"}, {label: "女", value: "0"}],
            }
          ],
          // 查询按钮点击事件
          onSearch(obj) {
            alert(JSON.stringify(obj))
          }
        }
      }
    }
  }

</script>