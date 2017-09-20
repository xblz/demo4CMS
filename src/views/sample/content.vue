<template>
  <div>
    <div style="margin: 10px;border: 1px solid #1F2D3B">
      <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
        <span style="font-size: 14px;">内容显示</span>
      </div>
      <x-content :config="contentConfig"></x-content>
    </div>

    <el-row>
      <el-col :span="10" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>html示例：</span>
          </div>
          <textarea class="code-textarea" rows="2" readonly>
            <x-content :config="contentConfig"></x-content>
          </textarea>
        </div>
      </el-col>
      <el-col :span="14" style="padding: 10px;">
        <div style="border: 1px solid #1F2D3B">
          <div style="background-color: #1F2D3B;padding: 10px;color: #dfdfdf">
            <span>script示例：</span>
          </div>
          <textarea class="code-textarea" rows="30" readonly>
            export default {
              data() {
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
        }
      }
    }
  }

</script>